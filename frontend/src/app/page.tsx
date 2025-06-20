import { AboutUs } from '@/section/about-us';
import { FooterSection } from '@/section/footer-section';
import { MiddleHead } from '@/section/header/middle-head';
import { NavbarSection } from '@/section/header/navbar-section';

export default function Home() {
  return (
    <>
      <NavbarSection />
      <MiddleHead />
      <AboutUs />
      <FooterSection />
    </>
  );
}
