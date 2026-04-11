import AccessibilitySection from '../components/landing/AccessibilitySection'
import ClosingSection from '../components/landing/ClosingSection'
import HeroSection from '../components/landing/HeroSection'
import MethodSection from '../components/landing/MethodSection'
import ProcessSection from '../components/landing/ProcessSection'
import SiteFooter from '../components/landing/SiteFooter'
import SiteHeader from '../components/landing/SiteHeader'
import SkipToContent from '../components/landing/SkipToContent'
import StickyWhatsAppButton from '../components/landing/StickyWhatsAppButton'
import WhoSection from '../components/landing/WhoSection'
import WhyMeSection from '../components/landing/WhyMeSection'

const Home = () => {
  return (
    <>
      <SkipToContent />
      <main
        id="main-content"
        tabIndex={-1}
        dir="rtl"
        className="bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.11),_transparent_45%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff_45%,_#f8fafc)] pb-36 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 md:pb-40"
      >
      <SiteHeader />
      <HeroSection heroImage="/images/hero/hero-main.png" />
      <MethodSection />
      <WhoSection />
      <ProcessSection image="/images/method/method-01.png" />
      <WhyMeSection />
      <ClosingSection />
      <AccessibilitySection />
      <SiteFooter />
      <StickyWhatsAppButton />
    </main>
    </>
  )
}

export default Home
