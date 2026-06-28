import Menu from "./_components/Menu";
import Hero from "./_components/Hero";
import TrustBar from "./_components/TrustBar";
import WhyChoose from "./_components/WhyChoose";
import CourseCurriculum from "./_components/CourseCurriculum";
import Mentors from "./_components/Mentors";
import Pricing from "./_components/Pricing";
import FAQs from "./_components/FAQs";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen relative">
      <Menu />

      {/* Grid overlay for vertical lines that span the entire height */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="w-full max-w-[1300px] h-full border-x border-gray-300/70"></div>
      </div>

      {/* Content wrapper with horizontal full-width lines */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Top Spacer representing header boundary */}
        <div className="w-full h-24 border-b border-gray-300/70"></div>

        {/* Hero Section Container */}
        <div id="home" className="w-full border-b border-gray-300/70">
          <Hero />
        </div>

        {/* Trust Bar Section Container */}
        <div className="w-full border-b border-gray-300/70">
          <TrustBar />
        </div>

        {/* Why Choose Section Container */}
        <div id="overview" className="w-full border-b border-gray-300/70">
          <WhyChoose />
        </div>

        <div id="curriculum" className="w-full border-b border-gray-300/70">
          <CourseCurriculum />
        </div>

        <div id="faculty" className="w-full border-b border-gray-300/70">
          <Mentors />
        </div>

        <div className="w-full border-b border-gray-300/70">
          <Pricing />
        </div>

        <div className="w-full border-b border-gray-300/70">
          <FAQs />
        </div>

        <div className="w-full">
          <CTA />
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
