import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://Pedro-Marques-Santos.github.io` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(
        "Message received from the child: " + event?.data,
        event?.data?.message,
        event?.data?.blob
      ); // Message received from child
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <>
        <DefaultSeo
          title={`Hi, I'm Pedro Santos`} 
          description={`I'm Pedro Santos, a frontend developer. I write about web development and personal projects—check out my blog, you might find something useful.`}
          canonical={canonicalUrl}
          openGraph={{
            site_name: `Hi, I'm Pedro Santos!`,
            title: `Hi, I'm Pedro Santos!`,
            description: `I'm Pedro Santos, a frontend developer. I write about web development and personal projects—check out my blog, you might find something useful.`,
            images: [
              {
                url: "https://Pedro-Marques-Santos.github.io/images/site/meta.jpg",
                width: 800,
                height: 600,
                alt: "Pedro Santos"
              },
            ],
          }}
          // twitter={{
          //   handle: "@pedromarques",
          //   site: "@pedromarques",
          //   cardType: "summary_large_image",
          // }}
          additionalLinkTags={[
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/main-icon.png",
            },
          ]}
        />

        {process.env.NODE_ENV == "production" ? (
          // Analytics Script
          <Script
            src="https://api.pirsch.io/pirsch.js"
            id="pirschjs"
            data-code={process.env.NEXT_PUBLIC_PIRSCH_KEY}
            strategy="afterInteractive"
          />
        ) : (
          ""
        )}

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
