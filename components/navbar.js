import Link from "next/link";
import Image from "next/image";
import underline from "../public/underline.svg";

export default function NavBar() {
  return (
    <div className=" bg-transparent flex justify-between items-center py-10 mx-4 md:mx-16">
      <div className="flex items-center">
        <h1 className=" font-pilowlava text-gray-800 text-2xl md:text-6xl">
          HeadLess
        </h1>
      </div>
      <div className="font-pilowlava  text-gray-800 text-2xl md:text-6xl">
        <Link href="/">HOME</Link>
        <Image src={underline} width={100} className="md:w-56 lg:w-56" />
      </div>
    </div>
  );
}
