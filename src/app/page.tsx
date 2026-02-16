import ScrollToTop from "@/components/ScrollToTop";
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
      {/* Blue gradient background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 40%, #f0f7ff 70%, #e8f0fe 100%)',
        }}
      />
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
            background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.35,
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
            background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
            filter: 'blur(90px)',
            opacity: 0.3,
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
            background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.32,
            animation: 'float-orb-3 22s ease-in-out infinite',
          }}
        />
      </div>

      <ScrollToTop />
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
