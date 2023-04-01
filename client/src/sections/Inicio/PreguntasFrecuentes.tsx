import Accordion from '@/components/Accordion';

type Props = {};

export default function PreguntasFrecuentes({}: Props) {
    return (
        <section className="w-full max-w-screen-xl mx-auto pt-16">
            <h3 className="text-3xl font-semibold text-center mb-10">Preguntas frecuentes</h3>
            <div className="flex flex-col md:flex-row gap-8 px-16">
                <div className="flex flex-col w-full md:w-1/2 gap-8">
                    <Accordion label="¿Cuanto es el mínimo a invertir?" content="0.01 ETH" />
                    <Accordion label="labeel" content="asdasdada" />
                    <Accordion label="labeel" content="asdasdada" />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-8">
                    <Accordion label="labeel" content="asdasdada" />
                    <Accordion label="labeel" content="asdasdada" />
                </div>
            </div>
        </section>
    );
}
