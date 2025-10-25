import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import KeyFeatures from '../components/KeyFeatures';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import ChartUtilidad from '../components/ChartUtilidad'; // <-- AÑADE ESTA LÍNEA
import ChartProblema from '../components/ChartProblema'; // <-- AÑADE ESTA LÍNEA
import Comparison from '../components/Comparison';
import Trust from '../components/Trust';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

function LandingPage() {
    return (
        <>
            <Header />
            <Hero />

            <AnimatedSection>
                <Benefits />
            </AnimatedSection>

            <AnimatedSection>
                <KeyFeatures />
            </AnimatedSection>

            <AnimatedSection>
                <HowItWorks />
            </AnimatedSection>

            <AnimatedSection>
                <SocialProof />
            </AnimatedSection>

            <AnimatedSection>
                <ChartUtilidad />
            </AnimatedSection>

            <AnimatedSection>
                <ChartProblema />
            </AnimatedSection>

            <AnimatedSection>
                <Comparison />
            </AnimatedSection>

            <AnimatedSection>
                <Trust />
            </AnimatedSection>

            <AnimatedSection>
                <CTA />
            </AnimatedSection>

            <Footer />
        </>
    );
}

export default LandingPage;