
import pokkefunImg from '../assets/image/pokkefun.png';

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        category: "Web App",
        image: "https://placehold.co/600x400/1a1d2d/FFF?text=Landing+Page",
        description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
        tech: ["React", "Bootstrap", "Chart.js"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        id: 2,
        title: "Pokkefun Landing Page",
        category: "Landing Page",
        image: pokkefunImg,
        description: "High-converting landing page for a modern SaaS platform with scroll animations.",
        tech: ["vue", "Vite"],
        demoLink: "https://daffadaminatila.github.io/pokkefun/",
        repoLink: "https://github.com/DaffaDaminatila/pokkefun/"
    },
    /*{
        id: 3,
        title: "Crypto Wallet API",
        category: "API",
        image: "https://placehold.co/600x400/1a1d2d/FFF?text=API+Integration",
        description: "Secure REST API for cryptocurrency wallet management and transactions.",
        tech: ["Node.js", "Express", "MongoDB"],
        demoLink: "#",
        repoLink: "#"
    }*/
];

export const SKILLS = [
    { name: "HTML5/CSS3", level: "Advanced", icon: "bi-filetype-html" },
    { name: "JavaScript", level: "Intermediate", icon: "bi-filetype-js" },
    { name: "React/Redux", level: "Intermediate", icon: "bi-filetype-jsx" },
    { name: "Tailwind CSS", level: "intermediate", icon: "bi-wind" },
    { name: "Bootstrap", level: "Intermediate", icon: "bi-bootstrap" },
    { name: "Next.js", level: "Beginner", icon: "bi-filetype-key" },
    { name: "UI/UX Design", level: "Advanced", icon: "bi-palette" },
    { name: "Node.js/Express", level: "Intermediate", icon: "bi-server" },
    { name: "MongoDB", level: "Beginner", icon: "bi-database" },
    // { name: "PostgreSQL", level: "Intermediate", icon: "bi-database-fill" },
    { name: "Git", level: "Intermediate", icon: "bi-git" },
    { name: "GitHub", level: "Intermediate", icon: "bi-github" }
];
export const SOCIAL_LINKS = {
    github: "https://github.com/DaffaDaminatila",
    linkedin: "https://linkedin.com/in/muhammad-daffa-daminatila",
    instagram: "https://instagram.com/daffa_doremi_",
    dribbble: "https://dribbble.com/yourusername",
    email: "daffa.dev.studio@gmail.com",
    cv: "/path/to/your/cv.pdf" // Update this with actual CV path
};

export const PROFILE_INFO = {
    name: "M. Daffa Daminatila",
    role: "Full-Stack Developer",
    location: "Bogor, ID",
    email: "daffa.dev.studio@gmail.com",
    experience: "5+", // Updated based on user edit
    projects_done: "10+"
};
