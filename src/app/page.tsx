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
      <CyberNav />
      <main>
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
