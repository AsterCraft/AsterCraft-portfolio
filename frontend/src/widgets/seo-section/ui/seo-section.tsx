import { useState } from "react";
import cn from "classnames";

import { StartProjectBtn } from "@shared/ui";
import { PhoneEnabledIcon } from "@shared/ui";
import { LocationOnIcon } from "@shared/ui";
import { MailIcon } from "@shared/ui";

import s from "./seo-section.module.scss";
import gs from "@shared/styles/global.module.scss";

const SeoSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(false);

  return (
    <section className={s.seoSection}>
      <div className={cn(s.wrapper, gs.container)}>
        <div
          className={cn(s.contactsColumn, s.column)}
          aria-labelledby="contact-heading"
        >
          <h2
            className={s.heading}
            id="contact-heading"
          >
            <span className={s.headingLine}>Drop us a request</span>
            <span className={s.headingLine}>And we'll do the rest!</span>
          </h2>

          <div className={s.countryContacts}>
            <menu
              className={s.countrySelectors}
              role="group"
              aria-label="Select country"
            >
              <button
                type="button"
                className={cn(s.countryButton, s.active)}
                aria-pressed="true"
              >
                <span>Ukraine</span>
              </button>
              <button
                type="button"
                className={s.countryButton}
                aria-pressed="false"
              >
                <span>Bulgaria</span>
              </button>
              <button
                type="button"
                className={s.countryButton}
                aria-pressed="false"
              >
                <span>Poland</span>
              </button>
            </menu>

            <address className={s.contactList}>
              <ul className={s.contactItems}>
                <li className={s.contactItem}>
                  <PhoneEnabledIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <a
                    href="tel:+48790839872"
                    className={s.contactLink}
                  >
                    +48 (790) 8398 72
                  </a>
                </li>
                <li className={s.contactItem}>
                  <MailIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <a
                    className={s.contactLink}
                    href="mailto:astercraft.dev@gmail.com"
                  >
                    astercraft.dev@gmail.com
                  </a>
                </li>
                <li className={s.contactItem}>
                  <LocationOnIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <span className={s.contactText}>Lviv</span>
                </li>
              </ul>
            </address>
          </div>

          <StartProjectBtn
            text="Leave a request"
            className={s.ctaButton}
          />
        </div>

        <div className={cn(s.textColumn, s.column)}>
          <h1>Creating websites in Ukraine</h1>

          <p>
            Website development - a complex process, which involves many
            IT-specialists of different profiles. Today there is practically no
            company that has not "brought" its business online. The development
            and launch of a web resource is carried out in several stages. Only
            thorough preparation makes it possible to implement a project that
            will bring results to the business. Therefore, the choice of the
            contractor should be taken responsibly.
          </p>

          <p>
            Our web studio in Kiev MEGASITE develops web-sites, e-commerce
            platforms, turnkey corporate resources for different business niches
            and any level of complexity.
          </p>

          <h2>Types of sites</h2>

          <p>
            Website development in Ukraine is a demanded type of IT-service.
            Virtually any line of business needs to create their own web
            resource, as customers are often much more convenient to interact
            with the company in online format. The cost of the project depends
            on the type of site, the complexity of the work, and the niche in
            which the client operates. The following varieties of WEB-resources
            are in demand:
          </p>

          <ul>
            <li>
              Business card - the site is suitable for representatives of small
              businesses who want to introduce potential customers to their
              company. Typically, this resource contains 3-5 pages and gives a
              general idea of the services and products;
            </li>
            <li>
              Corporate - multi-page website, which describes products/services
              of business in details, has extended functionality and features.
              It may also be intended for internal use by employees;
            </li>
            <li>
              Internet-shop - the trading platform, which allows you to offer
              your goods or services to a greater number of customers. Payment
              tools may be connected, possibility to create personal accounts
              and other useful functions;
            </li>
            <li>
              landing page - a single-page page created for advertising
              purposes. It allows you to increase conversion through a call to
              take a specific action, which is necessary for business;
            </li>
            <li>
              Online services - platforms that provide services (registration,
              ticketing, online registration, and so on).
            </li>
          </ul>

          <p>
            If you are interested in developing web sites in Ukraine, apply to
            our IT company. We will help to solve IT-tasks of any complexity.
          </p>

          <h2>Turnkey website creation</h2>

          <p>
            Website development is a service of a full cycle of site
            development, starting from market research and design of the
            resource to the launch of the project and its subsequent
            maintenance, advertising settings, SEO, etc. In this case, the
            promotion is not always included in the price of the order.
          </p>

          <p>WEB-site development includes the following activities:</p>

          <ul>
            <li>
              Market analysis and analysis of competitors, the study of the
              client's business and research the target audience who will use
              the resource;
            </li>
            <li>
              Planning and detailed design of the project structure based on
              these data;
            </li>
            <li>
              creating a prototype of the project, its discussion and approval;
            </li>
            <li> drawing design;</li>
            <li>layout and programming;</li>
            <li>testing;</li>
            <li>optimization and filling with content;</li>
            <li>Final adjustments and delivery.</li>
          </ul>

          <p>
            These are the main stages that performs our company in the creation
            of the site. But if you want the customer can order the setting of
            advertising, promotion and so on. Also, when the project is handed
            over, we teach our client's employees to use the interface and site
            administration.
          </p>

          <h2>What affects the cost of website development</h2>

          <p>
            Most often, before order website development, customers are
            interested in how much it will cost this service. You can find out
            the price after a conversation with a manager. The budget of the
            project may vary due to many factors:
          </p>

          <ul>
            <li>The type of site that interests the customer;</li>
            <li>the estimated number of pages;</li>
            <li>the desired set of features;</li>
            <li>time for the development of the project;</li>
            <li>
              the number and qualifications of the specialists involved in the
              development.
            </li>
          </ul>

          <p>
            On average it takes 1-4 months to create a website. Depending on the
            objectives of the project, we apply both template and custom
            solutions. For example, the design can be standard, while the
            functionality is developed specially for the web resource.
          </p>

          <h2>Why website creation is better to trust MEGASITE agency</h2>

          <p>
            Our IT company has extensive experience in creating and promoting
            web resources of various complexity. We take into consideration
            customer requirements and offer optimum solutions. Our projects are
            effective and allow businesses to achieve their goals. We have
            experienced specialists who can run even the most complex project.
            Your WEB-resource will become a powerful basis for the promotion and
            development of the company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
