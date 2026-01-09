




import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { BlurredStagger } from "../ui/blurred-stagger";



const BlogFaq = ({ title = "FAQs", subtitle, faqs }) => {
  if (!faqs?.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-8 ">
          
         
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">
              {title}
            </h2>

            <p className="text-muted-foreground mt-4 text-lg">
              {subtitle}
            </p>

            
          </div>

        
          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-muted-foreground mt-6 md:hidden">
            Can't find what you're looking for? Contact our{" "}
            <Link to="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogFaq;
