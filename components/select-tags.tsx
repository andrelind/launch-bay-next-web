import { setSquadronTagsAction } from 'lbn-core/dist/actions/squadrons';
import { xwsFromSquadron } from 'lbn-core/dist/helpers/convert';
import { bumpPatch } from 'lbn-core/dist/helpers/versioning';
import { UserState } from 'lbn-core/dist/reducers/user';
import requests from 'lbn-core/dist/requests';
import { AppState } from 'lbn-core/dist/state';
import { Squadron } from 'lbn-core/dist/types';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TagComponent } from './tag';

type Props = {
  squadron: Squadron;
  onClose: () => void;
};

export const SelectTagsComponent: FC<Props> = ({ squadron, onClose }) => {
  const dispatch = useDispatch();

  const user = useSelector<AppState, UserState>((s) => s.app.user);
  const [newTag, setNewTag] = useState<string>();

  const allTags = useSelector((s: AppState) => s.app.xws)
    .map((xws) => xws.tags || [])
    .reduce((a, c) => {
      (c || []).forEach((tag) => {
        if (!a?.includes(tag) && !squadron.tags?.includes(tag)) {
          a?.push(tag);
        }
      });
      return a;
    }, [] as string[]);

  return (
    <div className="text-left m-3 sm:m-0">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Selected
        </h3>
        {squadron.tags?.map((tag) => (
          <TagComponent
            key={`${tag}_selected`}
            label={tag}
            onClick={async () => {
              const tags = (squadron.tags || []).filter((t) => tag !== t);
              dispatch(setSquadronTagsAction(squadron.uid, tags));
              squadron.tags = tags;
              squadron.version = bumpPatch(squadron.version || '2.0.0');
              await requests.setSquadron(xwsFromSquadron(squadron), user);
            }}
          />
        ))}
        {!squadron.tags?.length && (
          <div className="font-normal text-gray-400 text-sm">None selected</div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Other tags (gathered from all squadrons)
        </h3>
        {allTags.map((tag) => (
          <TagComponent
            key={`${tag}_all`}
            label={tag}
            onClick={async () => {
              const tags = [...(squadron.tags || []), tag];
              dispatch(setSquadronTagsAction(squadron.uid, tags));
              squadron.tags = tags;
              squadron.version = bumpPatch(squadron.version || '2.0.0');
              await requests.setSquadron(xwsFromSquadron(squadron), user);
            }}
          />
        ))}
      </div>
      <div className="pt-5">
        <div className="sm:flex sm:justify-between">
          <div className="mt-5 flex items-center">
            <div className="max-w-xs w-full">
              <input
                type="text"
                name="tag"
                id="tag"
                className="shadow-sm focus:ring-lbnred focus:border-lbnred block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="New tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
            </div>
            <button
              onClick={async () => {
                if (!newTag || newTag.length < 1) {
                  return;
                }
                const tags = [...(squadron.tags || []), newTag];
                dispatch(setSquadronTagsAction(squadron.uid, tags));
                squadron.tags = tags;
                squadron.version = bumpPatch(squadron.version || '2.0.0');
                await requests.setSquadron(xwsFromSquadron(squadron), user);
              }}
              className="ml-3  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-lbnred hover:bg-lbnred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbnred sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Add
            </button>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="mt-5 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
