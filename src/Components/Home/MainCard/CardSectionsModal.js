import { Transition } from "@headlessui/react";
import { Dialog } from "@material-tailwind/react";
import React, { Fragment, useRef } from "react";

const CardSectionsModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-100 "
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity  " />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg   text-left shadow-xl transition-all sm:my-8 ">
                  {/* akhanthake soru modal  */}
                  <div className="flex min-h-full flex-col">
                    {/* sm:sticky sm:top-8  */}
                    <div className="sm:sticky sm:top-8">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur impedit dolore quibusdam nulla, nostrum
                        corrupti vel iure velit sapiente nisi totam facere
                        iusto, laudantium eveniet expedita ea, rem possimus
                        quam.
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CardSectionsModal;
