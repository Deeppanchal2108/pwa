import Image from "next/image";
import { useTranslations } from "next-intl";

interface Product {
    name: string;
    price: string;
    description: string;
}

export default function FeaturedProducts() {
    const t = useTranslations("featuredProducts");
    const products = t.raw("products");

    return (
        <section id="menu" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
                    <p className="mx-auto max-w-2xl text-stone-600">{t("description")}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product: Product, index: number) => (
                        <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <span className="text-lg font-medium text-amber-700">{product.price}</span>
                                </div>
                                <p className="mb-4 text-stone-600">{product.description}</p>
                                <button className="w-full rounded-full border-2 border-amber-700 py-2 font-medium text-amber-700 transition-colors hover:bg-amber-700 hover:text-white">
                                    {t("orderNow")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-amber-800 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-900"
                    >
                        {t("viewMenu")}
                    </a>
                </div>
            </div>
        </section>
    );
}
