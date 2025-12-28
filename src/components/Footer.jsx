// import React from 'react';

export default function Footer() {
    return (
        /* bg-[#09090b] es el color negro-zinc profundo */
        <footer className="bg-[#09090b] border-t border-zinc-800 pt-20 pb-10 overflow-hidden text-white md:px-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* 1. Branding */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black tracking-tighter italic uppercase">
                            TECH<span className="text-blue-500">STORE</span>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Equipamiento de alto rendimiento para profesionales. Diseñado en la oscuridad, hecho para brillar.
                        </p>

                        {/* Redes Sociales */}
                        <div className="flex gap-3">
                            {['Instagram', 'Twitter', 'TikTok'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-xl border border-zinc-800 bg-[#121214] flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all shadow-lg"
                                >
                                    <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Enlaces Rápidos */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 italic text-zinc-500 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-blue-500"></span>
                            Navegación
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><a href="#" className="hover:text-white transition-colors">Tienda Online</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Nuevos Drops</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
                        </ul>
                    </div>

                    {/* 3. Soporte */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 italic text-zinc-500 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-purple-500"></span>
                            Asistencia
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Devoluciones</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                        </ul>
                    </div>

                    {/* 4. Newsletter Card */}
                    <div className="relative group bg-[#121214] p-8 rounded-[2.5rem] border border-zinc-800 shadow-2xl overflow-hidden">
                        {/* Efecto de luz azul de fondo */}
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full" />

                        <h4 className="text-lg font-bold mb-2 italic">Únete al Drop</h4>
                        <p className="text-xs text-zinc-500 mb-6">Recibe acceso exclusivo antes que nadie.</p>

                        <form className="space-y-3 relative z-10">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-[#09090b] border border-zinc-800 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                            />
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
                                Suscribirme
                            </button>
                        </form>
                    </div>

                </div>

                {/* Créditos Finales */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-medium">
                        © 2025 <span className="text-zinc-400">TechStore Digital Ltd.</span>
                    </p>

                    <div className="flex gap-4 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-6 bg-zinc-700 rounded-md" />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}