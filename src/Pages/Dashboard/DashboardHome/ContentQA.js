import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

const ContentQA = ({ riskProfiler }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const showPdf = "20 Questions Risk Profiler.pdf";
  return (
    <>
      {/* <div className="col-lg-8-servicedetails"> */}
      {/* <div className="service-details-content">

                <h2 className="title text-center text-2xl mb-10">Dynamic Planner Risk Profiler</h2>
                <p className='description'>
                    In order for your adviser to provide you with financial advice, they need to understand your experience of investing in financial products and approach to risk. To do this they have adopted Dynamic Planner’s risk profiling process comprising 3 short sets of questions, which normally takes less than 10 minutes to complete.
                </p><br />
                <ul className='list-disc leading-8 text-blue-400 italic'>
                    <li>Firstly, you will be asked about your experience of investing in different financial products.</li>
                    <li>Next, your attitude to investment risk will be explo</li>
                    <li>Finally, you will be asked a few questions to help your adviser understand your capacity for taking investment risk given your current financial position.</li>
                </ul><br />
                <p>Once you have answered all these questions, return this document to your adviser who will work out your risk profile and use this to inform the financial advice they provide.</p>


                <Webviewer showPdf={showPdf} />

            </div> */}

      <h1 className="sr-only">Recent riskProfiler</h1>
      <ul role="list" className="space-y-4">
        {riskProfiler.map((info) => (
          <li
            key={info.id}
            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
          >
            <article aria-labelledby={"info-title-" + info.id}>
              <div>
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={info.author.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={info.author.href} className="hover:underline">
                        {info.author.name}
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      <a href={info.href} className="hover:underline">
                        <time dateTime={info.datetime}>{info.date}</time>
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 self-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="relative -m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                          <span className="absolute -inset-1" />
                          <span className="sr-only">Open options</span>
                          <EllipsisVerticalIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex px-4 py-2 text-sm"
                                  )}
                                >
                                  <StarIcon
                                    className="mr-3 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span>Add to favorites</span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex px-4 py-2 text-sm"
                                  )}
                                >
                                  <CodeBracketIcon
                                    className="mr-3 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span>Embed</span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex px-4 py-2 text-sm"
                                  )}
                                >
                                  <FlagIcon
                                    className="mr-3 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span>Report content</span>
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <h2
                  id={"info-title-" + info.id}
                  className="mt-4 text-base font-medium text-gray-900"
                >
                  {info.title}
                </h2>
              </div>
              <div
                className="mt-2 space-y-4 text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: info.body }}
              />
              <div className="mt-6 flex justify-between space-x-8">
                <div className="flex space-x-6">
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <HandThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium text-gray-900">
                        {info.likes}
                      </span>
                      <span className="sr-only">likes</span>
                    </button>
                  </span>
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <ChatBubbleLeftEllipsisIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="font-medium text-gray-900">
                        {info.replies}
                      </span>
                      <span className="sr-only">replies</span>
                    </button>
                  </span>
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <EyeIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium text-gray-900">
                        {info.views}
                      </span>
                      <span className="sr-only">views</span>
                    </button>
                  </span>
                </div>
                <div className="flex text-sm">
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <ShareIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium text-gray-900">Share</span>
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* </div> */}
    </>
  );
};

export default ContentQA;
