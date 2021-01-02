import { Transition } from '@tailwindui/react';
import React, { FC, useState } from 'react';
import { SearchComponent } from './search';

export const SearchInput: FC<{}> = () => {
  const [needle, setNeedle] = useState<string>();

  const show = (needle?.length || 0) > 2;

  return (
    <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
      <div className="max-w-lg w-full lg:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className={`block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 ${
              show
                ? 'bg-white border-white text-gray-900'
                : 'bg-gray-700 text-gray-300'
            } placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm`}
            placeholder="Search"
            type="search"
            value={needle}
            onChange={(e) => setNeedle(e.target.value)}
          />

          {show && (
            <div
              className="fixed inset-0 z-10"
              aria-hidden="true"
              onClick={(e) => {
                // @ts-ignore
                if (e.target.id === 'background') {
                  setNeedle('');
                }
              }}
            >
              <div id="background" className="absolute inset-0" />
            </div>
          )}

          <Transition
            show={show}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <SearchComponent needle={needle} />
          </Transition>
        </div>
      </div>
    </div>
  );
};
