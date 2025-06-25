// Import Accordion components from NextUI for collapsible FAQ sections
import { Accordion, AccordionItem } from "@nextui-org/react";

// FAQ component for displaying frequently asked questions
export default function FAQ() {
  // Return the JSX structure for the FAQ section
  return (
    // Main accordion container with split variant styling
    <Accordion variant="splitted">
      {/* FAQ item about what Cryptomart is */}
      <AccordionItem
        aria-label="What is Cryptomart?"
        title="What is Cryptomart?"
      >
        {/* Answer explaining Cryptomart's purpose */}
        Cryptomart is an online platform where you can buy and sell various
        products and services using cryptocurrencies like Bitcoin, Ethereum, and
        more.
      </AccordionItem>

      {/* FAQ item about how Cryptomart works */}
      <AccordionItem
        aria-label="How does Cryptomart work?"
        title="How does Cryptomart work?"
      >
        {/* Answer explaining the platform's operation */}
        Cryptomart operates similarly to traditional ecommerce platforms, but
        instead of using fiat currencies, transactions are conducted using
        cryptocurrencies. Simply browse through our products, add items to your
        cart, and proceed to checkout using your preferred cryptocurrency.
      </AccordionItem>

      {/* FAQ item about accepted cryptocurrencies */}
      <AccordionItem
        aria-label="What cryptocurrencies are accepted on Cryptomart?"
        title="What cryptocurrencies are accepted on Cryptomart?"
      >
        {/* Answer listing supported cryptocurrencies */}
        Currently, we accept Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and
        Bitcoin Cash (BCH). We are continually exploring options to expand our
        list of accepted cryptocurrencies.
      </AccordionItem>

      {/* FAQ item about platform security */}
      <AccordionItem
        aria-label="Is it safe to use Cryptomart?"
        title="Is it safe to use Cryptomart?"
      >
        {/* Answer about security measures */}
        Yes, Cryptomart prioritizes the security and privacy of our users. We
        employ advanced encryption techniques to secure your transactions and
        personal information. Additionally, we recommend practicing good
        security measures on your end, such as using secure passwords and
        enabling two-factor authentication.
      </AccordionItem>

      {/* FAQ item about transaction fees */}
      <AccordionItem
        aria-label="Are there any fees associated with using Cryptomart?"
        title="Are there any fees associated with using Cryptomart?"
      >
        {/* Answer about fee structure */}
        Cryptomart charges minimal transaction fees to cover network costs
        associated with processing cryptocurrency transactions. These fees are
        typically lower than those charged by traditional payment processors.
      </AccordionItem>

      {/* FAQ item about international shipping */}
      <AccordionItem
        aria-label="Do you ship internationally?"
        title="Do you ship internationally?"
      >
        {/* Answer about shipping policies */}
        Yes, Cryptomart offers international shipping to most countries.
        Shipping fees and delivery times may vary depending on your location and
        the products you purchase. Please refer to our shipping policy for more
        information.
      </AccordionItem>

      {/* FAQ item about returns and exchanges */}
      <AccordionItem
        aria-label="What if I need to return or exchange a product?"
        title="What if I need to return or exchange a product?"
      >
        {/* Answer about return policy */}
        We understand that sometimes products may not meet your expectations.
        Cryptomart offers a hassle-free return and exchange policy. Simply
        contact our customer support team within the specified return period,
        and we will guide you through the process.
      </AccordionItem>
    </Accordion>
  );
}
