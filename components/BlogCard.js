import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="bg-gray-300 rounded-lg py-4 px-4">
      <div>
        <h2 className="text-2xl text-green-700 flex justify-center py-4">
          {title}
        </h2>
      </div>
      <Link href={"/posts/" + slug}>
        <div>
          <img src={coverPhoto.url} alt="" />
        </div>
      </Link>
      <div>
        <div>
          <div className="flex gap-4 items-center py-6">
            <img
              className="rounded-full bg-white"
              src={author.avatar.url}
              alt=""
              width={40}
              height={40}
            />
            <h3 className="text-xl">{author.name}</h3>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
