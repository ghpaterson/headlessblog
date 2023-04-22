import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import headless from "../public/headless.svg";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clgp7dx43075z01rrhdqcerg3/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <main>
      <section className="w-full h-[625px] bg-[url('https://images.pexels.com/photos/1231258/pexels-photo-1231258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover ">
        <div className="mx-60 py-20">
          <Image src={headless} width={1000} />
        </div>
      </section>
      <div className="flex justify-center py-6">
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-12 mx-20 my-10">
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              author={post.author}
              coverPhoto={post.coverPhoto}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
