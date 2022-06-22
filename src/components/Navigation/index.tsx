import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { IoHome, IoHomeOutline, IoLogoTiktok } from "react-icons/io5";
import { RiInstagramFill, RiInstagramLine } from "react-icons/ri";

const Navigation = () => {
  const { pathname } = useRouter();

  const links = [
    {
      href: "/",
      name: "Home",
      Icon: IoHomeOutline,
      ActiveIcon: IoHome,
    },
    {
      href: "/tiktok",
      name: "Tik Tok",
      Icon: IoLogoTiktok,
      ActiveIcon: FaTiktok,
    },
    {
      href: "/instagram",
      name: "Instagram",
      Icon: RiInstagramLine,
      ActiveIcon: RiInstagramFill,
    },
  ];

  return (
    <div className="flex flex-row justify-around md:justify-center w-full text-white border-b-[0.5px] border-gray-600 md:px-[10vw] h-14">
      {links.map(({ href, name, Icon, ActiveIcon }) => (
        <Link key={name} href={href}>
          <a className="flex flex-row justify-center items-center cursor-pointer text-xl mx-3">
            {pathname === href ? (
              <ActiveIcon className="text-3xl md:ml-1 md:mr-2" />
            ) : (
              <Icon className="text-3xl md:ml-1 md:mr-2" />
            )}

            <p
              className={`hidden md:block truncate ${
                pathname === href && "font-bold"
              }`}
            >
              {name}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export { Navigation };
