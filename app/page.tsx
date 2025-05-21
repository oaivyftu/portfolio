import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import SentryFeedbackButton from "@/components/SentryFeedbackButton";
import {MacOsDock} from "@/components/ui/MacOsDock";
import {TechStack} from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <MacOsDock />
        <Hero />
        <TechStack />
        <RecentProjects />
        <SentryFeedbackButton />
      </div>
    </main>
  );
}
