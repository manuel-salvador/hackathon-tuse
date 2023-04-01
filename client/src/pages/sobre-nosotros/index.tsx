import PageLayout from '@/layouts/PageLayout';

type Props = {};

export default function SobreNosotrosPage({}: Props) {
    return (
        <PageLayout title="Sobre nosotros">
            <div className="flex-1 pt-12 flex flex-col justify-center items-center text-center relative">
                <h1 className="text-4xl font-bold my-8">Sobre nosotros</h1>
                <div className="flex flex-col gap-4 text-lg w-4/5 mx-auto">
                    <p>
                        Bienvenido a Tuse, una organización autónoma descentralizada (DAO) que ofrece NFTs para oportunidades de
                        inversión compartida. Nuestra misión es crear una plataforma impulsada por la comunidad en la que los
                        individuos puedan unir sus recursos para invertir en proyectos emocionantes y generar retornos.
                    </p>
                    <p>
                        En Tuse, creemos en el poder de las finanzas descentralizadas (DeFi) y la tecnología blockchain para
                        revolucionar la forma en que invertimos y administramos nuestro dinero. Nuestro equipo está compuesto por
                        desarrolladores experimentados, expertos financieros y entusiastas de blockchain que comparten un objetivo
                        común: crear una plataforma justa, transparente y segura para inversiones compartidas.
                    </p>
                    <p>
                        Nuestros NFTs son activos digitales únicos que representan una participación en el pool de inversión de
                        nuestra DAO. Cada titular de NFT tiene derecho a participar en el proceso de toma de decisiones, votar en
                        propuestas y recibir una parte de los retornos generados por el pool de inversión.
                    </p>
                    <p>
                        Estamos comprometidos a construir una comunidad vibrante e inclusiva de inversores que compartan nuestra
                        pasión por DeFi y la tecnología blockchain. ¡Únete a nosotros hoy y conviértete en parte de la comunidad
                        de Tuse!
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
