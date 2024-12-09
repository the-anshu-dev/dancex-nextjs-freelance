import { HeadingPrimaryProps } from "@/lib/types";

export default function HeadingPrimary({
  children,
  primary,
  secondary,
}: React.PropsWithChildren<HeadingPrimaryProps>) {
  return (
    <>
      <div className="mb-14 mt-20 flex flex-col items-center justify-center">
        {secondary && (
          <h6 className="font-lato text-sm uppercase md:text-base">
            {secondary}
          </h6>
        )}
        <h2 className="bg-background-gradient bg-clip-text text-2xl font-bold text-transparent md:text-4xl">
          {primary}
        </h2>
      </div>
      {children}
    </>
  );
}
