import TeamCard from '@/components/TeamCard';

import ManuProfile from '/public/team/manu.jpg';
import LucianoProfile from '/public/team/Luciano.jpg';
import MarcoProfile from '/public/team/Marco.jpeg';
import TomiProfile from '/public/team/Tomi.jpg';

export default function TeamSection() {
  return (
    <section className="w-full max-w-screen-xl mx-auto my-8">
      <h3 className="text-3xl font-semibold">Equipo</h3>
      <div className="w-full flex justify-center gap-8 flex-wrap mt-16">
        <TeamCard src={ManuProfile} name={'Manu S.'} github={'manuel-salvador'} />
        <TeamCard src={LucianoProfile} name={'Luciano Oliva Bianco'} github={'luloxi'} />
        <TeamCard src={MarcoProfile} name={'Marco Castiglione'} github={'mcastiglione'} />
        <TeamCard src={TomiProfile} name={'Tomas Oliver'} github={'tomi204'} />
      </div>
    </section>
  );
}
