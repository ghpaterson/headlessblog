import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import zombie from "../public/zombie.png";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center py-4 mx-10">
      <div className="flex items-center">
        <Image src={zombie} width={200} />
        <h1 className="text-purple-600 text-6xl">HeadLess Blog</h1>
      </div>
      {router.pathname === "/" ? null : (
        <div className="bg-purple-600 py-2 px-4 rounded-lg text-white text-4xl">
          <Link href="/">Home</Link>
        </div>
      )}
    </div>
  );
}
