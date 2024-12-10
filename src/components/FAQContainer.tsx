import { FAQ } from "@/lib/types";
import Faq from "./FAQ";

export default function FAQContainer({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="mx-auto w-full space-y-4 md:w-10/12">
      {faqs.map((faq, i) => (
        <Faq key={i} faq={faq} />
      ))}
    </div>
  );
}
