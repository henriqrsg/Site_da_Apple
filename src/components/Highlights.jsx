
function Highlights() {

    const specs = [
    {value: '48MP', label: 'Principal', label2: 'Sensor quad-pixel com foco automático e IOS de segunda geração', color: 'text-blue-600'},
    {value: '12MP', label: 'Ultra Wide', label2: 'Campo de visão de 120° com modo noturno melhorado', color: 'text-orange-500'},
    {value: '12MP', label: 'Telefoto 5x', label2: 'Zoom óptico de 5x com estabilização tetraprism', color: 'text-blue-600'},
]

    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar e melhor experiência</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="Iphones" />
                        <h3 className="text-3xl font-bold mb-2">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="Ios Features" />
                        <h3 className="text-3xl font-bold mb-2">iOS 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6 text-2xl">O chip mais poderoso em um smartphone</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="chip a18" />

                    <ul className="space-y-3 text-gray-300 mt-8">
                        <li>• CPU 20% mais rápida</li>
                        <li>• GPU 25% mais eficiente</li>
                        <li>• Neural Engine com 16 núcleos</li>
                        <li>• Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div className="text-center mb-16" id="camera">
                    <h2 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h2>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-7 mx-auto max-w-8xl">
                        {specs.map((spec, index) => (
                            <div key={index} className="text-center bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                                <h3 className={`text-4xl mb-3 font-bold ${spec.color}`}>{spec.value}</h3>
                                <h4 className= "text-white font-semibold mb-2">{spec.label}</h4>
                                <p className="text-gray-400 ">{spec.label2}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Highlights