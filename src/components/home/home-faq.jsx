/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const HomeFaq = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["aia-faq"],
    queryFn: async () => {
      const res = await axios.get(
        "https://aia.in.net/webapi/public/api/getFAQbySlug/home"
      );
      return res.data;
    },
  });

  const faqHeading = data?.data?.[0]?.faq_heading || "FAQs";

  const faqItems = data?.data?.map((item, index) => ({
    id: `item-${index + 1}`,
    question: item.faq_que,
    answer: item.faq_ans,
  })) || [];

  // Add JSON-LD structured data to the head
  useEffect(() => {
    if (faqItems.length > 0) {
      // Remove existing FAQPage schema if present
      const existingScript = document.querySelector('script[type="application/ld+json"][data-faq-schema]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create FAQPage structured data
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

      // Create and append the script element
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-faq-schema', 'true'); // Add a custom attribute for identification
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);

      // Cleanup function to remove the script when component unmounts
      return () => {
        if (script && document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [faqItems]); // Re-run effect when faqItems changes

  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading FAQs...</div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-500">Error loading FAQs</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              {faqHeading}
            </p>
            <p className="text-muted-foreground mt-6 hidden md:block">
              Can't find what you're looking for? Reach out to our{' '}
              <Link to="#" className="text-primary font-medium hover:underline">
                support team
              </Link>{' '}
              for assistance.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600">
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
            Can't find what you're looking for? Contact our{' '}
            <Link to="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export const BlurredStagger = ({ text = "built by ruixen.com" }) => {
  const headingText = text;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-base leading-relaxed wrap-break-word whitespace-normal">
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.3 }}
            className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default HomeFaq;