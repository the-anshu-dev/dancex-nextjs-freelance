import Image from "next/image";

export default function ImageWithIcon({
  src,
  alt,
  iconSrc,
  iconAlt,
}: {
  src: string;
  alt: string;
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <div className={`relative aspect-video w-full`}>
      <div className="absolute right-[5%] top-[5%] z-10 size-[8%]">
        <Image src={iconSrc} alt={iconAlt} width={50} height={50} />
      </div>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="absolute inset-0 h-full w-full rounded-xl object-cover p-1"
      />
    </div>
  );
}
