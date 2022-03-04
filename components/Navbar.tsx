import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <nav id="header" className="w-full bg-white h-24">
        <div
          className={"flex flex-wrap items-center justify-between mt-2 py-2"}
        >
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/">
              <span className="relative  w-8 h-8 cursor-pointer">
                <Image
                  alt={"project logo"}
                  src={"/logo_big.png"}
                  layout="fill"
                  objectFit="contain"
                />
              </span>
            </Link>
          </div>

          {/* Related websites on the right */}
          <div className="">
            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="">
                  <span className="text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer">
                    Related
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://www.data-to-viz.com"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 decoration-transparent"
                        )}
                      >
                        Data to viz
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://www.r-graph-gallery.com"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 decoration-transparent"
                        )}
                      >
                        R Graph Gallery
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://www.python-graph-gallery.com"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 decoration-transparent"
                        )}
                      >
                        Python Graph Gallery
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://www.d3-graph-gallery.com"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 decoration-transparent"
                        )}
                      >
                        D3.js Graph Gallery
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    </>
  );
}
