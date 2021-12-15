import React from 'react';
import useSwr, { useSWRConfig } from 'swr';
import { v4 as uuid } from 'uuid';
import { colorForFactionKey } from '../helpers/colors';
import { useLocalized } from '../helpers/i18n';
import { pilotName } from '../helpers/names';
import { get, post } from '../helpers/request';
import { XWS } from '../helpers/types';
import { XwingFont } from './fonts/xwing';
import { colorForFormat } from './format';
import { TagComponent } from './tag';

type Props = {
  xws: XWS;
  onClose: () => void;
};

export const SavePanel: React.FC<Props> = ({ xws, onClose }) => {
  const { t } = useLocalized();
  const { mutate } = useSWRConfig();
  const { data: lists } = useSwr('/lists', () => get<XWS[]>('/lists'));

  return (
    <div>
      <div>
        <ul className="overflow-y-auto grid grid-cols-2 gap-y-6 gap-x-4">
          {lists?.map((s, i) => {
            if (!s) {
              return null;
            }

            const all = s.pilots.map((p) => p.id);
            const fullCount = [...new Set(all)].map((u) => ({
              xws: u,
              count: all.filter((a) => a === u).length,
            }));

            const joinedPilots = fullCount
              .map((u) => {
                const pilot = s.pilots.find((p) => p.id === u.xws);
                if (!pilot) {
                  return '';
                }

                const name = t(pilotName(pilot, s.faction));
                if (u.count > 1) {
                  return `${u.count}x ${name}`;
                }
                return name;
              })
              .join(', ');

            return (
              <li
                key={`${s.vendor.lbn.uid}_${i}`}
                className="px-4 py-3 sm:px-6 sm:py-5 relative hover:bg-gray-50 rounded-md cursor-pointer"
              >
                <div className="flex items-center">
                  <a
                    className="flex flex-1"
                    onClick={async () => {
                      const edit: XWS = JSON.parse(JSON.stringify(xws));
                      edit.vendor.lbn.uid = s.vendor.lbn.uid;

                      await post('/lists/update', [edit]);
                      mutate('/lists');
                      onClose();
                    }}
                  >
                    <span className="flex-shrink-0 inline-block relative text-center">
                      <XwingFont
                        className="text-lg"
                        icon={s.faction}
                        color={colorForFactionKey(s.faction)}
                      />
                      <div
                        className="text-sm font-medium"
                        style={{ color: colorForFormat(s.format) }}
                      >
                        {s.format.substr(0, 1)}
                      </div>
                    </span>
                    <div className="flex flex-1 flex-col justify-start">
                      <div className="ml-4 flex flex-col flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate flex flex-1 justify-between">
                          <span>{s.name}</span>
                          <span>{s.points}</span>
                        </p>
                        <p className="text-xs text-gray-500 text-left">
                          {joinedPilots}
                        </p>
                      </div>
                      <div className="ml-4">
                        {s.vendor.lbn.tags?.map((tag) => (
                          <TagComponent key={tag} label={tag} />
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="sm:flex sm:justify-between">
          <div className="mt-5 flex items-center">
            <button
              onClick={async () => {
                const edit: XWS = JSON.parse(JSON.stringify(xws));
                edit.vendor.lbn.uid = uuid();

                await post('/lists/update', [edit]);
                mutate('/lists');
                onClose();
              }}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-lbn-500 hover:bg-lbn-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbnred sm:mt-0 sm:w-auto sm:text-sm"
            >
              Save as new list
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

export default SavePanel;
