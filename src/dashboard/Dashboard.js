import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { BiMessageSquareAdd, BiUserCircle } from "react-icons/bi";

import { ImBlogger, ImBlogger2, ImCross, ImHome } from "react-icons/im";
import { AiFillTag } from "react-icons/ai";
import { FaBars, FaCommentAlt } from "react-icons/fa";
import { BsBellFill, BsFilePost } from "react-icons/bs";

import { BiChevronDownSquare } from "react-icons/bi";
import { RiTodoFill } from "react-icons/ri";

import { Link, Outlet } from "react-router-dom";
import { AiFillUnlock } from "react-icons/ai";
import Login from "../Components/Authentication/Login";

const sideItem = [
  {
    name: "All Project",
    to: "/allPost",
    icon: BiMessageSquareAdd,
    current: false,
  },
  {
    name: "Add New",
    to: "/product",
    icon: BiMessageSquareAdd,
    current: false,
  },
  {
    name: "Categories",
    to: "/categories",
    icon: BiMessageSquareAdd,
    current: false,
  },
];

const product = [
  {
    name: "All Product",
    to: "/allProduct",
    icon: BiMessageSquareAdd,
    current: false,
  },
  {
    name: "Add New product",
    to: "/addNew",
    icon: BiMessageSquareAdd,
    current: false,
  },
  {
    name: "Categories",
    to: "/categories",
    icon: BiMessageSquareAdd,
    current: false,
  },
];

const users = [
  // {
  //   name: "User Profile",
  //   to: "/profile",
  //   icon: BiUserCircle,
  //   current: false,
  // },

  {
    name: "All User",
    to: "/userRoll",
    icon: BiUserCircle,
    current: false,
  },
  {
    name: "Add User",
    to: "/addUser",
    icon: BiUserCircle,
    current: false,
  },
  // {
  //   name: "LogOut",
  //   to: "/Registration",
  //   icon: BiUserCircle,
  //   current: false,
    
  // },
];
const Comments = [
  {
    name: "Comment",
    to: "/comments",
    icon: BiMessageSquareAdd,
    current: false,
  },
];
const Gallery = [
  {
    name: "Gallery",
    to: "/gallery",
    icon: BiMessageSquareAdd,
    current: false,
  },
  {
    name: "New Add",
    to: "/newAdd",
    icon: BiMessageSquareAdd,
    current: false,
  },
];
const Blog = [
  {
    name: "All Blog",
    to: "/blogAll",
    icon: BiMessageSquareAdd,
    current: false,
  },
  {
    name: "Blog Post",
    to: "/blogPost",
    icon: BiMessageSquareAdd,
    current: false,
  },
];

const secondaryNavigation = [
  // { name: "Chat", to: "/chat", icon: FaFacebookMessenger },
  // { name: "User Profile", to: "/profile", icon: BiUserCircle },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logOutdata = () => {
    window.localStorage.clear();
  };

  return (
    <>
      {" "}
      <div className="min-h-full overflow-hidden max-w-[1536px] ml-auto mr-auto bg-[#f9fbfe]">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <ImCross
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <Link to="/" className="cursor-pointer">
                      {" "}
                      <img
                        style={{ width: "60%" }}
                        className="h-8 w-auto rounded-full"
                        src="https://templates.iqonic.design/datum/html/assets/images/logo.png"
                        alt="Easywire logo"
                      />
                    </Link>
                  </div>
                  <nav
                    className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <Menu as="div" className="relative ">
                      <div>
                        <Menu.Button
                          className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 text-white"
                        >
                          <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                            {" "}
                            <AiFillUnlock></AiFillUnlock>{" "}
                          </span>
                          <span className="font-semibold text-white ">
                            Authentication{" "}
                          </span>
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
                        <Menu.Items
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active
                                    ? "hover:bg-cyan-600 rounded-md text-left bg-[#17345f] "
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Login
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/Registration"
                                className={classNames(
                                  active
                                    ? "hover:bg-cyan-600 rounded-md text-left bg-[#17345f] "
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Registration
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/ResetPassword"
                                className={classNames(
                                  active
                                    ? "hover:bg-cyan-600 rounded-md text-left bg-[#17345f] "
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Reset Password
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/ConfirmMail"
                                className={classNames(
                                  active
                                    ? "hover:bg-cyan-600 rounded-md text-left bg-[#17345f] "
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Confirm Mail
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active
                                    ? "hover:bg-cyan-600 rounded-md text-left bg-[#17345f] "
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Reset Password
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <div className="mt-6 pt-6">
                      <div className="space-y-1 px-2"></div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
            </div>
          </>
        </Transition.Root>
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-grow flex-col overflow-y-auto bg-[#0c2556] pt-5 pb-4">
            <nav
              className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="mt-6 pt-6">
                <div className="space-y-1 px-2">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-white"
                          : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                        "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}

                  <Menu as="div" className="relative ">
                    <div>
                      <Menu.Button
                        className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 w-full text-white"
                      >
                        <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                          {" "}
                          <BsFilePost></BsFilePost>{" "}
                        </span>
                        <span className="font-semibold text-white ">
                          Products{" "}
                        </span>

                        {/* <BiChevronDownSquare
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      /> */}
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
                      <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-1 px-2">
                              {product.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "bg-cyan-800 text-white"
                                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <Menu as="div" className="relative ">
                    <div>
                      <Menu.Button
                        className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 w-full text-white"
                      >
                        <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                          {" "}
                          <BsFilePost></BsFilePost>{" "}
                        </span>
                        <span className="font-semibold text-white ">
                          Project
                        </span>

                        {/* <BiChevronDownSquare
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      /> */}
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
                      <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-1 px-2">
                              {sideItem.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "bg-cyan-800 text-white"
                                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* products... */}
                  {/* products... */}
                  {/* products... */}
                  {/* products... */}
                  {/* Comments */}
                  {/* Comments */}
                  {/* Comments */}
                  {/* Comments */}
                  {/* Comments */}
                  {/* Comments */}
                  {/* Comments */}
                  <Menu as="div" className="relative ">
                    <div>
                      <Menu.Button
                        className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 w-full text-white"
                      >
                        <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                          {" "}
                          <FaCommentAlt></FaCommentAlt>{" "}
                        </span>
                        <span className="font-semibold text-white ">
                          Comments{" "}
                        </span>
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
                      <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-1 px-2">
                              {Comments.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "bg-cyan-800 text-white"
                                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  {/* Media */}
                  <Menu as="div" className="relative ">
                    <div>
                      <Menu.Button
                        className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 w-full text-white"
                      >
                        <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                          {" "}
                          <FaCommentAlt></FaCommentAlt>{" "}
                        </span>
                        <span className="font-semibold text-white ">
                          Media{" "}
                        </span>
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
                      <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-1 px-2">
                              {Gallery.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "bg-cyan-800 text-white"
                                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Blog */}
                  {/* Blog */}
                  {/* Blog */}
                  {/* Blog */}
                  {/* Blog */}
                  {/* Blog */}
                  {/* Blog */}
                  <Menu as="div" className="relative ">
                    <div>
                      <Menu.Button
                        className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 w-full text-white"
                      >
                        <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                          {" "}
                          <ImBlogger></ImBlogger>{" "}
                        </span>
                        <span className="font-semibold text-white ">BLOG </span>
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
                      <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-1 px-2">
                              {Blog.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "bg-cyan-800 text-white"
                                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* User */}
                  {/* User */}
                  {/* User */}
                  {/* User */}
                  {/* User */}

                  <Menu as="div" className="relative ">
                    <div>
                      <Menu.Button
                        className="flex  max-w-xs items-center   hover:bg-cyan-600 
                     text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 
                     lg:rounded-md lg:p-2 w-full text-white"
                      >
                        <span className="font-semibold l mr-4 h-6 w-6 flex-shrink-0 text-cyan-200 text-2xl ">
                          {" "}
                          <ImBlogger></ImBlogger>{" "}
                        </span>
                        <span className="font-semibold text-white ">
                          Authentication{" "}
                        </span>
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
                      <Menu.Items
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md
                     bg-[#17345f] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className="space-y-1 px-2">
                              {users.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? "bg-cyan-800 text-white"
                                      : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex  flex-1 flex-col lg:pl-64">
          {/* fixed top-0 left-0 right-0 */}
          <div className="flex  h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none ">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8 bg-white shadow-xl p-2">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="/" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <BiChevronDownSquare
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="ml-4 flex items-center md:ml-6">
                <Link to="/checkout">
                  <button
                    type="button"
                    className="-mt-4 rounded-full bg-white  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-full"
                  >
                    <div className="sr-only">View notifications</div>
                    <div
                    //   style={{ fontSize: "10px" }}
                    //   className="w-3 h-3 ml-auto mr-auto mb-auto mt-auto text-white  rounded-full bg-red-600"
                    >
                      {/* {allChakout.length} */}
                    </div>
                    <BsBellFill
                      className="h-5 w-5 py-auto mt-6"
                      aria-hidden="true"
                    >
                      {" "}
                    </BsBellFill>
                  </button>
                </Link>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2  focus:ring-offset-2 lg:rounded-md lg:p-2 ">
                      <img
                        className="h-8 w-8 rounded-full"
                        // src={currentUser?.photoURL}
                        src="https://templates.iqonic.design/datum/html/assets/images/Flag/flag001.png"
                        alt=""
                      />
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block"></span>
                      {/* <BiChevronDownSquare
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      /> */}
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
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/userProfile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="//settings"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            // onClick={logout}
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex  max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                      <img
                        className="h-10 w-10 rounded-full"
                        // src={currentUser?.photoURL}
                        src="https://templates.iqonic.design/datum/html/assets/images/user/1.jpg"
                        alt=""
                      />
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        <span className="font-semibold">Automation</span>
                        {/* <span className="sr-only">Open user menu for </span> */}
                        {/* {currentUser?.displayName.charAt(0)?.toUpperCase()}
                        {currentUser?.displayName?.slice(1)} */}
                        &nbsp;
                      </span>
                      {/* <BiChevronDownSquare
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      /> */}
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
                    <Menu.Items className="z-100 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="//settings"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            // onClick={logout}
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={logOutdata}
                          >
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/*  */}
          {/*  */}
          <main className="flex-1 pb-8">
            {/* Page header */}
            {/* Page header */}
            {/* Page header */}
            {/* <DHome></DHome> */}
            {/* <Login></Login> */}
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
