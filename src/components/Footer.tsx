"use client";

import { footerLinks } from "@/lib/server";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { Autoplay, FreeMode } from 'swiper/modules';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Image
        src={"/footer_image.png"}
        alt="footer image"
        className="absolute -z-10 h-full w-full object-cover mix-blend-soft-light"
        width={1920}
        height={1080}
      />
      <div
        className="absolute bg-black -z-10 h-full opacity-80 w-full object-cover mix-blend-soft-light"

      />
      <Container>
        <div className="grid grid-cols-10 gap-y-10 p-10">
          <div className="col-span-10 grid grid-cols-2 sm:grid-cols-4 md:col-span-8">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div
                key={index}
                className="flex min-w-fit flex-col gap-4 max-sm:first:hidden max-sm:last:hidden"
              >
                <h3 className="bg-background-gradient bg-clip-text text-xl font-semibold text-transparent">
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
          <div className="col-span-10 md:col-span-2 flex flex-col gap-8 text-white">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 ">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={140}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
                <p className="text-xs text-gray-300 max-w-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold">Subscribe</h4>
              <p className="text-xs text-gray-300 max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
              <div className=" gap-y-8">
                <form className="flex w-full gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email Address"
                    className="w-full bg-white text-black px-3 py-1.5 text-xs rounded-sm placeholder:text-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        <div className="px-4 pb-6 sm:px-10">
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            freeMode={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[FreeMode, Autoplay]}
            className="w-full"
          >
            <SwiperSlide className="!w-auto">
              <Link
                href="/privacy-policy"
                className="text-xs hover:underline whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/terms-and-conditions"
                className="text-xs hover:underline whitespace-nowrap"
              >
                Terms of Use
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/refund-policy"
                className="text-xs hover:underline whitespace-nowrap"
              >
                Sales and Refunds
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/legal"
                className="text-xs hover:underline whitespace-nowrap"
              >
                Legal
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
              <Link
                href="/site-map"
                className="text-xs hover:underline whitespace-nowrap"
              >
                Site Map
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </footer>
  );
}

