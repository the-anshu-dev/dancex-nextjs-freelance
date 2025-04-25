import { FAQ } from "@/lib/types";

export default function Faq({ faq }: { faq: FAQ }) {
  return (
    <details className="group cursor-pointer rounded-xl bg-slate-800 p-4 transition-all duration-300">
      <summary className="flex justify-between p-2 md:text-xl">
        <p>{faq.question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14"
          />
          <path
            className="group-open:hidden"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v14"
          />
        </svg>
      </summary>
      <div className="transition-all duration-300">
        <p className="mt-4 p-2 text-secondary opacity-50 md:text-xl">
          {faq.answer}
        </p>
      </div>
    </details>
  );
}
