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

  const linkClass =
    "px-2 py-1 xs:px-4 xs:py-2 md:py-3 md:px-8 relative z-10 font-semibold font-poppins text-xs md:text-sm";

  return (
    <header className="sticky top-0 z-50 bg-background shadow py-2">
      <Container>
        <div className="flex items-center justify-between gap-2 px-1 md:px-4">
          {/* logo */}
          <div
            className="w-20 cursor-pointer xs:w-[15%] xs:min-w-32"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/logo.png"}
              width={192}
              height={73}
              alt="logo"
            />
          </div>
          {/* nav */}
          {(pathname === "/" || pathname === "/artists") && (
            <div>
              <nav
                className={`relative flex rounded-full bg-white before:absolute before:z-0 before:h-full before:w-1/2 before:rounded-full before:bg-background-gradient before:shadow-md before:shadow-slate-700 before:transition-all before:duration-300 before:ease-in-out ${
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
          )}
          <div className="relative flex gap-2 md:gap-8">
            {/* profile */}
            <button
              className="hidden items-center gap-3 xs:flex"
              onClick={() => router.push("/profile")}
            >
              <div className="size-10">
                <Image
                  src={"/people.png"}
                  width={100}
                  height={100}
                  className="h-full w-full rounded-full object-cover object-center"
                  alt="profile pic"
                />{" "}
              </div>
              <div className="hidden text-left md:block">
                <p className="font-quicksand text-sm">Musfiqur Rahman</p>
                <p className="font-quicksand text-xs text-secondary">
                  ryzenpixel@gmail.com
                </p>
              </div>
            </button>
            <button className="z-30 w-10" onClick={handleMenu}>
              <Image
                src={"/hambar.svg"}
                width={50}
                className="h-full w-full object-contain object-center"
                height={50}
                alt="menu"
              />
            </button>
            {/* menu */}
            {isOpen && (
              <div
                className="fixed left-0 top-0 z-20 h-screen w-screen"
                onClick={() => setIsOpen((prev) => !prev)}
              ></div>
            )}
            <div
              className={`fixed left-1/2 top-16 z-20 w-11/12 -translate-x-1/2 rounded-2xl bg-foreground text-background shadow-lg md:absolute md:right-0 md:w-2/3 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div
                className="flex flex-col gap-2 p-4 font-poppins text-sm"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <Link href="/signup">Sign up</Link>
                <Link href="/login">Log in</Link>
              </div>
              <div className="h-[1px] bg-background opacity-30"></div>
              <div className="flex flex-col p-2">
                <button className="flex items-center gap-2 font-poppins text-sm">
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
