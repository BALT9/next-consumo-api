"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error cargando productos:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh] text-white">
                Cargando productos...
            </div>
        );
    }

    return (
        <section className="bg-[#09090b] py-20 md:px-24">
            <div className="container mx-auto px-6">
                {/* Cabecera */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-500 font-bold tracking-tighter uppercase text-sm">
                            <span className="w-8 h-[2px] bg-accent-blue"></span>
                            Catálogo Exclusivo
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            Nuestros Favoritos
                        </h2>
                    </div>
                    <button className="px-6 py-3 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
                        Explorar todo
                    </button>
                </div>

                {/* Grid de Productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
