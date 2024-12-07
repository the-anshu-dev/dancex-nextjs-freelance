"use client";

import { footerLinks } from "@/lib/server";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Image
        src={"/footer_image.png"}
        alt="footer image"
        className="absolute w-full h-full object-cover -z-10 opacity-50"
        width={1920}
        height={1080}
      />
      <Container>
        <div className="p-10 grid grid-cols-10 gap-y-10">
          <div className="col-span-10 md:col-span-8 grid grid-cols-2 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div
                key={index}
                className="flex flex-col gap-4 max-sm:first:hidden max-sm:last:hidden min-w-fit"
              >
                <h3 className="text-xl font-semibold bg-background-gradient bg-clip-text text-transparent">
                  {title}
                </h3>
                <ul>
                  {links.map((link, ind) => (
                    <li key={ind}>
                      <Link className="text-nowrap" href={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-10 md:col-span-2 gap-6">
            <div className="flex-col gap-2 justify-start hidden md:flex">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={200}
                className="w-1/2"
                height={50}
              />
              <h6>DanceX</h6>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-nowrap md:text-wrap">
              <h6>Subscribe</h6>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div>
                <form className="flex gap-2 w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="px-2 py-1 bg-white placeholder:text-xs"
                  />
                  <button className="px-2 py-1 bg-white text-background text-xs font-semibold">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <ul className="flex gap-4">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
