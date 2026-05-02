import { useState } from 'react';

function Colors() {

    const colors = [
        {id: 'orange', name: 'Titânio Laranja', image: '../../public/img/iphone-orange.png', colorClass: 'bg-orange-500'},
        {id: 'blue', name: 'Titânio Azul', image: '../../public/img/iphone-blue.png', colorClass: 'bg-blue-500'},
        {id: 'silver', name: 'Titânio Cinza', image: '../../public/img/iphone-silver.png', colorClass: 'bg-gray-300'}
    ];

    const models = [
        {name: 'Pro Max', screen: 'Tela de 6.9 polegadas com ProMotion 120hz e Always-On display', storage: '256GB, 512GB ou 1TB', battery: 'Bateria com até 33h de vídeo', weight: '221g'},
        {name: 'Pro', screen: 'Tela de 6.3 polegadas com ProMotion 120hz e Always-On display', storage: '128GB, 256GB ou 512GB', battery: 'Bateria com até 29h de vídeo', weight: '199g'}
    ];

    const [selectedColor, setselectedColor] = useState('orange')

    return (
        <section id="colors" className="bg-black py-20 px-8" id="cores">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio lindos</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-125">
                            <img src={colors.find(color => color.id === selectedColor).image} alt="iphone 17 pro" className="ml-75 max-w-full max-h-100 mx-auto"/>
                        </div>

                        <div className="absolute bottom-8 right-0 left-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-5">
                    {colors.map(color =>(
                        <button key={color.id} onClick={() => setselectedColor(color.id)} className="relative transition-all duration-300 cursor-pointer" >
                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600'}`}></div>
                        </button> 
                    ))}
                </div>

                <div className="grid gap-8 mt-20 grid-cols-2">
                    {models.map((model, index) => (
                        <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                            <p className="text-gray-400 mb-4">{model.screen}</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• {model.storage}</li>
                                <li>• {model.battery}</li>
                                <li>• {model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16" id="comprar">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-all durant-300 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">Compre agora a partir de R$ 9.299,00</button>
                    <p className="text-gray-400 mt-4">Ou em até 12x de 774,92 sem juros</p>
                </div>
            </div>
        </section>
    )
}

export default Colors