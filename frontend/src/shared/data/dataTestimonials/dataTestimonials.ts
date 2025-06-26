type Testimonials = {
  feedback: string;
  author: string;
  img: string;
  role: string;
};

const dataTestimonials: Testimonials[] = [
  {
    feedback:
      "Daniel implemented our website with impressive speed, taking all of our wishes and suggestions into account. He stands out not only for his comprehensive understanding of design, but also for his pleasant manner, which makes working with us particularly pleasant.",
    img: "./img/1.png",
    author: "Azhy Muhammad",
    role: "Studio management, recording studio B12",
  },
  {
    feedback:
      "Dani was truly one of the most pleasant experiences I've ever had on a project. Totally uncomplicated, super reliable, and just in the flow. He created the mockup of my landing page entirely on his own – quickly, thoughtfully, and with a really good eye for detail. I hardly had to explain anything – he immediately understood what was going on. And by the way: just a really nice guy. I would work with him again anytime.",

    img: "./img/2.png",
    author: "Simo Azzaoui",
    role: "Creator, Meet your Mentor",
  },
  {
    feedback:
      "Daniel provided us with outstanding support in both the design and conception of our website. He contributes his own ideas and suggestions and precisely integrates them with the client's vision. We highly recommend working with him.",

    img: "./img/3.png",
    author: "Dominic von Proeck",
    role: "Managing Director, Brainscent",
  },
  {
    feedback:
      "Working with Daniel is characterized by high professionalism and an excellent grasp of complex requirements. The combination of technical know-how and customer-oriented design makes every collaboration with him a great experience.",

    img: "./img/4.png",
    author: "Manono Liebermann",
    role: "Managing Director, Your Coach",
  },
];

export default dataTestimonials;
