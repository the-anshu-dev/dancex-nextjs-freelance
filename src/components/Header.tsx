"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const linkClass = "px-2 py-1 xs:px-4 xs:py-2 md:py-3 md:px-8 relative z-10 font-semibold font-poppins text-xs md:text-sm";

  return (
    <header className="bg-background shadow">
      <Container>
        <div className="flex justify-between items-center px-1 md:px-4 gap-2">
          {/* logo */}
          <div className="w-20 xs:w-[15%] xs:min-w-32">
            <Image
              src={"/logo.png"}
              width={300}
              className="w-full h-full object-contain object-center"
              height={150}
              alt="logo"
            />
          </div>
          {/* nav */}
          <div>
            <nav
              className={`flex bg-white relative rounded-full before:absolute before:w-1/2 before:h-full before:bg-background-gradient before:rounded-full before:z-0 before:transition-all before:duration-300 before:ease-in-out before:shadow-md before:shadow-slate-700 ${
                pathname === "/"
                  ? "before:translate-x-0"
                  : pathname === "/artists"
                  ? "before:translate-x-full"
                  : ""
              }`}
            >
              <button
                onClick={() => router.push("/")}
                className={`${linkClass} ${
                  pathname === "/" ? "text-textPrimary" : "text-textSecondary"
                }`}
              >
                Studios
              </button>
              <button
                onClick={() => router.push("/artists")}
                className={`${linkClass} ${
                  pathname === "/artists"
                    ? "text-textPrimary"
                    : "text-textSecondary"
                }`}
              >
                Artists
              </button>
            </nav>
          </div>
          <div className="flex gap-2 md:gap-8 relative">
            {/* profile */}
            <button className="items-center gap-3 hidden xs:flex">
              <div className="size-10">
                <Image
                  src={"/people.png"}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover object-center rounded-full"
                  alt="profile pic"
                />{" "}
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-quicksand">Musfiqur Rahman</p>
                <p className="text-xs text-secondary font-quicksand">
                  ryzenpixel@gmail.com
                </p>
              </div>
            </button>
            <button className="w-10 z-30" onClick={handleMenu}>
              <Image
                src={"/hambar.svg"}
                width={50}
                className="w-full h-full object-contain object-center"
                height={50}
                alt="menu"
              />
            </button>
            {/* menu */}
            {isOpen && (
              <div
                className="fixed left-0 top-0 w-screen h-screen z-20"
                onClick={() => setIsOpen((prev) => !prev)}
              ></div>
            )}
            <div
              className={`fixed md:absolute left-1/2 -translate-x-1/2 md:right-0 top-16 bg-foreground text-background w-11/12 md:w-2/3 rounded-2xl shadow-lg z-20 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div
                className="flex flex-col p-4 text-sm gap-2 font-poppins"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <Link href="/signup">Sign up</Link>
                <Link href="/login">Log in</Link>
              </div>
              <div className="h-[1px] bg-background opacity-30"></div>
              <div className="flex flex-col p-2">
                <button className="flex items-center gap-2 text-sm font-poppins">
                  <Image
                    src={"/filter icon.svg"}
                    height={15}
                    width={15}
                    alt=""
                  />{" "}
                  <span className="font-poppins">Filter</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
