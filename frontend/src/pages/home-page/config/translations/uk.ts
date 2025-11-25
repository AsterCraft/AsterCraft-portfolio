import type { Translation } from "./en";

// TODO: translate this object
const uk = {
  seo: {
    heading: "Creating websites in Ukraine",
    intro: {
      paragraph1:
        'Website development - a complex process, which involves many IT-specialists of different profiles. Today there is practically no company that has not "brought" its business online. The development and launch of a web resource is carried out in several stages. Only thorough preparation makes it possible to implement a project that will bring results to the business. Therefore, the choice of the contractor should be taken responsibly.',
      paragraph2:
        "Our web studio in Kiev MEGASITE develops web-sites, e-commerce platforms, turnkey corporate resources for different business niches and any level of complexity.",
    },
    typesOfSites: {
      heading: "Types of sites",
      intro:
        "Website development in Ukraine is a demanded type of IT-service. Virtually any line of business needs to create their own web resource, as customers are often much more convenient to interact with the company in online format. The cost of the project depends on the type of site, the complexity of the work, and the niche in which the client operates. The following varieties of WEB-resources are in demand:",
      items: [
        "Business card - the site is suitable for representatives of small businesses who want to introduce potential customers to their company. Typically, this resource contains 3-5 pages and gives a general idea of the services and products;",
        "Corporate - multi-page website, which describes products/services of business in details, has extended functionality and features. It may also be intended for internal use by employees;",
        "Internet-shop - the trading platform, which allows you to offer your goods or services to a greater number of customers. Payment tools may be connected, possibility to create personal accounts and other useful functions;",
        "landing page - a single-page page created for advertising purposes. It allows you to increase conversion through a call to take a specific action, which is necessary for business;",
        "Online services - platforms that provide services (registration, ticketing, online registration, and so on).",
      ],
      conclusion:
        "If you are interested in developing web sites in Ukraine, apply to our IT company. We will help to solve IT-tasks of any complexity.",
    },

    turnkeyCreation: {
      heading: "Turnkey website creation",
      intro:
        "Website development is a service of a full cycle of site development, starting from market research and design of the resource to the launch of the project and its subsequent maintenance, advertising settings, SEO, etc. In this case, the promotion is not always included in the price of the order.",
      activitiesIntro:
        "WEB-site development includes the following activities:",
      activities: [
        "Market analysis and analysis of competitors, the study of the client's business and research the target audience who will use the resource;",
        "Planning and detailed design of the project structure based on these data;",
        "creating a prototype of the project, its discussion and approval;",
        "drawing design;",
        "layout and programming;",
        "testing;",
        "optimization and filling with content;",
        "Final adjustments and delivery.",
      ],
      conclusion:
        "These are the main stages that performs our company in the creation of the site. But if you want the customer can order the setting of advertising, promotion and so on. Also, when the project is handed over, we teach our client's employees to use the interface and site administration.",
    },

    costFactors: {
      heading: "What affects the cost of website development",
      intro:
        "Most often, before order website development, customers are interested in how much it will cost this service. You can find out the price after a conversation with a manager. The budget of the project may vary due to many factors:",
      factors: [
        "The type of site that interests the customer;",
        "the estimated number of pages;",
        "the desired set of features;",
        "time for the development of the project;",
        "the number and qualifications of the specialists involved in the development.",
      ],
      conclusion:
        "On average it takes 1-4 months to create a website. Depending on the objectives of the project, we apply both template and custom solutions. For example, the design can be standard, while the functionality is developed specially for the web resource.",
    },

    whyUs: {
      heading: "Why website creation is better to trust MEGASITE agency",
      content:
        "Our IT company has extensive experience in creating and promoting web resources of various complexity. We take into consideration customer requirements and offer optimum solutions. Our projects are effective and allow businesses to achieve their goals. We have experienced specialists who can run even the most complex project. Your WEB-resource will become a powerful basis for the promotion and development of the company.",
    },
  },
} as const satisfies Translation;

export default uk;
