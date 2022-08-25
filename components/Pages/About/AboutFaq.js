import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
        "The Partner Dashboard will be available sometime in early 2023, as our Product Roadmap depicts above.",
    },
    {
      id: 4,
      question:
        "As a business owner, do I need to have my own waivers before I can use the service?",
      answer:
        "Currently yes, you must have your own waivers before you can use the service. We will be adding a way to link your waivers to your account soon.",
    },
    {
      id: 5,
      question: "Does Waivez sell your personal information to third parties?",
      answer: "No, Waivez does not sell your personal information.",
    },
    {
      id: 6,
      question: "Is Waivez secure?",
      answer:
        "Yes, Waivez is secure. We use a 256-bit SSL encryption protocol to protect your data, and house it in a secure Amazon Web Services (AWS) container.",
    },
  ];

  return (
    <div className="my-16 bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180 " : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutFaq;
