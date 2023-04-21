import { GraphQLClient, gql } from "graphql-request";
import NavBar from "@/components/navbar";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clgp7dx43075z01rrhdqcerg3/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col justify-center items-center py-4 mt-20 px-10 md:px-40">
        <div className="text-2xl pb-10">{post.title}</div>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </div>
      <div className="flex gap-4 items-center my-4 px-10 md:px-40">
        <img src={post.author.avatar.url} alt="" width={50} height={40} />
        <div className="flex gap-4">
          <h6>By {post.author.name}</h6>
          <h6>{post.datePublished}</h6>
        </div>
      </div>
    </main>
  );
}
