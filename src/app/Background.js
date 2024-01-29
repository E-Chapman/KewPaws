import Image from "next/image";
import backgroundImage from "./assets/Rescue.jpg";

export default function Background() {
  return (
    <Image
      src={backgroundImage}
      placeholder="blur"
      alt="Photograph of a dog, taken by Fabian Gieske"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
