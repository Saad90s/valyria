// 7iyed Navbar w Footer mn les imports 7it homa f App daba
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import WorkSection from "@/components/WorkSection";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    // 7iyedna min-h-screen 7it drnaha f App.tsx
    <div>
      <HeroSection />
      <ReviewsSection />
      {/* <AboutSection /> */}
      <WorkSection />
      <PartnersSection />
      {/* <ServicesSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default Index;