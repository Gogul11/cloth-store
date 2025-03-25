import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const [open, setOpen] = useState(null);

    const toggleQuestion = (index) => {
        setOpen(open === index ? null : index);
    };

    const questions = [
        {
            qs : 'What is Trendy Trends?',
            ans : 'Trendy Trends is a fashion brand that offers trendy, high-quality, and affordable clothing for everyone.'
        },
        {
            qs : 'Do you have a physical store?',
            ans : 'Currently, we are an online-only store, delivering fashion straight to your doorstep.'
        },
        {
            qs : 'How can I track my order?',
            ans : 'Once your order is shipped, you will receive a tracking link via email or SMS'
        },
        {
            qs : 'How can I contact customer support?',
            ans : 'You can email us at support@trendytrends.com or DM us on Instagram @trendytrends_official.'
        },
        {
            qs : 'Are your products true to size?',
            ans : 'Yes, but we recommend checking customer reviews and our size guide for the best fit.'
        }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto mt-10 p-4">
            <h2 className="text-3xl font-bold text-white text-center mb-6">FAQs</h2>
            <div className="space-y-4">
                {questions.map((faq, index) => (
                    <div key={index} className="bg-gray-600 rounded-lg shadow-md overflow-hidden">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full flex justify-between items-center px-4 py-3 text-white font-medium text-lg focus:outline-none"
                            role="button"
                            aria-expanded={open === index}
                        >
                            {faq.qs}
                            {open === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                open === index ? "max-h-40 p-4 bg-gray-200 text-black" : "max-h-0"
                            }`}
                        >
                            {faq.ans}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
