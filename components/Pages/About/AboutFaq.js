import React from 'react';

const AboutFaq = () => {

    const faqs = [
        {
            id: 1,
            question: "Are these waviers legally valid?",
            answer:
                "Currently, no. These waivers are NOT legally binding. They are for demonstration purposes only.",
        },
        {
            id: 2,
            question: "Are the prices subject to change?",
            answer:
                "Yes, the current prices are temporary. As the service evolves and our features grow, the prices will increase accordingly. However, we will re-evaluate our pricing tiers to make sure that you aren't paying for more than you need — and that you're not getting less than you're paying for.",
        },
        {
            id: 3,
            question: "When will the Partner Dashboard be available?",
            answer:
                "The Partner Dashboard will be available sometime in early 2023, as our Product Roadmap depicts below.",
        },
        {
            id: 4,
            question: "As a business owner, do I need to have my own waivers before I can use the service?",
            answer:
                "Currently yes, you must have your own waivers before you can use the service. We will be adding a way to link your waivers to your account soon.",
        },
        {
            id: 5,
            question: "Does Waivez sell your personal information to third parties?",
            answer:
                "No, Waivez does not sell your personal information.",
        },
        {
            id: 6,
            question: "Is Waivez secure?",
            answer:
                "Yes, Waivez is secure. We use a 256-bit SSL encryption protocol to protect your data, and house it in a secure Amazon Web Services (AWS) server.",
        },
    ]

    return (
        <div className="bg-gradient-to-bl from-primary to-[#9f40ff] my-20">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-secondary">Frequently asked questions</h2>
                <div className="mt-6 border-t border-secondary border-opacity-40 pt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="text-lg leading-6 font-medium text-secondary">{faq.question}</dt>
                                <dd className="mt-2 text-base text-secondary mr-2">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default AboutFaq;
