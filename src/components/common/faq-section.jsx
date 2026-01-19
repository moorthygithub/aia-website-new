import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


const FaqSection = ({ faqs = [] }) => {

  const groupedFaqs = {};
  let currentHeading = "General Questions";

  const sortedFaqs = [...faqs].sort((a, b) =>
    a.sort.localeCompare(b.sort)
  );

  sortedFaqs.forEach((faq) => {
    if (faq.heading) {
      currentHeading = faq.heading;
    }

    if (!groupedFaqs[currentHeading]) {
      groupedFaqs[currentHeading] = [];
    }

    groupedFaqs[currentHeading].push(faq);
  });

  const headings = Object.keys(groupedFaqs);


  const [activeHeading, setActiveHeading] = useState(
    headings[0] || ""
  );

  
  if (!faqs.length) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
       
          <div className="md:col-span-2">
            <h2 className="text-[#0F3652] text-4xl font-semibold">
              FAQs
            </h2>
            
            <div className="mt-8 space-y-4">
              {headings.map((heading, index) => (
                <div 
                  key={index} 
                  className="group"
                  onClick={() => setActiveHeading(heading)}
                >
                  <h3 className={`text-lg font-medium cursor-pointer transition-colors ${
                    activeHeading === heading 
                      ? 'text-[#F3831C] border-l-4 border-[#F3831C] pl-4' 
                      : 'text-[#0F3652] hover:text-[#F3831C] pl-5'
                  }`}>
                    {heading}
                  </h3>
                </div>
              ))}
            </div>
          </div>

     
          <div className="md:col-span-3">
            <h3 className="text-[#0F3652] text-2xl font-semibold mb-6">
              {activeHeading}
            </h3>
            
            <Accordion type="single" collapsible>
              {groupedFaqs[activeHeading]?.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#F3831C]/20"
                >
                  <AccordionTrigger className="cursor-pointer text-[#0F3652] font-medium hover:no-underline hover:text-[#F3831C] text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[#0F3652] text-base whitespace-pre-line">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-[#0F3652] mt-6 md:hidden">
            Can't find what you're looking for? Contact our{" "}
            <Link to="#" className="text-[#F3831C] font-medium hover:underline">
              customer support team
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;