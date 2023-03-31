import TeamCard from '@/components/TeamCard';

type Props = {};

export default function TeamSection({}: Props) {
    return (
        <div className="w-full max-w-screen-xl mx-auto my-8">
            <h3 className="text-3xl font-semibold">Equipo</h3>
            <div className="w-full flex justify-center gap-8 flex-wrap mt-16">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    );
}
