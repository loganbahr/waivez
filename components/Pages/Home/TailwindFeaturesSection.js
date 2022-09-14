/**
 * @file components\Pages\Home\TailwindFeaturesSection.js
 * @author: Logan Bahr
 * @description: Some various features of Waivez.
 * @since 7/26/22
 */
import { CheckIcon } from "@heroicons/react/solid";

const features = [
  {
    name: "Return Probability Index",
    description:
      "An analytics tool that predicts the likelihood of a customer to return, and when they are most likely to return.",
    icon: CheckIcon,
  },
  {
    name: "Customer Heat Maps",
    description:
      "An interactive map of the United States that depicts where your customers are coming from over a given period of time.",
    icon: CheckIcon,
  },
  {
    name: "Advanced Analytics",
    description:
      "Take advantage of Machine Learning powered algorithms to identify trends and patterns in your data.",
    icon: CheckIcon,
  },
  {
    name: "Interactive Partner Dashboard",
    description:
      "Access to your own Partner Dashboard — a place where all of your customer data is stored, managed, and analyzed.",
    icon: CheckIcon,
  },
  {
    name: "Customer Support",
    description:
      "Our customer support team is available 24/7 to help you with any questions you may have.",
    icon: CheckIcon,
  },
  {
    name: "Third Party Integrations",
    description:
      "Integrate with third party services to automate your business processes and increase your revenue.",
    icon: CheckIcon,
  },
];

export default function TailwindFeaturesSection() {
  return (
    <div className="relative py-16 bg-secondary sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
          The most advanced waiver technology in the industry.
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-800 max-w-prose">
          Get to know your customers and understand your business&apos;s
          demographic. Learn where your customers are coming from — and when
          they&apos;ll be back.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary">
                        <feature.icon
                          className="w-6 h-6 text-secondary"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
