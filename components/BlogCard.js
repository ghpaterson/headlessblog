import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div>
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
            <img src={author.avatar.url} alt="" width={50} height={50} />
            <h3 className="text-xl">{author.name}</h3>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
