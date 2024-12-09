import CategoryCard from "@/components/CategoryCard";
import Container from "@/components/Container";
import HeadingPrimary from "@/components/HeadingPrimary";
import ImageGrids from "@/components/ImageGrids";
import Image from "next/image";

export default function ProfilePage() {
  const profile = {
    name: "Musfiqur Rahman",
    mainRole: "Dance Artist",
    email: "musfiqur@gmail.com",
    profilePic: "/profie-pic.jpg",
    coverPic: "/cover-pic.jpg",
    noOfReviews: 5,
    noOfLikes: 10,
    noOfRating: 4,
    experience: 5,
    location: "Dhaka, Bangladesh",
    danceForms: ["Hip Hop", "Belly Dance", "Salsa"],
    skills: [
      { img: "/image-1.png", title: "Dance" },
      { img: "/image-2.jpg", title: "Music" },
      { img: "/image-3.jpg", title: "Singing" },
    ],
    portfolioPics: [
      "/course-1.jpg",
      "/course-2.jpg",
      "/course-3.jpg",
      "/service-1.jpg",
      "/image-1.png",
      "/image-2.jpg",
      "/image-3.jpg",
      "/image-4.jpg",
      "/course-1.jpg",
      "/course-2.jpg",
    ],
  };
  return (
    <Container>
      <div className="relative flex aspect-[1/0.4] w-full flex-col items-center justify-center gap-2 2xl:gap-6">
        <Image
          src={profile.coverPic}
          alt="cover-pic"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          width={1000}
          height={300}
        />
        <h3 className="font-quicksand text-[5vw] font-semibold 2xl:text-7xl">
          {profile.name}
        </h3>
        <p className="bg-background-gradient bg-clip-text font-lato text-[4vw] font-semibold text-transparent 2xl:text-6xl">
          {profile.mainRole}
        </p>
      </div>
      <div className="grid grid-cols-12 py-[4vw] lg:px-10 lg:pb-20 lg:pt-12">
        <div className="relative col-span-5">
          <div className="absolute -top-[18vw] flex w-full flex-col items-center gap-4 lg:-top-[150%]">
            <div className="relative aspect-square w-3/4 overflow-hidden rounded-full">
              <Image
                src={profile.profilePic}
                alt="profile"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <h2 className="text-center font-lato text-[3vw] xl:text-4xl">
              {profile.email}
            </h2>
          </div>
        </div>
        <div className="col-span-7 flex justify-around">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/review-icon.svg"}
              alt="review"
              className="size-[8vw] lg:size-14"
              width={20}
              height={20}
            />
            <span className="bg-background-gradient bg-clip-text text-[3vw] font-bold text-transparent lg:text-2xl">
              Reviews
            </span>
            <span className="bg-background-gradient bg-clip-text text-[4vw] font-bold text-transparent lg:text-4xl">
              {profile.noOfReviews}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/like-icon.svg"}
              alt="like"
              className="size-[8vw] lg:size-14"
              width={20}
              height={20}
            />
            <span className="bg-background-gradient bg-clip-text text-[3vw] font-bold text-transparent lg:text-2xl">
              Likes
            </span>
            <span className="bg-background-gradient bg-clip-text text-[4vw] font-bold text-transparent lg:text-4xl">
              {profile.noOfLikes}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/rating-icon.svg"}
              alt="rating"
              className="size-[8vw] lg:size-14"
              width={20}
              height={20}
            />
            <span className="bg-background-gradient bg-clip-text text-[3vw] font-bold text-transparent lg:text-2xl">
              Rating
            </span>
            <span className="bg-background-gradient bg-clip-text text-[4vw] font-bold text-transparent lg:text-4xl">
              {profile.noOfRating}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto xs:w-9/12 md:mt-3 xl:mt-5">
        <div className="grid grid-cols-12 items-center gap-y-[3vw] *:text-base *:font-semibold odd:*:col-span-5 odd:*:bg-background-gradient odd:*:bg-clip-text odd:*:text-transparent even:*:col-span-7 md:w-2/3 *:md:text-nowrap *:md:text-2xl lg:gap-y-4 *:lg:text-3xl">
          <p>Experience:-</p>
          <p>{profile.experience} Years</p>
          <p>Location:-</p>
          <p>{profile.location}</p>
          <p>Dance Forms:-</p>
          <p>{profile.danceForms.join(", ")}</p>
        </div>
      </div>
      <HeadingPrimary secondary="skills" primary="Skills">
        <div className="flex justify-around">
          {profile.skills.map((skill, index) => (
            <div className="p-2" key={index}>
              <CategoryCard item={skill} />
            </div>
          ))}
        </div>
      </HeadingPrimary>
      <HeadingPrimary secondary="PICTURES" primary="Portfolio Pictures">
        <ImageGrids images={profile.portfolioPics} />
      </HeadingPrimary>
    </Container>
  );
}
