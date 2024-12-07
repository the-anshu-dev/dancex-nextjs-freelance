import Image from "next/image";
import Container from "./Container";

export default function Search() {
  return (
    <div className="border-y-2 border-slate-800">
      <Container>
        <form className="w-10/12 md:w-8/12 mx-auto my-2 md:my-4 relative">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full py-2 px-4 md:py-4 md:px-8 text-lg text-slate-100 bg-foreground border-2 border-slate-800 rounded-full placeholder:font-lato"
            placeholder="Search Your Style"
          />
          <button type="submit" className="absolute aspect-square h-full scale-75 top-0 right-5 bg-background-gradient rounded-full flex justify-center items-center">
            <Image src={"/search icon.svg"} width={24} height={24} alt="Search" />
          </button>
        </form>
      </Container>
    </div>
  );
}
