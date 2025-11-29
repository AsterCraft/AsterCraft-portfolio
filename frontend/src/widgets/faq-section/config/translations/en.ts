import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  heading: "Frequently Asked Questions (FAQ)",

  items: [
    {
      id: "website-types",
      question: "What types of websites do you create?",
      answer:
        "Our team specializes in creating various types of web resources that meet specific business needs of clients. We develop targeted single-page solutions designed to convert visitors into customers through contextual advertising and targeted campaigns. We also create representative multi-page platforms that contain detailed information about the company, services, pricing policy, and contact details. For businesses that need to showcase their range without direct sales functionality, we develop catalog systems with the ability to visualize products or work portfolios. Separately, we work on specialized solutions for food establishments that integrate with online ordering systems and QR codes for quick access. If your project requires a unique approach or non-standard functionality, we are ready to develop a custom solution that will best meet your requirements and business goals.",
    },
    {
      id: "pricing",
      question: "What is the minimum cost of creating a website?",
      answer:
        "The financial component of the project is determined individually based on your business goals and functional requirements for the future web resource. During a free preliminary consultation, we discuss in detail the specifics of the task, analyze the necessary scope of work, and form a realistic implementation plan. This allows us to accurately calculate the budget and deadlines, taking into account all the features of your project. For guidance, we note that the starting cost of developing a basic website is from five hundred US dollars, but the final amount may vary depending on the complexity of the technical task and additional functional capabilities.",
    },
    {
      id: "timeline",
      question: "How long does it take to create a website?",
      answer:
        "The project implementation timeline depends on several key factors, including the speed of providing necessary materials and information on your part, as well as the overall scope and complexity of the technical task. Using modern development technologies allows us to significantly reduce the time to create a web resource compared to classical programming methods. With prompt communication and timely receipt of all necessary content, the first working version of the site can be ready for testing within one week. On average, the full development cycle, from initial consultation to final launch of the finished product, takes from one to three weeks (and sometimes months) depending on the specifics of the project.",
    },
  ],
} as const;

export type Translation = DeepString<typeof en>;

export default en;
