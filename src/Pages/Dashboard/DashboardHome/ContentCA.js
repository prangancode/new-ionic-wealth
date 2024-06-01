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
// import Webviewer from '../../Webviewer/Webviewer';

const ContentCA = ({ clientAgreement }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const showPdf = "Client Agreement.pdf";

  return (
    <>
      {/* <div className="col-lg-8-servicedetails"> */}
      {/* <div className="service-details-content">

                <h2 className="title text-center text-2xl mb-10">CLIENT AGREEMENT DOCUMENT</h2>
                <p className='description text-justify'>
                    Riverpark Investment and Financial Consultants Ltd is permitted to advise on and arrange
                    (bring about) deals in investments.
                    <br /><br />
                    With regard to investments which we have arranged for you, these will not be kept under review,but we will advise you upon your request. However, we may contact you in the future by means of an unsolicited promotion (i.e. where you had not expressly requested it) should we wish to contact you to discuss the relative merits of an investment or service which we feel may be of interest to you.
                    <br /><br />
                    Riverpark Investment and Financial Consultants Ltd does not handle clients’ money. We
                    never accept a cheque made payable to us or handle cash (unless it is payment in settlement of adviser charges or disbursements for which we have sent you an invoice). If you do send us
                    money, this may delay your transaction as we may have to return this money to you.
                </p>


                <Webviewer showPdf={showPdf} />

            </div> */}

      <h1 className="sr-only">Recent clientAgreement</h1>
      <ul role="list" className="space-y-4">
        {clientAgreement.map((info) => (
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

export default ContentCA;
