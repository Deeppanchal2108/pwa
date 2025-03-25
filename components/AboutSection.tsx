import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
    const t = useTranslations("aboutSection");

    return (
        <section id="about" className="bg-amber-900 py-20 text-amber-50">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("title")}</h2>
                        <p className="mb-4 text-amber-100/90">{t("description1")}</p>
                        <p className="mb-6 text-amber-100/90">{t("description2")}</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="rounded-lg bg-amber-800 p-4 text-center">
                                <p className="text-3xl font-bold text-amber-300">{t("stats.experience.value")}</p>
                                <p className="text-sm">{t("stats.experience.label")}</p>
                            </div>
                            <div className="rounded-lg bg-amber-800 p-4 text-center">
                                <p className="text-3xl font-bold text-amber-300">{t("stats.varieties.value")}</p>
                                <p className="text-sm">{t("stats.varieties.label")}</p>
                            </div>
                            <div className="rounded-lg bg-amber-800 p-4 text-center">
                                <p className="text-3xl font-bold text-amber-300">{t("stats.locations.value")}</p>
                                <p className="text-sm">{t("stats.locations.label")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] overflow-hidden rounded-xl md:h-auto">
                        <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt={t("imageAlt")}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
