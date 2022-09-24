import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

import { techStackDialogItems } from "data";
import { useGetText } from "hooks";
import { TextUnderline } from "../TextUnderline/TextUnderline";

interface TechStackMoreInfoDialogProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

export const TechStackMoreInfoDialog: FC<TechStackMoreInfoDialogProps> = ({
  isModalOpen,
  setModalOpen,
  isDarkMode,
}) => {
  const t = useGetText();

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setModalOpen(false)}
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
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  "w-full max-w-xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-gradient-to-r from-sky-600 to-cyan-500"
                }
              >
                <Dialog.Title
                  as="h3"
                  className={"text-white text-2xl font-medium leading-6"}
                >
                  {t("TECH_STACK_DIALOG_TITLE")}
                </Dialog.Title>
                <div className="w-full px-2 pt-7 pb-5">
                  <div className="mx-auto w-full max-w-lg rounded-2xl max-h-72 overflow-y-scroll">
                    {techStackDialogItems.map(({ titleTrlKey, list }) => {
                      return (
                        <Disclosure as="div" className={"mt-2 mr-1"}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span className="truncate overflow-hidden">
                                  {t(titleTrlKey)}
                                </span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 text-indigo-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white flex flex-col">
                                {list.map(({ label, href }) => {
                                  return (
                                    <div className="group w-fit">
                                      <a
                                        href={href}
                                        target="_blank"
                                        className={
                                          href
                                            ? "pointer group w-fit"
                                            : undefined
                                        }
                                      >
                                        &bull; {label}
                                      </a>
                                      <TextUnderline bgColorClass="bg-white" />
                                    </div>
                                  );
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setModalOpen(false)}
                  >
                    {t("GOT_IT")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
