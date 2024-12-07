import { HeadingPrimaryProps } from "@/lib/types";

export default function HeadingPrimary({
  children,
  primary,
  secondary,
}: React.PropsWithChildren<HeadingPrimaryProps>) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 mb-14">
        {secondary && <h6 className="uppercase font-lato text-sm md:text-base">{secondary}</h6>}
        <h2 className="text-2xl md:text-4xl font-bold bg-background-gradient bg-clip-text text-transparent">
          {primary}
        </h2>
      </div>
      {children}
    </>
  );
}
