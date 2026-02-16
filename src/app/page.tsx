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
      <div className="fixed inset-0 dot-grid pointer-events-none z-0 opacity-40" />

      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: '10%',
            left: '15%',
            background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.08,
            animation: 'float-orb-1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            top: '50%',
            right: '10%',
            background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
            filter: 'blur(90px)',
            opacity: 0.06,
            animation: 'float-orb-2 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 350,
            height: 350,
            bottom: '15%',
            left: '50%',
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.1,
            animation: 'float-orb-3 22s ease-in-out infinite',
          }}
        />
      </div>

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
