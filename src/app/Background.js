import Image from "next/image";
import backgroundImage from "./assets/Rescue.jpg";

export default function Background() {
  return (
    <Image
      src={backgroundImage}
      placeholder="blur"
      alt="background"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
