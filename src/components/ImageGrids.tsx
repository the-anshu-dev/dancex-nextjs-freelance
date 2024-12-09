import Image from "next/image";

export default function ImageGrids({ images }: { images: string[] }) {
  return (
    <div>
      <div
        className="grid grid-cols-12"
        style={{
          gridTemplateColumns: "50% 25% 25%",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative aspect-square w-full ${index % 5 === 0 && "row-span-2"}`}
          >
            <Image
              src={img}
              alt="profile"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full rounded-xl object-cover p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
