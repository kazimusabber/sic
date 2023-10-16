import FeedBack from "@/components/FeedBack";
import HeroTwo from "@/components/HeroTwo";
import ProjectTwo from "@/components/ProjectTwo";
import Resume from "@/components/Resume";
import Services from "@/components/Services";

export const metadata = {
  title: "JackCreative Designer | Nextjs portfolio template",
  description: "Nextjs portfolio template",
};
const HomePageTwo = () => {
  return (
    <>
      <HeroTwo />
      <Services limit={5} />
      <ProjectTwo />
      <Resume />
      <FeedBack />
    </>
  );
};

export default HomePageTwo;
