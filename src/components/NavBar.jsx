function NavBar() {


    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md  z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                <a className="hover:text-gray-300" href="#design">Design</a>
                <a className="hover:text-gray-300" href="#performance">Performance</a>
                <a className="hover:text-gray-300" href="#camera">Câmera</a>
                <a className="hover:text-gray-300" href="#cores">Cores</a>
                <a href="#comprar">
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">Comprar</button>
                </a>
            </div>
        </nav>
    )
}

export default NavBar