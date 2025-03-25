import Link from "next/link"
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer")

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-amber-900 py-10 text-amber-200">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-amber-600"></div>
                            <span className="text-lg font-bold text-amber-50">{t("brand")}</span>
                        </div>
                        <p className="text-sm text-amber-300/80">{t("tagline")}</p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-medium text-amber-50">{t("quickLinks")}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#home" className="hover:text-amber-300">{t("home")}</Link></li>
                            <li><Link href="#menu" className="hover:text-amber-300">{t("menu")}</Link></li>
                            <li><Link href="#about" className="hover:text-amber-300">{t("about")}</Link></li>
                            <li><Link href="#contact" className="hover:text-amber-300">{t("contact")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-medium text-amber-50">{t("policies")}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-amber-300">{t("privacyPolicy")}</Link></li>
                            <li><Link href="#" className="hover:text-amber-300">{t("terms")}</Link></li>
                            <li><Link href="#" className="hover:text-amber-300">{t("refundPolicy")}</Link></li>
                            <li><Link href="#" className="hover:text-amber-300">{t("faq")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-medium text-amber-50">{t("contactInfo")}</h4>
                        <address className="not-italic">
                            <p className="mb-2 text-sm">{t("address")}</p>
                            <p className="mb-2 text-sm">{t("city")}</p>
                            <p className="mb-2 text-sm">{t("email")}</p>
                            <p className="text-sm">{t("phone")}</p>
                        </address>
                    </div>
                </div>

                <div className="mt-10 border-t border-amber-800 pt-6 text-center text-sm text-amber-300/70">
                    <p>&copy; {currentYear} {t("brand")}. {t("copyright")}</p>
                </div>
            </div>
        </footer>
    )
}
