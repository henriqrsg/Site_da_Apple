function Hero() { 


    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0">
                <img src="../../public/img/hero.jpg" className="w-full h-full object-cover opacity-90" alt="Iphone" />
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
                <a href="#footer">
                    <img width="21" height="21" src="https://img.icons8.com/fluency-systems-filled/48/ffffff/down--v1.png" alt="down--v1"/>
                </a>
            </div>
        </section>
    )
}

export default Hero