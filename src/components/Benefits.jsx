import { IoAnalyticsSharp, IoSchoolSharp, IoSyncCircleSharp, IoSparklesSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const benefitsList = [
    {
        icon: <IoSyncCircleSharp />,
        title: "Adaptación en Tiempo Real",
        description: "Detecta frustración y activa refuerzos pedagógicos automáticos, adaptando el contenido al instante."
    },
    {
        icon: <IoAnalyticsSharp />,
        title: "Métricas Pedagógicas Reales",
        description: "Genera indicadores de progreso basados en el estado emocional durante la lectoescritura, no solo en aciertos."
    },
    {
        icon: <IoSchoolSharp />,
        title: "Diseño Co-creado Inclusivo",
        description: "Requerimientos validados con más de 40 educadores, familiares y personas sordas."
    },
    {
        icon: <IoSparklesSharp />,
        title: "Enfoque 100% No Oral",
        description: "A diferencia de otras IAs, nuestro sistema no depende de señales de voz, solo de análisis visual."
    }
];

const cardVariants = {
    hover: {
        y: -5,
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)"
    }
};

const Benefits = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-6">
                <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    Una solución centrada en el alumno
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {benefitsList.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border border-gray-200 p-8 text-left"
                            variants={cardVariants}
                            whileHover="hover"
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-4 text-4xl text-secondary">{benefit.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;