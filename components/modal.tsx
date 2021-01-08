import { Transition } from '@tailwindui/react';
import React, { FC, useEffect, useState } from 'react';

type Props = {
  show: boolean;
  onDismiss?: () => void;
};

export const Modal: FC<Props> = ({ show, onDismiss, children }) => {
  const [realShow, setRealShow] = useState(show);

  useEffect(() => {
    setRealShow(show);
  }, [show]);

  return (
    <Transition
      show={realShow}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed inset-0 transition-opacity"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 pb-20 text-left sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={() => {
                setRealShow(false);
                setTimeout(() => onDismiss?.(), 200);
              }}
            ></div>
          </div>

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition
            appear={true}
            show={realShow}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            className="inline-block align-bottom overflow-visible shadow-xl transform transition-all sm:align-middle bg-white rounded-lg sm:px-4 py-3 sm:my-8 w-full sm:max-w-3xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </Transition>
        </div>
      </div>
    </Transition>
  );
};
