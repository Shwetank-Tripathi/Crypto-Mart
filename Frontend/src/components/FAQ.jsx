import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        aria-label="What is Cryptomart?"
        title="What is Cryptomart?"
      >
        Cryptomart is an online platform where you can buy and sell various
        products and services using cryptocurrencies like Bitcoin, Ethereum, and
        more.
      </AccordionItem>

      <AccordionItem
        aria-label="How does Cryptomart work?"
        title="How does Cryptomart work?"
      >
        Cryptomart operates similarly to traditional ecommerce platforms, but
        instead of using fiat currencies, transactions are conducted using
        cryptocurrencies. Simply browse through our products, add items to your
        cart, and proceed to checkout using your preferred cryptocurrency.
      </AccordionItem>

      <AccordionItem
        aria-label="What cryptocurrencies are accepted on Cryptomart?"
        title="What cryptocurrencies are accepted on Cryptomart?"
      >
        Currently, we accept Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and
        Bitcoin Cash (BCH). We are continually exploring options to expand our
        list of accepted cryptocurrencies.
      </AccordionItem>

      <AccordionItem
        aria-label="Is it safe to use Cryptomart?"
        title="Is it safe to use Cryptomart?"
      >
        Yes, Cryptomart prioritizes the security and privacy of our users. We
        employ advanced encryption techniques to secure your transactions and
        personal information. Additionally, we recommend practicing good
        security measures on your end, such as using secure passwords and
        enabling two-factor authentication.
      </AccordionItem>

      <AccordionItem
        aria-label="Are there any fees associated with using Cryptomart?"
        title="Are there any fees associated with using Cryptomart?"
      >
        Cryptomart charges minimal transaction fees to cover network costs
        associated with processing cryptocurrency transactions. These fees are
        typically lower than those charged by traditional payment processors.
      </AccordionItem>

      <AccordionItem
        aria-label="Do you ship internationally?"
        title="Do you ship internationally?"
      >
        Yes, Cryptomart offers international shipping to most countries.
        Shipping fees and delivery times may vary depending on your location and
        the products you purchase. Please refer to our shipping policy for more
        information.
      </AccordionItem>

      <AccordionItem
        aria-label="What if I need to return or exchange a product?"
        title="What if I need to return or exchange a product?"
      >
        We understand that sometimes products may not meet your expectations.
        Cryptomart offers a hassle-free return and exchange policy. Simply
        contact our customer support team within the specified return period,
        and we will guide you through the process.
      </AccordionItem>
    </Accordion>
  );
}
