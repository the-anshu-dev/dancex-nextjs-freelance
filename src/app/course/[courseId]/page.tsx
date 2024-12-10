"use client";

import Container from "@/components/Container";
import FAQContainer from "@/components/FAQContainer";
import HeadingPrimary from "@/components/HeadingPrimary";
import ImageWithIcon from "@/components/ImageWithIcon";
import StoryCard from "@/components/StoryCard";
import { customerStrories, faqs } from "@/lib/server";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const { courseId } = useParams();

  return (
    <div>
      <div className="border-t-2 border-slate-800">
        <Container>
          <div className="md:px-8">
            <div className="mt-4 grid grid-cols-12 gap-x-3 gap-y-5">
              <h2 className="order-1 col-span-12 text-3xl font-semibold md:col-span-10">
                <span className="bg-background-gradient bg-clip-text text-transparent">
                  Freestyle popping
                </span>{" "}
                3BR w/ incredible views
              </h2>
              <div className="order-5 col-span-12 text-center md:order-2 md:col-span-2">
                <Link
                  href={"/course/" + courseId + "/viewall"}
                  className="text-nowrap rounded-full bg-background-gradient px-8 py-2 text-lg font-semibold md:rounded-xl"
                >
                  view all
                </Link>
              </div>
              <div className="order-2 col-span-12 md:order-3 md:col-span-6">
                <ImageWithIcon
                  src="/image-1.png"
                  alt="image 1"
                  iconSrc="/premium-icon.svg"
                  iconAlt=""
                />
              </div>
              <div className="order-4 col-span-12 grid grid-cols-2 md:order-4 md:col-span-6">
                <ImageWithIcon
                  src="/image-2.jpg"
                  alt="image 2"
                  iconSrc="/share icon.svg"
                  iconAlt=""
                />
                <ImageWithIcon
                  src="/image-3.jpg"
                  alt="image 3"
                  iconSrc="/share icon.svg"
                  iconAlt=""
                />
                <ImageWithIcon
                  src="/image-4.jpg"
                  alt="image 4"
                  iconSrc="/share icon.svg"
                  iconAlt=""
                />
                <ImageWithIcon
                  src="/course-3.jpg"
                  alt="image 5"
                  iconSrc="/share icon.svg"
                  iconAlt=""
                />
              </div>
              <div className="order-3 col-span-12 md:order-5 md:col-span-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="bg-background-gradient bg-clip-text text-3xl font-semibold text-transparent">
                      Hip-hop freestyle
                    </h3>
                    <p className="text-xs text-secondary">Dubai UAE</p>
                  </div>
                  <p className="hidden md:block">{"⭐".repeat(5)}</p>
                </div>
                <div className="mt-4">
                  <p className="text-base">
                    Hip-hop dance is a vibrant form of dance that combines a
                    variety of freestyle movements to create a cultural piece of
                    art.
                  </p>
                </div>
              </div>
              <div className="order-6 col-span-12 flex items-center justify-center rounded-xl bg-[#FFF1E0] p-5 md:col-span-6">
                <div className="flex flex-col items-center justify-center gap-5">
                  <h4 className="text-4xl font-semibold text-black">
                    Offer Price 50% Off
                  </h4>
                  <button className="text-nowrap rounded-full bg-background-gradient px-8 py-2 text-lg font-semibold md:rounded-xl">
                    Try Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-2 py-4 *:relative *:aspect-video *:w-1/4 *:overflow-hidden *:rounded-md md:gap-4 md:py-16 *:md:rounded-xl">
              <div>
                <Image
                  src="/image-1.png"
                  alt="image 1"
                  className="absolute h-full w-full object-cover opacity-70"
                  width={400}
                  height={400}
                />
                <Image
                  src={"/play-icon.svg"}
                  alt="play icon"
                  className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/image-2.jpg"
                  alt="image 2"
                  className="absolute h-full w-full object-cover opacity-70"
                  width={400}
                  height={400}
                />
                <Image
                  src={"/play-icon.svg"}
                  alt="play icon"
                  className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/image-3.jpg"
                  alt="image 3"
                  className="absolute h-full w-full object-cover opacity-70"
                  width={400}
                  height={400}
                />
                <Image
                  src={"/play-icon.svg"}
                  alt="play icon"
                  className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/image-4.jpg"
                  alt="image 4"
                  className="absolute h-full w-full object-cover opacity-70"
                  width={400}
                  height={400}
                />
                <Image
                  src={"/play-icon.svg"}
                  alt="play icon"
                  className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-y-2 border-slate-800">
        <Container>
          <div className="space-y-6 md:p-8">
            <div className="flex items-center justify-start gap-4">
              <div className="aspect-square w-14 rounded-full md:w-20">
                <Image
                  src={"/profie-pic.jpg"}
                  alt="profile"
                  className="h-full w-full rounded-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl">Musfiqur Rahman</h3>
                <h5 className="bg-background-gradient bg-clip-text text-sm font-semibold text-transparent md:text-lg">
                  Dance Artist
                </h5>
              </div>
            </div>
            <div className="space-y-4 text-lg font-semibold *:*:bg-background-gradient *:*:bg-clip-text *:*:text-transparent md:text-xl">
              <p>
                <span>My work:</span> Dance Artist
              </p>
              <p>
                <span>Email:</span> musfiqur@gmail.com
              </p>
              <p>
                <span>I spend too much time:</span> Dance Artist
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-y-2 border-slate-800">
        <Container>
          <div className="pb-8 md:p-8">
            <div className="space-y-2 md:space-y-4">
              <h4 className="bg-background-gradient bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
                Meet your Artist
              </h4>
              <p className="text-sm md:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <HeadingPrimary secondary="offer" primary="What This place offer">
              <div className="mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-y-8">
                {[
                  { img: "/zumba.png", title: "Classic dance" },
                  { img: "/zumba.png", title: "Modern dance" },
                  {
                    img: "/zumba.png",
                    title: "Ballet dance",
                  },
                  { img: "/zumba.png", title: "hip hop dance" },
                  { img: "/zumba.png", title: "Freestyle dance" },
                  { img: "/zumba.png", title: "Classic dance" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center gap-4 px-8"
                  >
                    <div className={`aspect-square size-20 rounded-md p-1`}>
                      <Image
                        src={item.img}
                        alt={""}
                        width={100}
                        className="h-full w-full object-cover object-center"
                        height={100}
                      />
                    </div>
                    <span className={`text-nowrap font-poppins text-xl`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center pt-16">
                <Link
                  href={"/course/" + courseId + "/viewall"}
                  className="text-nowrap rounded-full bg-background-gradient px-8 py-2 text-lg font-semibold md:rounded-xl"
                >
                  view all
                </Link>
              </div>
            </HeadingPrimary>
            <HeadingPrimary secondary="story" primary="Customer success story">
              <div className="grid gap-4 px-8 sm:grid-cols-2 sm:p-0 md:grid-cols-4">
                {customerStrories.map((story, index) => (
                  <StoryCard key={index} story={story} />
                ))}
              </div>
            </HeadingPrimary>
            <HeadingPrimary secondary="VIDEO" primary="Testimonial">
              <div className="w-full overflow-hidden">
                <div className="grid w-[125%] -translate-x-[20%] grid-cols-5 gap-2 overflow-hidden py-4 *:relative *:aspect-video *:h-full *:overflow-hidden *:rounded-md md:gap-4 md:py-16 *:md:rounded-xl">
                  <div className="col-span-2">
                    <Image
                      src="/profie-pic.jpg"
                      alt="image 1"
                      className="absolute h-full w-full object-cover opacity-70"
                      width={400}
                      height={400}
                    />
                    <Image
                      src={"/play-icon.svg"}
                      alt="play icon"
                      className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-start-3 col-end-5">
                    <Image
                      src="/profie-pic.jpg"
                      alt="image 2"
                      className="absolute h-full w-full object-cover opacity-70"
                      width={400}
                      height={400}
                    />
                    <Image
                      src={"/play-icon.svg"}
                      alt="play icon"
                      className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src="/profie-pic.jpg"
                      alt="image 3"
                      className="absolute h-full w-full object-cover opacity-70"
                      width={400}
                      height={400}
                    />
                    <Image
                      src={"/play-icon.svg"}
                      alt="play icon"
                      className="absolute left-1/2 top-1/2 size-[20%] -translate-x-1/2 -translate-y-1/2 transform"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </HeadingPrimary>
            <HeadingPrimary
              secondary="FAQ"
              primary="Frequently Asked Questions"
            >
              <FAQContainer faqs={faqs} />
            </HeadingPrimary>
          </div>
        </Container>
      </div>
    </div>
  );
}
