import FeedBack from "@/components/FeedBack";
import Hero from "@/components/Hero";
import ProjectArea from "@/components/ProjectArea";
import Resume from "@/components/Resume";
import Services from "@/components/Services";

export const metadata = {
  title: "JackCreative | Nextjs portfolio template",
  description: "Nextjs portfolio template",
};

export const runtime = "edge";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Resume />
      <ProjectArea />
      <FeedBack />
    </>
  );
}
