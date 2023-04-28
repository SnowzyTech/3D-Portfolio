import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
   
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    nutri,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    gpt,
    google,
    calc,
    coffee,
    ecommerce,
    realestate,
    travel,
    youtube,
    bank,
    estate,
    banks, 
    tess,
    tiktik,
    metaverse,
    emma,
    edu,
    eduicon,
    sumz,
    jesse,
  damian,
  ejike,
  linda
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    
    {
      title: "Content Writer",
      icon: creator,
    },
  ];

  const myImage = [
   {
     photo: emma
   },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Nutriticare",
      url: "https://www.nutriticare..com",
      icon: nutri,
      iconBg: "#383E56",
      date: "September 2020 - December 2022",
      points: [
        "Worked directly as a team member and a led role to develop a great user interface, optimized and well-responsive website for the company within 3weeks which boosted the company's online presence and the had a 10% increase in their productivity"
      ],
    },
    {
      
      
      title: "Writer",
      company_name: "Entrepreneur Business Blog Of Nigeria",
      icon: tesla,
      iconBg: "#E6DEDD",
      url: "https://www.entrepreneurbusinessblog.com/2020/05/color-secrets-ecommerce-website-conversion/",
      date: "May 2019 - September 2022",
      points: [
        "Co-ordinated as a team member in developing original quality blog posts/Articles that increased their traffic and had over a thousand views",  
        "Here are the links to the articles written me on the blogs",
        "The color secrets behind e-commerce conversion you need to know",
        "https://www.entrepreneurbusinessblog.com/2020/05/color-secrets-ecommerce-website-conversion/",
        "7 Freelance Writing Platforms Where You Can Offer Your Skills and Earn in Dollars",
        "https://www.entrepreneurbusinessblog.com/2020/09/freelance-writing-platforms- offer-skills-earn-dollars/"
      ],
    },
    {
      title: "Web Developer",
      company_name: "KeresGhost",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const education = [
    {
      icon: eduicon,
      date: "Jan 2023 - 2027",
      state: "Owerri, Imo State",
      certificate: "Bachelor of Engineering / Soft ware Engineering (in progress)",
      school: "Federal university of technology owerri",
      
    },
    {
      icon: eduicon,
      date: "Sept 2016 - July 2019",
      state: "Owerri, Imo State",
      certificate: "West African Certificate",
      school: "Ndegwu Secondary School",
      
    },
    {
      icon: eduicon,
      date: "Sept 2003 - July 2013",
      state: "Owerri, Imo State",
      certificate: "First School Leaving Certificate",
      school: "International Organisation of Good Templers Nursery and Primary School",
      
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Emmanuel proved me wrong.",
      name: "Melvin Damian",
      // designation: "CFO",
      image: damian,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Emmanuel does.",
      name: "Ejike Silva",
      image: ejike,
    },
    {
      testimonial:
        "After Emmanuel optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Jess Ezenwa",
     
      image: jesse,
    },
    {
      testimonial:
        "Emmanuel was an exception and well-grounded towards building a well optimized and fully functional website for our company. The website gave our company a good online presence.",
      name: "Linda Chikoadi",
      // designation: "CTO",
      company: "Nutriticare",
      image: linda,
    },
  ];
  
  const projects = [
    {
      name: "AI Summarizer",
      description: " I developed an AI Summarizer that summarises an aritcle",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "black-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/SnowzyTech/AI_Summarizer_App",
      live_code_link: "https://ai-summarizer.netlify.app/",
    },
    {
      name: "GPT-3 OpenAI",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
      name: "CGPA Calculator",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      ],
      image: calc,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
      name: "Banking LaningPage Website",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: banks,
      source_code_link: "https://github.com/SnowzyTech/Modern_banking_website",
      live_code_link: "https://modern-banking-website.vercel.app/",
    },
    {
      name: "Youtube App Clone",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
      name: "RealEstate App",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: estate,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
      name: "An Ecommerce Website",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
      name: "Travel Companion App",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
      name: "A Coffee Shop",
      description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: coffee,
      source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
      live_code_link: "https://gptui.netlify.app/",
    },
    {
    name: "Google Clone",
    description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: google,
    source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
    live_code_link: "https://gptui.netlify.app/",
  },
  {
    name: "Video Sharing App",
    description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      
    ],
    image: tiktik,
    source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
    live_code_link: "https://tiktik-app-zytv.vercel.app/",
  },
  {
    name: "Tesla Landing Page",
    description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      
    ],
    image: tess,
    source_code_link: "https://github.com/SnowzyTech/Tesla_LangingPage_clone",
    live_code_link: "https://tesla-langing-page-clone.vercel.app/",
  },
  {
    name: "Metavserse UI/UX",
    description: " I developed a responsive and great user landing page interface for GPT OpenAI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      
    ],
    image: metaverse,
    source_code_link: "https://github.com/SnowzyTech/Modern-UI-UX-GPT-3",
    live_code_link: "https://metaversuswebsite.netlify.app/",
  },
  ];
  
  export { services, myImage, technologies, experiences, education, testimonials, projects };