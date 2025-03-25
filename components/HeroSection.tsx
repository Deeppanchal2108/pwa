import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations("hero");

    return (
        <section id="home" className="relative h-[80vh] overflow-hidden">
            <div className="absolute inset-0 bg-stone-900/60 z-10"></div>
            <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt={t("imageAlt")}
                fill
                className="object-cover"
                priority
            />
            <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                    {t("headline")} <span className="text-amber-400">{t("highlight")}</span>
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-amber-50/90 md:text-xl">
                    {t("description")}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                        href="#menu"
                        className="rounded-full bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
                    >
                        {t("exploreMenu")}
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
                    >
                        {t("findUs")}
                    </a>
                </div>
            </div>
        </section>
    );
}
