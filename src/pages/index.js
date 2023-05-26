import dynamic from "next/dynamic";
import Head from "next/head";
const HomeComponent = dynamic(() => import("../Components/home"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Pro Writer | Producing High Quality Content |</title>

        <meta
          name="description"
          content="Getprowriter.com is a writer’s heaven! Whether you need an article, website content, review, press release or social media post writing - we are at your service 24/7."
        />
        <meta
          name="robots"
          content="noindex, nofollow, max-image-preview:large"
        />
        <link rel="canonical" href="https://getprowriter.com/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.2.3.1 " />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Get Pro Writer - Content That Brings Wow Reaction"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get Pro Writer | Producing High Quality Content |"
        />
        <meta
          property="og:description"
          content="Getprowriter.com is a writer’s heaven! Whether you need an article, website content, review, press release or social media post writing - we are at your service 24/7."
        />
        <meta property="og:url" content="https://getprowriter.com/" />
        <meta
          property="og:image"
          content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
        />
        <meta
          property="article:published_time"
          content="2021-12-23T11:05:50+00:00"
        />
        <meta
          property="article:modified_time"
          content="2022-06-06T17:22:01+00:00"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Get Pro Writer | Producing High Quality Content |"
        />
        <meta
          name="twitter:description"
          content="Getprowriter.com is a writer’s heaven! Whether you need an article, website content, review, press release or social media post writing - we are at your service 24/7."
        />
        <meta
          name="twitter:image"
          content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
        />

             </Head>
      <HomeComponent />
    </>
  );
}
