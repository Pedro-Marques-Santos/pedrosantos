import clsx from "clsx";
import Link from "next/link";
import {
  ArrowSquareOut,
  InstagramLogo,
  MapPinSimple,
  Code,
  Briefcase,
  GithubLogo,
  LinkedinLogo 
} from "@phosphor-icons/react";
import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper, Button } from "ui";
import ContributionGraph from "components/frequency";

import { useTheme } from "next-themes";

const IMAGES = [
  {
    src: "/images/professional/photo.png",
    place: "",
    className: "md:rotate-[2deg]",
  },
  {
    src: "/images/pages/home/casual-photo-1.png",
    place: "",
    className: "md:rotate-[2deg]",
  },
  {
    src: "/images/pages/home/casual-photo-2.png",
    place: "",
    className: "md:rotate-[2deg]",
  },
  {
    src: "/images/pages/home/casual-photo-3.png",
    place: "",
    className: "md:rotate-[2deg]",
  }
];

const INFO = [
  {
    text: "Fron-tend developer based in Brazil",
    icon: <MapPinSimple />,
    className: "bg-red-50 text-red-800",
  },
  {
    text: (
      <>
        Building{" "}
        <Link
          target="_blank"
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          EasyRecruiterOn
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          href="https://teste-personalidade-mzl5.vercel.app/"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          Personality
        </Link>
      </>
    ),
    icon: <Code />,
    className: "bg-emerald-50 text-emerald-800",
  },
  {
    text: (
      <>
        Worked with{" "}
        <Link
          target="_blank"
          href="https://nextjs.org/"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          Next.Js
        </Link>
        ,{" "}
        <Link
          target="_blank"
          href="https://react.dev/"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          React.Js
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          href="https://nodejs.org/en"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          Node.Js
        </Link>
      </>
    ),
    icon: <Briefcase />,
    className: "bg-blue-50 text-blue-800",
  },
  {
    text: (
      <Link
        target="_blank"
        href="https://github.com/Pedro-Marques-Santos"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        I love coding projects
      </Link>
    ),
    icon: <GithubLogo />,
    className: "text-gray-900 bg-gray-100",
  },
  {
    text: (
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/pedromarques01/"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        I'm often on LinkedIn—connect with me!
      </Link>
    ),
    icon: <LinkedinLogo />,
    className: "text-orange-900 bg-orange-50",
  },
];

export default function Home({ allPosts, allProjects, post }) {
  const { theme } = useTheme();

  return (
    <div className="grid md:grid-cols-1 mt-0 md:mt-8">
      <ContentWrapper
        width="620px"
        className="divide-y divide-gray-200 dark:divide-gray-800 space-y-6"
      >
        <div className="">
          <h2 className="mb-3 md:mb-4 text-3xl">
            <span className="opacity-70">Hi 👋, I'm </span>
            <span className="font-bold text-black dark:text-white">
              Pedro Santos
            </span>
          </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {INFO?.map((item) => (
              <div
                className={clsx(
                  "border rounded-lg px-[8px] py-[6px] flex gap-1.5 items-center",
                  item?.className
                )}
                key={item?.title}
              >
                {item?.icon ? <div className="">{item?.icon}</div> : ""}
                <div>{item?.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6 pb-2">
          <h2 className="text-xl font-medium text-black dark:text-white mb-4">
            Side-projects
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-2 gap-4">
            {allProjects?.map((project) => (
              <div className="min-w-[120px] flex-col lg:px-5 md:px-2 sm:px-2 px-3  lg:py-3 md:py-2 sm:py-1 py-1 border border-gray-200 dark:border-gray-700/70 rounded-lg hover:bg-gray-100 dark:bg-gray-800/70 dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:shadow-[0_0_8px_rgba(0,0,0,0.8)] shadow-[0_0_8px_rgba(0,0,0,0.06)] flex relative ">
                {project?.ios ? (
                  <Link
                    href={project?.ios}
                    target="_blank"
                    title={project?.title}
                  >
                    <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                      <ArrowSquareOut className="text-base" />
                    </div>
                  </Link>
                ) : project?.web ? (
                  <Link
                    href={project?.web}
                    target="_blank"
                    title={project?.title}
                  >
                    <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                      <ArrowSquareOut className="text-base" />
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  href={`/projects/${project?.slug}` || "/"}
                  key={project?.title}
                >
                  <div className="pt-3 pb-2 relative">
                    {project?.icon ? (
                      <img
                        className="w-[32px] drop-shadow-xl"
                        src={project?.icon}
                        alt={project?.title}
                      />
                    ) : (
                      <>
                        <div className="flex items-center justify-center w-[32px] h-[32px] text-lg font-medium text-white bg-black border border-gray-100 rounded-full dark:border-gray-800 drop-shadow-xl">
                          {project?.title?.slice(0, 1)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="flex items-center gap-[6px] mt-1">
                      <h3 className="font-medium text-base">
                        {project?.title}
                      </h3>
                      {project?.status === "Active" ? (
                        <div
                          className="w-[8px] h-[8px] rounded-full bg-green-500"
                          title="Active"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    {project?.tagline ? (
                      <p className="text-sm opacity-80">{project?.tagline}</p>
                    ) : (
                      ""
                    )}

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 pb-2">
          <div className="flex items-center gap-3 pb-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              Blog
            </h2>
            <Button variant="secondary" className="text-sm" href="/blog" as="a">
              View all blog posts →
            </Button>
          </div>
          <BlogList data={allPosts?.slice(0, 12)} activeSlug={post?.slug} />
        </div>

        <div>
          <div className="flex items-center mt-10 gap-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              Consistent Growth and Contributions
            </h2>
            <Link
              className="bg-transparent border-gray-200 dark:border-gray-700/70 border text-sm px-2 py-px rounded-lg flex gap-1 items-center"
              href="https://github.com/Pedro-Marques-Santos"
              target="_blank"
            >
              <GithubLogo /> Github
              <ArrowSquareOut />
            </Link>
          </div>

          <div className="mt-2 mb-8">
            <p>
              "Quality is not an act, it is a habit." - Aristotle. True progress is built on daily effort and thoughtful contributions. You can{" "}
              <Link 
              className="border-b"
              href="https:/github.com/Pedro-Marques-Santos/"
              target="_blank">
                check my GitHub here
              </Link>
            </p>
          </div>

          <div className=" mt-5 justify-center relative group">
          <ContributionGraph theme={theme} />
          </div>
        </div>

        <div>
          <div className="flex items-center mt-10 gap-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              About me
            </h2>
            <Link
              className="bg-transparent border-gray-200 dark:border-gray-700/70 border text-sm px-2 py-px rounded-lg flex gap-1 items-center"
              href="https://www.instagram.com/pedromarquess0/"
              target="_blank"
            >
              <ArrowSquareOut />
            </Link>
          </div>

          <div className="mt-2 mb-8">
            <p>
              Hi, I'm Pedro Santos! I love spending my time coding new projects and working as a developer.
            </p>
            <p>
            When I'm not working, I enjoy reading books, training at the gym, and traveling. Here are some photos showing my daily habits!
            </p>
          </div>

          <div className=" mt-5 justify-center relative group">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-6"> 
            {IMAGES?.slice(0, 8)?.map((item, index) => (
              <div 
                key={item.src}
                className={`relative duration-100 ease-in-out rounded-[12px] hover:shadow-xl md:hover:scale-[1.1] ${index >= 3 ? 'hidden md:block' : ''}`}
              >
                <img
                  src={item?.src}
                  alt={item?.place}
                  className="rounded-[9px] object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
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
    "status",
    "statusText",
  ]);

  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
    "active",
    "tagline",
    "web",
    "ios",
    "status",
    "statusText",
  ]);

  return {
    props: {
      allPosts,
      allProjects: allProjects.sort((a, b) => {
        const order = ["easy-recruiter", "personality", "mega-movie", "cachewiper-pro"];
        return order.indexOf(a.slug) - order.indexOf(b.slug);
      }),
    },
  };
}
