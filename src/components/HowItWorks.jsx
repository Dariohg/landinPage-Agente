const HowItWorks = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-6">
                <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    Fácil de Integrar vía API
                </h2>
                <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-8">

                    <div className="flex-1 text-center">
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">1</div>
                        <h3 className="mb-2 text-xl font-semibold">Envía Stream</h3>
                        <p className="text-gray-600">La aplicación educativa (ej. APRENDIA) envía el stream de video a nuestra API REST.</p>
                    </div>

                    <div className="h-12 w-px border-l-2 border-dashed border-secondary md:h-auto md:w-auto md:flex-1 md:border-l-0 md:border-t-2 md:mt-7"></div>

                    <div className="flex-1 text-center">
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">2</div>
                        <h3 className="mb-2 text-xl font-semibold">Analiza en la Nube</h3>
                        <p className="text-gray-600">Nuestro motor de IA procesa los datos faciales y devuelve un objeto JSON con el estado emocional.</p>
                    </div>

                    <div className="h-12 w-px border-l-2 border-dashed border-secondary md:h-auto md:w-auto md:flex-1 md:border-l-0 md:border-t-2 md:mt-7"></div>

                    <div className="flex-1 text-center">
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white">3</div>
                        <h3 className="mb-2 text-xl font-semibold">Actúa en la App</h3>
                        <p className="text-gray-600">La aplicación cliente recibe el JSON y dispara la acción de ayuda correspondiente (ej. un video de refuerzo).</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;