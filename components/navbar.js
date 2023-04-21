import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between py-4 mx-6">
      <h1>HeadLess Blog</h1>
      {router.pathname === "/" ? null : <Link href="/">Home</Link>}
    </div>
  );
}
