import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="bg-transparent  shadow-sm py-2 px-4">
      <div>
        <h2 className=" font-lato text-xl text-gray-800 flex justify-center py-4">
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
              <h3 className=" font-lato text-lg text-gray-800">
                {author.name}
              </h3>
            </div>
            <h3 className="font-lato text-gray-500 text-sm">{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
