import Image from "next/image";
import Container from "./Container";

export default function Search() {
  return (
    <div className="border-y-2 border-slate-800">
      <Container>
        <form className="relative mx-auto my-2 w-10/12 md:my-4 md:w-8/12">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full rounded-full border-2 border-slate-800 bg-foreground px-4 py-2 text-lg text-black/70 placeholder:font-lato focus:outline-none md:px-8 md:py-4"
            placeholder="Search Your Style"
          />
          <button
            type="submit"
            className="absolute right-5 top-0 flex aspect-square h-full scale-75 items-center justify-center rounded-full bg-background-gradient"
          >
            <Image
              src={"/search icon.svg"}
              width={24}
              height={24}
              alt="Search"
            />
          </button>
        </form>
      </Container>
    </div>
  );
}
