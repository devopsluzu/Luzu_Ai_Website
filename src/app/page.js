import '@styles/landing-page/LandingPage.css';
import LandingHero from '@components/landing-page/LandingHero'; 
import LandingNewsletter from '@components/landing-page/LandingNewsletter';
import LandingLogo from '@components/landing-page/LandingLogo';
import LandingMarketingStratergy from '@components/landing-page/LandingMarketingStratergy';
import LandingAiTools from '@components/landing-page/LandingAiTools';
import LandingAiSolutions from '@components/landing-page/LandingAiSolutions';
import LandingTraditionalMarketing from '@components/landing-page/LandingTraditionalMarketing';
import LandingMetrics from '@components/landing-page/LandingMetrics';
import LandingEnterprise from '@components/landing-page/LandingEnterprise';
import LandingBlogs from '@components/landing-page/LandingBlogs';

export default function Home() {
  return (
    <div>
      <LandingHero/>
      <LandingLogo/>
      <LandingAiTools/>
      <LandingMarketingStratergy/>
      <LandingAiSolutions/>
      <LandingTraditionalMarketing/>
      <LandingMetrics/>
      <LandingEnterprise/>
      <LandingBlogs/>
      <LandingNewsletter/>
    </div>
  );
}
