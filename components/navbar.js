import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import underline from "../public/underline.svg";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className=" bg-transparent flex justify-between items-center py-10 mx-16">
      <div className="flex items-center">
        <h1 className=" font-pilowlava text-black text-3xl md:text-6xl">
          HeadLess
        </h1>
      </div>
      <div className="font-pilowlava  text-black text-3xl md:text-6xl">
        <Link href="/">HOME</Link>
        <Image src={underline} width={250} />
      </div>
    </div>
  );
}
