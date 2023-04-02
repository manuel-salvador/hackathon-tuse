import ButtonAgainstVote from '@/components/Buttons/ButtonAgainstVote';
import ButtonExecute from '@/components/Buttons/ButtonExecute';
import ButtonFavorVote from '@/components/Buttons/ButtonFavorVote';
import PageLayout from '@/layouts/PageLayout';

type Props = {};

export default function GobernanzaPage({}: Props) {
    return (
        <PageLayout title="Gobernanza">
            <div className="w-full max-w-screen-xl mx-auto mt-28">
                <div className="flex flex-row  w-full gap-8">
                    <div className="flex-1 flex flex-col items-center gap-8 p-5 border-2 border-white shadow-xl shadow-gray-600">
                        <h3 className="text-center text-2xl font-bold">Propuesta</h3>
                        <p className="text-center">Redireccionar fondos a staking del protocolo AAVE</p>
                        <div className="flex gap-8">
                            <ButtonFavorVote />
                            <ButtonAgainstVote />
                        </div>
                        <p>Votos totales: 12</p>
                        <p>Tiempo restante 20 hs</p>
                        <ButtonExecute canExecute={false} />
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-8 p-5 border-2 border-white shadow-xl shadow-gray-600">
                        <h3 className="text-center text-2xl font-bold">Estado propuesta actual</h3>
                        <p className="text-center">Invertido en protocolo Compound</p>
                        <p>Total invertido: 2 ETH</p>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center gap-8 p-5 border-2 border-white shadow-xl shadow-gray-600">
                    <h3 className="text-center text-2xl font-bold">Crear nueva propuesta</h3>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Propuesta"
                            className="bg-transparent text-white border-b-2 py-2 outline-none"
                            required
                        />
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}
