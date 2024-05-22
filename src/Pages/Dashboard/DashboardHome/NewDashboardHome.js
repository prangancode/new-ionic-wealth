import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
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

const tabs = [
  { name: "Recent", href: "#", current: true },
  { name: "Most Liked", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
];
const questions = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "What would you have done differently if you ran Jurassic Park?",
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewDashboardHome = () => {
  return (
    <>
      <div className="px-4 sm:px-0">
        <div className="sm:hidden">
          <label htmlFor="question-tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="question-tabs"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                )}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? "bg-rose-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="sr-only">Recent questions</h1>
        <ul role="list" className="space-y-4">
          {questions.map((question) => (
            <li
              key={question.id}
              className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
            >
              <article aria-labelledby={"question-title-" + question.id}>
                <div>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={question.author.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <a
                          href={question.author.href}
                          className="hover:underline"
                        >
                          {question.author.name}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href={question.href} className="hover:underline">
                          <time dateTime={question.datetime}>
                            {question.date}
                          </time>
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 self-center">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
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
                    id={"question-title-" + question.id}
                    className="mt-4 text-base font-medium text-gray-900"
                  >
                    {question.title}
                  </h2>
                </div>
                <div
                  className="mt-2 space-y-4 text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: question.body }}
                />
                <div className="mt-6 flex justify-between space-x-8">
                  <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <HandThumbUpIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <span className="font-medium text-gray-900">
                          {question.likes}
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
                          {question.replies}
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
                          {question.views}
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
      </div>
    </>
  );
};

export default NewDashboardHome;
