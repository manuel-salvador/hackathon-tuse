import React from 'react';

type Props = {};

export default function AboutSection({}: Props) {
    return (
        <div className=" py-20 my-8 flex flex-col gap-6 text-center max-w-screen-xl m-auto">
            <h3 className="text-3xl font-semibold">¿Qué es InvestiDAO?</h3>
            <p className="text-lg">
                InvestiDAO es una plataforma de inversión descentralizada que utiliza tecnología blockchain y NFTs (tokens no
                fungibles) para permitir a los inversores participar en inversiones colectivas gestionadas por una comunidad
                autónoma descentralizada (DAO).
            </p>
            <p className="text-lg">
                En InvestiDAO, los inversores pueden adquirir NFTs que representan su participación en una inversión colectiva.
                Estas inversiones son gestionadas por una DAO que se encarga de tomar decisiones colectivas sobre cómo invertir y
                gestionar los fondos de la comunidad. Los inversores pueden votar y participar activamente en la gestión de la DAO
                a través de sus tokens de gobierno (DAO tokens).
            </p>
            <p className="text-lg">
                La plataforma de InvestiDAO utiliza contratos inteligentes para asegurar que todas las transacciones sean
                transparentes y seguras. Además, los inversores tienen la libertad de vender o intercambiar sus NFTs en cualquier
                momento en el mercado secundario.
            </p>
            <p className="text-lg">
                InvestiDAO se esfuerza por ser una plataforma inclusiva y accesible para cualquier persona interesada en la
                inversión colectiva y la tecnología blockchain. En InvestiDAO, creemos que la inversión colectiva puede ser una
                forma poderosa y sostenible de generar valor para todos los participantes y para la sociedad en general.
            </p>
        </div>
    );
}
