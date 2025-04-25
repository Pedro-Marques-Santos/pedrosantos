import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { NextSeo } from "next-seo";
import { ContentWrapper } from "ui";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title={`Blog - Pedro Santos`}
        description={`I'm Pedro Santos, a frontend developer. I write about web development and personal projects—check out my blog, you might find something useful.`}
        openGraph={{
          site_name: `Blog - Pedro Santos`,
          title: `Blog - Pedro Santos`,
          description: `I'm Pedro Santos, a frontend developer. I write about web development and personal projects—check out my blog, you might find something useful.`,
        }}
        // twitter={{
        //   handle: "@pedromarques",
        //   site: "@pedromarques",
        //   cardType: "summary_large_image",
        // }}
      />

      <ContentWrapper width="620px">
        <h2 className="font-medium text-black text-2xl mb-4 mt-4">Blog</h2>
        <BlogList data={allPosts} />
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external",
  ]);

  return {
    props: { allPosts },
  };
}
