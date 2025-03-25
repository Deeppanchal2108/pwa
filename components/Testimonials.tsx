import { useTranslations } from "next-intl";

interface Review {
    name: string;
    role: string;
    content: string;
}

export default function Testimonials() {
    const t = useTranslations("testimonials");
    const reviews = t.raw("reviews");

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
                    <p className="mx-auto max-w-2xl text-stone-600">{t("description")}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {reviews.map((testimonial: Review, index: number) => (
                        <div key={index} className="rounded-xl bg-white p-6 shadow-md">
                            <div className="mb-4 flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 text-amber-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>
                            <p className="mb-6 text-stone-600">{testimonial.content}</p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-amber-200"></div>
                                <div>
                                    <p className="font-medium">{testimonial.name}</p>
                                    <p className="text-sm text-stone-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
