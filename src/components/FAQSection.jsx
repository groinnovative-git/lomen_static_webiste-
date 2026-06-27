import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is LoMen Fashion Club?",
    answer:
      "LoMen Fashion Club is a men's fashion brand based in Coimbatore, Tamil Nadu, offering premium stylish clothing collections and modern menswear for everyday wear. We focus on quality fabrics, contemporary designs, and everyday comfort.",
  },
  {
    question: "What type of products are available at LoMen Fashion Club?",
    answer:
      "LoMen Fashion Club offers a wide range of men's clothing including shirts, t-shirts, pants, jackets, hoodies, blazers, shorts, casual wear, and custom-fit menswear. All collections are designed for the modern young man.",
  },
  {
    question: "Is LoMen Fashion Club suitable for daily wear?",
    answer:
      "Yes, the collections are designed to help men look stylish and confident for daily wear, casual outings, college, work, and modern lifestyle needs. Every piece prioritises both style and comfort.",
  },
  {
    question: "Does LoMen Fashion Club offer custom clothing?",
    answer:
      "Yes, LoMen Fashion Club offers a customisation service where you can design your own fit — choose your fabric, collar style, cuff, and cut for a truly personalised menswear experience.",
  },
  {
    question: "How can customers contact LoMen Fashion Club?",
    answer:
      "Customers can reach LoMen Fashion Club by email at lomenfashionclub@gmail.com, by phone at +91 93609 59528, or by visiting the store at 74, Collector Sivakumar St, Saibaba Colony, Coimbatore, Tamil Nadu 641038.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer,
    },
  })),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section className="homeFaqSection">
        <div className="homeFaqSectionInner">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Frequently Asked Questions</h2>
            <p className="sectionSubtitle">
              Everything you need to know about LoMen Fashion Club.
            </p>
          </div>

          <div className="homeFaqList">
            {faqs.map((faq, index) => (
              <div key={index} className="homeFaqItem">
                <button
                  className="homeFaqQuestion"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`homeFaqChevron ${openIndex === index ? "homeFaqChevronOpen" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="homeFaqAnswer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
