import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg py-2 px-4">
      <div>
        <h2 className="text-xl text-black flex justify-center py-4">{title}</h2>
      </div>
      <Link href={"/posts/" + slug}>
        <div className="rounded-xl overflow-hidden">
          <img src={coverPhoto.url} alt="" />
        </div>
      </Link>
      <div>
        <div>
          <div className="flex justify-between gap-4 items-center py-6">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full bg-white"
                src={author.avatar.url}
                alt=""
                width={40}
                height={40}
              />
              <h3 className="text-lg">{author.name}</h3>
            </div>
            <h3 className="text-gray-600 text-sm">{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
