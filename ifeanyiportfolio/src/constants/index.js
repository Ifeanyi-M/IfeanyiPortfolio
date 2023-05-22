import
    {
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
        nodejs,
        mongodb,
        git,
        figma,
        docker,
        meta,
        starbucks,
        tesla,
        shopify,
        carrent,
        jobit,
        tripguide,
        threejs,
        decagonlogo,
        abibiman,
        csharp,
        dotnet,
        sqlserver,
        bodyworthy,
        youtubeclone,
        sweetopia,
        stephen,
        benedicta,
        ever,
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
        title: "3D Developer",
        icon: mobile,
    },
    {
        title: "C# Developer",
        icon: backend,
    },
    {
        title: "React Developer",
        icon: creator,
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
        name: "MongoDB",
        icon: mongodb,
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
   /*  {
        name: "csharp",
        icon: csharp,
    }, */
    {
        name: "dotnet",
        icon: dotnet,
    },
    /* {
        name: "sqlserver",
        icon: sqlserver,
    }, */
];

const experiences = [
   /*  {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }, */
    {
        title: "Web Developer Intern",
        company_name: "Abibiman",
        icon: abibiman,
        iconBg: "#383E56",
        date: "Sep 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Decagon",
        icon: decagonlogo,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Present",
        points: [
            "Worked for the software development company as part of an agile team of .NET developers.",
            "Built and documented new features and APIs and performed API integrations on the front end.",
            "Worked alongside graphic designers for web design features and ensured responsiveness of applications",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Ifeanyi  proved me wrong.",
        name: "Stephen Embleton",
        designation: "Lead Graphic Designer",
        company: "Abibiman",
        image: stephen,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Ifeanyi does.",
        name: "Benedicta Oruma",
        designation: "Program Associate",
        company: "Decagon",
        image: benedicta,
    },
    {
        testimonial:
            "After Ifeanyi optimized our website, our traffic increased by 50%. We can't thank him enough!",
        name: "Evaristus Obi",
        designation: "MD",
        company: "ZedCrest",
        image: ever,
    },
];

const projects = [
    {
        name: "BodyWorthy",
        description:
            " A Responsive Fitness Website built with React Js 18 and React Router 6.",
        tags: [
            {
                name: "reactjs 18",
                color: "blue-text-gradient",
            },
            {
                name: "reactrouter 6",
                color: "green-text-gradient",
            },
            {
                name: "react icons",
                color: "pink-text-gradient",
            },
        ],
        image: bodyworthy,
        source_code_link: "https://github.com/Ifeanyi-M/BodyWorthy.git",
        source_code_link2: "https://bodyworthy.netlify.app/",
    },
    {
        name: "YouTube Clone",
        description:
            "A website that mirrors YouTube application in all ramifications.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "rapidapi",
                color: "green-text-gradient",
            },
            {
                name: "reactplayer",
                color: "pink-text-gradient",
            },
        ],
        image: youtubeclone,
        source_code_link: "https://github.com/Ifeanyi-M/youtubeclone.git",
        source_code_link2: "https://ifeanyiyoutube.netlify.app/",
        
    },
    {
        name: "Sweetopia",
        description:
            "A online food app that allows the user to order for a meal or meals.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
        ],
        image: sweetopia,
        source_code_link: "https://github.com/Ifeanyi-M/Sweetopia-BlueAlmond--Frontend.git",
        source_code_link2: "",
    },
];

export { services, technologies, experiences, testimonials, projects };