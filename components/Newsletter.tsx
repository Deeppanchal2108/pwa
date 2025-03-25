import { useTranslations } from "next-intl";


export default function Newsletter() {
    const t = useTranslations("newsletter");

    return (
        <section className="bg-amber-800 py-16 text-amber-50">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
                    <p className="mb-8 text-amber-100/90">{t("description")}</p>
                    <form className="flex flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder={t("placeholder")}
                            className="flex-1 rounded-full bg-amber-700 px-6 py-3 text-amber-50 placeholder:text-amber-200/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-amber-500 px-8 py-3 font-medium text-amber-900 transition-colors hover:bg-amber-400"
                        >
                            {t("subscribe")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
