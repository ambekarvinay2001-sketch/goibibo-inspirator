import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I book a hotel on TravelEase?",
      answer: "Simply enter your destination, check-in and check-out dates, and number of guests in our search form. Browse through available hotels, compare prices and amenities, then click 'Book Now' to complete your reservation."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, most bookings can be cancelled or modified based on the hotel's cancellation policy. You can manage your bookings through your account dashboard or contact our 24/7 customer support for assistance."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. All taxes and fees are clearly displayed during the booking process. The final price you see is exactly what you'll pay - no surprises."
    },
    {
      question: "How do I get the best deals?",
      answer: "Sign up for our newsletter to receive exclusive offers, book in advance for early bird discounts, and check our promotional offers section regularly. First-time users get special welcome discounts!"
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use industry-standard SSL encryption and work with trusted payment providers to ensure your personal and financial information is completely secure."
    },
    {
      question: "What if I need help during my trip?",
      answer: "Our customer support team is available 24/7 to assist you. You can reach us through the app, website, or our dedicated helpline. We're here to make your travel experience smooth and enjoyable."
    }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers to help make your booking experience smooth
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-background rounded-lg border border-border/50 shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;