"use client";

import React from "react";

export default function ProductCard({ product }) {
    return (
        <div className="group relative bg-[#121214] border border-zinc-800/50 rounded-[2.5rem] p-4 transition-all duration-500 hover:border-accent-blue/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            {/* Imagen */}
            {/* Contenedor de Imagen con Glassmorphism */}
            <div className="relative aspect-[4/5] rounded-[1rem] overflow-hidden bg-zinc-900 mb-6 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                        Nuevo
                    </span>
                </div>

                {/* Botón Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Vista rápida
                    </button>
                </div>
            </div>


            {/* Info */}
            <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-tighter mb-1">
                            {product.category}
                        </p>
                        <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-accent-blue transition-colors">
                            {product.title}
                        </h3>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500">Precio</span>
                        <span className="text-2xl font-black text-blue-500 italic">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>

                    {/* Botón de Añadir */}
                    <button className="relative flex items-center justify-center w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl text-white group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-300 shadow-xl">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 5v14M5 12h14"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
