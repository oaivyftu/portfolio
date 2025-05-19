import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import {navItems} from "@/data";
import RecentProjects from "@/components/RecentProjects";
import SentryFeedbackButton from "@/components/SentryFeedbackButton";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import {MacOsDock} from "@/components/ui/MacOsDock";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <MacOsDock />
        <Hero />
        <Grid />
        <RecentProjects />
        <SentryFeedbackButton />
        <Client />
        <Experience />
      </div>
    </main>
  );
}
