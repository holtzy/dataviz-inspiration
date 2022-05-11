import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Glow } from "./Glow";

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

          {/* Related websites & About on the right */}
          <div className="flex items-center">
            <Link href="/about">
              <span className="font-light mr-4 cursor-pointer text-gray-600 hover:text-black">
                About
              </span>
            </Link>
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="">
                  <Glow>
                    <div className="text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer">
                      Related
                    </div>
                  </Glow>
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
                  <MenuItem
                    url="https://www.data-to-viz.com"
                    label="Data to viz"
                  />
                  <MenuItem
                    url="https://www.r-graph-gallery.com"
                    label="R Graph Gallery"
                  />
                  <MenuItem
                    url="https://www.python-graph-gallery.com"
                    label="Python Graph Gallery"
                  />
                  <MenuItem
                    url="https://www.d3-graph-gallery.com"
                    label="D3.js Graph Gallery"
                  />
                  <MenuItem
                    url="https://www.react-graph-gallery.com"
                    label="React Graph Gallery"
                  />
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

type MenuItemProps = {
  url: string;
  label: string;
};
const MenuItem = ({ url, label }: MenuItemProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={url}
          className={classNames(
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm text-gray-700 decoration-transparent"
          )}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  );
};
