import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="bg-transparent border border-solid border-black border-2 shadow-lg py-2 px-4">
      <div>
        <h2 className=" font-alternates text-xl text-black flex justify-center py-4">
          {title}
        </h2>
      </div>
      <Link href={"/posts/" + slug}>
        <div className="overflow-hidden filter grayscale">
          <img src={coverPhoto.url} alt="" />
        </div>
      </Link>
      <div>
        <div>
          <div className="flex justify-between gap-4 items-center py-6">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full"
                src={author.avatar.url}
                alt=""
                width={40}
                height={40}
              />
              <h3 className=" font-alternates text-lg text-black">
                {author.name}
              </h3>
            </div>
            <h3 className="font-alternates text-gray-700 text-sm">
              {datePublished}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
