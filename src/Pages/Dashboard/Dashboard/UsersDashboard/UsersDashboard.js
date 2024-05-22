import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import NewDashboardHome from "../../DashboardHome/NewDashboardHome";
import DocumentList from "../../UploadDocument/DocumentList";
import UploadDocumentForm from "../../UploadDocument/UploadDocumentForm";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const communities = [
  { name: "Movies", href: "#" },
  { name: "Food", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Animals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Dinosaurs", href: "#" },
  { name: "Talents", href: "#" },
  { name: "Gaming", href: "#" },
];

const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    body: "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: 291,
  },
  // More posts...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UsersDashboard() {
  let { path, url } = useRouteMatch();

  const navigation = [
    { name: "Home", href: "#", icon: HomeIcon, to: `${url}`, current: true },
    {
      name: "Add Review",
      href: "#",
      icon: FireIcon,
      to: `${url}/add-review`,
      current: false,
    },
    {
      name: "Document List",
      href: "#",
      to: `${url}/document-list`,
      icon: UserGroupIcon,
      current: false,
    },
    {
      name: "Upload Document",
      href: "#",
      to: `${url}/upload-document`,
      icon: UserGroupIcon,
      current: false,
    },
    {
      name: "Trending",
      href: "#",
      to: `${url}/trending`,
      icon: ArrowTrendingUpIcon,
      current: false,
    },
  ];
  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? "fixed inset-0 z-40 overflow-y-auto" : "",
              "bg-white shadow-sm lg:static lg:overflow-y-visible"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="#">
                        <img
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                          alt="Your Company"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-900 hover:underline"
                    >
                      Go Premium
                    </a>
                    <a
                      href="#"
                      className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </a>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-5 flex-shrink-0">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <a
                      href="#"
                      className="ml-6 inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                    >
                      New Post
                    </a>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "hover:bg-gray-50",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                  >
                    New Post
                  </a>

                  <div className="mt-6 flex justify-center">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:underline"
                    >
                      Go Premium
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className="py-10">
          {/* need to be remove 3xl & 7xl */}
          <div className="mx-auto  sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="space-y-1 pb-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      exact
                      to={item.to}
                      className={classNames(
                        item.to === window.location.pathname
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-700 hover:bg-gray-50",
                        "group flex items-center rounded-md pl-3 py-2 text-sm font-medium"
                      )}
                      aria-current={
                        item.to === window.location.pathname
                          ? "page"
                          : undefined
                      }
                    >
                      <item.icon
                        className={classNames(
                          item.to === window.location.pathname
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="pt-10">
                  <p
                    className="px-3 text-sm font-medium text-gray-500"
                    id="communities-headline"
                  >
                    Communities
                  </p>
                  <div
                    className="mt-3 space-y-2"
                    aria-labelledby="communities-headline"
                  >
                    {communities.map((community) => (
                      <a
                        key={community.name}
                        href={community.href}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <span className="truncate">{community.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
            <main className="lg:col-span-9 xl:col-span-6">
              <Switch>
                <Route exact path={`${path}`}>
                  <NewDashboardHome />
                </Route>
                <Route path={`${path}/add-review`}>
                  {/* <NewAddReview /> */}
                </Route>
                <Route path={`${path}/document-list`}>
                  <DocumentList />
                </Route>
                <Route path={`${path}/upload-document`}>
                  <UploadDocumentForm />
                </Route>
              </Switch>
            </main>
            <aside className="hidden xl:col-span-4 xl:block">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="who-to-follow-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Who to follow
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {whoToFollow.map((user) => (
                            <li
                              key={user.handle}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={user.href}>{"@" + user.handle}</a>
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900"
                                >
                                  <PlusIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  Follow
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="trending-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="trending-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Trending
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {trendingPosts.map((post) => (
                            <li key={post.id} className="flex space-x-3 py-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={post.user.imageUrl}
                                  alt={post.user.name}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm text-gray-800">
                                  {post.body}
                                </p>
                                <div className="mt-2 flex">
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
                                        {post.comments}
                                      </span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
