import CyberNav from "@/components/CyberNav";
import CyberHero from "@/components/CyberHero";
import CyberAbout from "@/components/CyberAbout";
import CyberSkills from "@/components/CyberSkills";
import CyberProjects from "@/components/CyberProjects";
import CyberEducation from "@/components/CyberEducation";
import CyberContact from "@/components/CyberContact";
import CyberFooter from "@/components/CyberFooter";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 dot-grid pointer-events-none z-0 opacity-50" />

      <CyberNav />
      <main className="relative z-10">
        <CyberHero />
        <CyberAbout />
        <CyberSkills />
        <CyberProjects />
        <CyberEducation />
        <CyberContact />
      </main>
      <CyberFooter />
    </>
  );
}
