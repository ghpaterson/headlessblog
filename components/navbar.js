import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className=" bg-transparent flex justify-between items-center py-4 mx-10">
      <div className="flex items-center">
        <h1 className="text-black text-3xl md:text-6xl">HeadLess</h1>
      </div>
      {router.pathname === "/" ? null : (
        <div className="py-2 px-4  text-black text-xl">
          <Link href="/">HOME</Link>
        </div>
      )}
    </div>
  );
}
