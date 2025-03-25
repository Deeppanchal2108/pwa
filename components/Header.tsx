"use client"; // Ensure this is at the top

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname

export default function Header() {
    const t = useTranslations("header");
    const router = useRouter();
    const pathname = usePathname(); // Get current path

    // Extract locale from pathname (assuming URL is "/en" or "/hi")
    const currentLocale = pathname.startsWith("/hi") ? "hi" : "en";

    const switchLanguage = () => {
        const newLocale = currentLocale === "en" ? "hi" : "en";
        router.push(`/${newLocale}${pathname.substring(3)}`); // Keep the same path while changing locale
    };

    return (
        <header className="sticky top-0 z-50 bg-amber-900/90 text-amber-50 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-amber-600"></div>
                    <span className="text-xl font-bold">{t("brand")}</span>
                </div>

                <button className="block md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-8">
                        <li><Link href="/#home" className="hover:text-amber-300">{t("home")}</Link></li>
                        <li><Link href="/#menu" className="hover:text-amber-300">{t("menu")}</Link></li>
                        <li><Link href="/#about" className="hover:text-amber-300">{t("about")}</Link></li>
                        <li><Link href="/#contact" className="hover:text-amber-300">{t("contact")}</Link></li>
                    </ul>
                    <button
                        onClick={switchLanguage}
                        className="rounded bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
                    >
                        {currentLocale === "en" ? "हिन्दी" : "English"}
                    </button>
                </nav>
            </div>
        </header>
    );
}
