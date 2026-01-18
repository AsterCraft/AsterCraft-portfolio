import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  seo: {
    heading: "Website Development in Ukraine",
    intro: {
      paragraph1:
        "Developing your own website is a complex process that involves many IT specialists from different fields. Today, virtually all companies are moving their business online. The development and launch of a website is carried out in several stages. Only thorough preparation makes it possible to implement a project that will bring results to the business. Therefore, the choice of contractor should be approached responsibly.",
      paragraph2:
        "Our web studio in Lviv (Ukraine) and Lodz (Poland) develops websites, single-page sites, simple sites, e-commerce platforms, corporate sites and turnkey resources for various business niches and any level of complexity.",
    },
    typesOfSites: {
      heading: "Types of Websites",
      intro:
        "Website development in Ukraine is a demanded type of IT service. Virtually any business sector needs to create its own web resource, as customers often find it much more convenient to interact with the company online. The cost of the project depends on the type of website, the complexity of the work, and the niche in which the client operates. The following types of web resources are in demand:",
      items: [
        "Landing page - a single-page site created for advertising purposes. It allows you to increase conversion through a call to a specific action that is necessary for business;",
        "Business card - a website suitable for small business representatives who want to introduce potential customers to their company. Typically, such a web resource contains 3-5 pages and gives a general idea of services and products;",
        "Corporate - a multi-page website that describes products/services of the business in detail, has extended functionality and capabilities. It can also be designed for internal use by employees;",
        "Online store - a trading platform that allows you to offer your goods or services to a larger number of customers. Payment tools can be connected, the ability to create personal accounts and other useful functions;",
        "Online services - platforms that provide services (registration, ticket sales, online booking, etc.).",
      ],
      conclusion:
        "If you are interested in developing websites in Ukraine and Europe, contact our IT company. We will help solve IT tasks of any complexity.",
    },

    turnkeyCreation: {
      heading: "Turnkey Website Creation",
      intro:
        "Website development is a full-cycle service for creating a website, starting from market research and resource design to project launch and its subsequent maintenance, advertising setup, SEO, etc. At the same time, promotion is not always included in the order cost.",
      activitiesIntro:
        "Website development includes the following types of work:",
      activities: [
        "Market and competitor analysis, studying the client's business and researching the target audience who will use the resource;",
        "Planning and detailed design of the project structure based on this data;",
        "Creating a project prototype, its discussion and approval;",
        "Design development;",
        "Layout and programming;",
        "Testing;",
        "Content filling and optimization;",
        "Final refinements and project delivery.",
      ],
      conclusion:
        "These are the main stages that our company performs when creating a website. But if desired, the customer can order advertising setup, promotion, etc. Also, after project delivery, we train the client's employees to use the interface and site administration.",
    },

    costFactors: {
      heading: "What Affects the Cost of Website Development",
      intro:
        "Most often, before ordering website development, clients are interested in how much this service will cost. You can find out the price after a conversation with a manager. The project budget may vary due to many factors:",
      factors: [
        "The type of website that interests the customer;",
        "The approximate number of pages;",
        "The desired set of features;",
        "Time for project development;",
        "The number and qualifications of specialists involved in development.",
      ],
      conclusion:
        "On average, website creation takes from a week to 1-5 months. Depending on the project tasks, we use both template and custom solutions. For example, the design can be standard, while the functionality is developed specifically for your website.",
    },

    whyUs: {
      heading: "Why Website Creation is Better to Trust AsterCraft Agency",
      content:
        "Our IT company specializes in the development and SEO promotion of websites of any complexity — from corporate portals to online stores and complex web applications. We create web solutions optimized for Google search engines that help businesses attract customers and increase sales. A team of experienced developers and SEO specialists implements projects taking into account the technical requirements of search optimization, using modern technologies and proven digital marketing methods. By ordering a website from us, you get an effective tool for promoting your business on the Internet, which will become a reliable foundation for the growth of your company and strengthening your brand's position in the market.",
    },
  },
} as const;

export type Translation = DeepString<typeof en>;

export default en;
