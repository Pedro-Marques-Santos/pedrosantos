import { NextSeo } from "next-seo";
import { WorkList } from "components";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper } from "ui";

export default function Home({ allProjects }) {
  return (
    <>
      <NextSeo
        title={`Projects – Pedro Santos`}
        description={`A list of all my side-projects, mostly written in React.js, Next.js, Node.Js and TailwindCSS.`}
        openGraph={{
          site_name: `Projects – Pedro Santos`,
          title: `Projects – Pedro Santos`,
          description:
            "A list of all my side-projects, mostly written in React.js, React Native, Next.js and TailwindCSS.",
        }}
        // twitter={{
        //   handle: "@pedro",
        //   site: "@pedrosantos",
        //   cardType: "summary_large_image",
        // }}
      />
      <ContentWrapper width="620px">
        <WorkList allPosts={allProjects} />
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
    "status",
    "statusText",
  ]);

  // return {
  //   props: { easy-recruiter
  //     allProjects: allProjects
  //       ?.sort((a, b) => new Date(a.date) - new Date(b.date))
  //       ?.sort((a, b) => a.status === "Active" && -1),
  //   },
  // };
  return {
    props: {
      allProjects: allProjects.sort((a, b) => {
        const order = ["easy-recruiter", "personality", "mega-movie", "cachewiper-pro"];
        return order.indexOf(a.slug) - order.indexOf(b.slug);
      }),
    },
  };
}
