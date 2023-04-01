import PageLayout from '@/layouts/PageLayout';
import AboutSection from '@/sections/Inicio/AboutSection';
import Benefits from '@/sections/Inicio/BenefitsSection';
import HeroSection from '@/sections/Inicio/HeroSection';
import PreguntasFrecuentes from '@/sections/Inicio/PreguntasFrecuentes';
import TeamSection from '@/sections/Inicio/TeamSection';

export default function HomePage() {
    return (
        <PageLayout title="Home">
            <HeroSection />
            <AboutSection />
            <Benefits />
            <TeamSection />
            <PreguntasFrecuentes />
        </PageLayout>
    );
}
