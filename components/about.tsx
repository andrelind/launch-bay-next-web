import { FC } from 'react';

type Props = {
  onClose: () => void;
};

export const AboutComponent: FC<Props> = ({ onClose }) => {
  return (
    <div className="py-3 px-4 sm:py-6 sm:px-6 text-left">
      <div className="flex flex-1 justify-between items-center">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Launch Bay Next
        </h3>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onClose}
            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-lbnred"
          >
            <span className="sr-only">Close</span>
            {/* <!-- Heroicon name: x --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-5 prose prose-indigo text-gray-500">
        <h3>Bugs or feature requests</h3>

        <a href="">Report them here</a>

        <h3>Like the builder?</h3>
        <p>
          Please consider donating, either via{' '}
          <a href="https://www.patreon.com/andrelind">Patreon</a> or{' '}
          <a href="https://paypal.me/launchbaynext">PayPal</a>
        </p>

        <h3>Credits</h3>
        <ul>
          <li>
            Data based on{' '}
            <a href="https://github.com/guidokessels/xwing-data2">
              xwing-data2
            </a>{' '}
            by guidokessels
          </li>
          <li>
            <a href="https://github.com/geordanr/xwing-miniatures-font">
              X-wing miniatures font
            </a>{' '}
            by geordanr
          </li>
        </ul>

        <h3>Trivia</h3>
        <ul>
          <li>Written in Typescript</li>
          <li>React frontend (next.js)</li>
          <li>GraphQL + Mongo for backend</li>
        </ul>

        <h3>Legal</h3>
        <p>
          This builder is unofficial and is not affiliated with Fantasy Flight
          Games, Lucasfilm Ltd., or Disney.
        </p>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
};
