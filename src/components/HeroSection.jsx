import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#09090b] py-16 md:px-24 min-h-[80vh] lg:h-screen">
            {/* Luces de fondo */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Lado izquierdo: Texto */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                                TrendNova Store
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Moda que te define <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                TrendNova
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            <span className="text-blue-500 font-semibold">TrendNova Store:</span> gadgets y accesorios tecnológicos con calidad, buen precio y envío rápido.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                            <Link
                                href="/products"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            >
                                Comprar ahora
                            </Link>
                            <Link
                                href="/category"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 text-zinc-300 font-bold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all duration-300"
                            >
                                Ver catálogo
                            </Link>
                        </div>

                        {/* Redes Sociales */}
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                            <a href="#" className="text-white hover:text-blue-500 transition-colors">
                                Twitter
                            </a>
                            <a href="#" className="text-white hover:text-blue-600 transition-colors">
                                Facebook
                            </a>
                            <a href="#" className="text-white hover:text-purple-500 transition-colors">
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* Lado derecho: Imagen */}
                    <div className="flex-1 relative w-full group mt-10 lg:mt-0">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />

                        {/* Contenedor de imagen */}
                        <div className="relative z-10 rounded-[3rem] border border-zinc-800 overflow-hidden bg-zinc-900 aspect-[5/5] max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] mx-auto">
                            <img
                                src="https://png.pngtree.com/thumb_back/fh260/background/20240720/pngtree-supermarket-grocery-store-aisle-and-shelves-blurred-background-image_15896050.jpg"
                                alt="Productos destacados"
                                className="object-cover opacity-90 w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                            />
                        </div>

                        {/* Tarjeta flotante */}
                        <div className="absolute -top-8 -left-8 bg-zinc-900/80 backdrop-blur-xl p-5 rounded-2xl border border-zinc-700/50 shadow-2xl z-20 hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Envío Express</p>
                                    <p className="text-sm font-semibold text-white">Disponible ahora</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
