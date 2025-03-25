import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
    const t = useTranslations("contactSection");

    return (
        <section id="contact" className="bg-stone-100 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
                    <p className="mx-auto max-w-2xl text-stone-600">{t("description")}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-xl bg-white p-6 shadow-md">
                        <h3 className="mb-6 text-2xl font-bold">{t("contactInfo")}</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="mt-1 h-5 w-5 text-amber-700" />
                                <div>
                                    <p className="font-medium">{t("address.label")}</p>
                                    <p className="text-stone-600">{t("address.value")}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="mt-1 h-5 w-5 text-amber-700" />
                                <div>
                                    <p className="font-medium">{t("hours.label")}</p>
                                    <p className="text-stone-600">{t("hours.weekdays")}</p>
                                    <p className="text-stone-600">{t("hours.weekends")}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="mt-1 h-5 w-5 text-amber-700" />
                                <div>
                                    <p className="font-medium">{t("phone.label")}</p>
                                    <p className="text-stone-600">{t("phone.value")}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="mt-1 h-5 w-5 text-amber-700" />
                                <div>
                                    <p className="font-medium">{t("email.label")}</p>
                                    <p className="text-stone-600">{t("email.value")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="mb-4 font-medium">{t("followUs")}</h4>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[300px] overflow-hidden rounded-xl md:h-auto">
                        <div className="absolute inset-0 bg-amber-200 flex items-center justify-center">
                            <p className="text-amber-800 text-lg font-medium">{t("mapPlaceholder")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
