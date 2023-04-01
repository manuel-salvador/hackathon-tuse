import Card from '../../components/Card';

type Props = {};

export default function Benefits({}: Props) {
    return (
        <section className="p-16 my-8 border-t-slate-400 overflow-hidden border-t-2 rounded-t-[200px] shadow-white max-w-screen-xl m-auto place-items-center relative">
            <div className="h-40 w-2/3 blur-[300px] bg-info absolute top-0 left-0 right-0 mx-auto" />
            <h3 className="text-center text-3xl font-semibold">Beneficios</h3>
            <div className="grid grid-cols-list-cards gap-8 mt-16">
                <Card title="Acceso a oportunidades de inversión exclusivas">
                    Tuse brinda acceso a oportunidades de inversión que de otra manera no estarían disponibles para inversores
                    individuales. Con Tuse, los inversores pueden unirse y participar en inversiones colectivas en proyectos
                    interesantes que normalmente requerirían grandes cantidades de capital para participar.
                </Card>
                <Card title="Diversificación de riesgos">
                    Al invertir en Tuse, los inversores pueden diversificar su riesgo al invertir en varios proyectos y sectores
                    diferentes en lugar de concentrarse en una sola inversión. Además, como los inversores pueden decidir
                    colectivamente sobre las inversiones, hay menos riesgo de que una mala inversión arruine todo el portafolio.
                </Card>
                <Card title="Toma de decisiones colectivas">
                    Tuse es una organización autónoma descentralizada (DAO), lo que significa que las decisiones sobre las
                    inversiones son tomadas por los inversores de manera colectiva. Esto permite una mayor transparencia y una
                    toma de decisiones más justa y democrática.
                </Card>
                <Card title="Rentabilidad">
                    Al invertir en Tuse, los inversores pueden obtener una rentabilidad atractiva en sus inversiones. Además, como
                    Tuse puede invertir en una amplia gama de proyectos y sectores, hay más oportunidades para obtener una
                    rentabilidad sólida a largo plazo.
                </Card>
                <Card title="Bajo costo">
                    Tuse utiliza la tecnología blockchain para reducir los costos de inversión y permitir que más personas puedan
                    invertir. En lugar de tener que pagar altas comisiones a intermediarios financieros, los inversores pueden
                    invertir directamente en la plataforma de Tuse, lo que reduce los costos y aumenta las ganancias potenciales.
                </Card>
            </div>
        </section>
    );
}
