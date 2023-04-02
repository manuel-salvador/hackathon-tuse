import Image from "next/image";

import HeroImage from "/public/Hero.webp";

export const HeaderVote = () => {
  return (
    <section className=" py-20 px-8 flex flex-col gap-6 text-center">
      <Image
        src={HeroImage}
        alt="Hero image"
        fill={true}
        className="object-cover brightness-75 -z-10 rounded-b-[90%] shadow-2xl shadow-gray-900"
        priority
      />
      <h1 className="text-4xl font-bold my-8">Vote</h1>
      <p>
        La DAO es una comunidad descentralizada que se basa en la toma de
        decisiones colectivas y la colaboración entre sus miembros. Cada uno de
        ustedes tiene un papel importante que desempeñar en el éxito continuo de
        la organización. Su voto es su voz en la DAO, y es esencial que lo use
        para expresar sus opiniones y preocupaciones.
      </p>
      <p>
        Su voto en la DAO tendrá un impacto significativo en el futuro de la
        organización. Las decisiones que se tomen en esta votación determinarán
        qué proyectos se apoyan y cuáles no, y cómo se asignarán los recursos de
        la DAO. Es importante que considere cuidadosamente las implicaciones de
        sus decisiones y las consecuencias a largo plazo de su voto.
      </p>
    </section>
  );
};
