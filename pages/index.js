import ContainerBlock from "../components/ContainerBlock";
import RecentProjects from "../components/RecentProjects";
import LatestBlog from "../components/LatestBlog";
import Hero from "../components/Hero";
import userData from "@constants/data";
import getLatestBlogs from "@lib/getLatestBlogs";

export default function Home({ blogs }) {
  return (
    <ContainerBlock
      title="Bryl Lim - Software Engineer"
      description="A 24-year-old software engineer based in Cebu, Philippines."
    >
      <Hero />
      <RecentProjects />
      <LatestBlog blogs={blogs} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const blogs = await getLatestBlogs(userData);
  return {
    props: {
      blogs,
    },
  };
};
