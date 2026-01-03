    import { useState } from "react";
    import useFadeIn from "../hooks/useFadeIn";
    import "./Projects.css";

    /* IMAGES */
    import inventaImg from "../assets/projects/inventa.webp";
    import swingImg from "../assets/projects/swing.webp";
    import websiteImg from "../assets/projects/website-content.webp";
    import blogImg from "../assets/projects/blog-campaign.webp";
    import portfolioImg from "../assets/projects/portfolio-content.webp";

    const projects = [
    {
        category: "Academic Projects",
        title: "Inventa",
        subtitle: "Billing & Inventory System",
        desc:
        "Contributed to a unified system enabling real-time sales tracking, role-based access, and centralized reporting across locations.",
        image: inventaImg
    },
    {
        category: "Academic Projects",
        title: "Swing",
        subtitle: "CRM for Xerox Shops",
        desc:
        "Built a web solution with online document uploads and payments, reducing queues and improving user convenience.",
        image: swingImg
    },
    {
        category: "Content & Marketing Projects",
        title: "Website & E-commerce Content Optimization",
        subtitle: "SEO Content Project",
        desc:
        "Created SEO-optimized content for a company website and an e-commerce platform, improving structure and search readiness.",
        image: websiteImg
    },
    {
        category: "Content & Marketing Projects",
        title: "Blog Content — Company Launch & Christmas Campaign",
        subtitle: "Campaign Blog Writing",
        desc:
        "Wrote strategic blog posts supporting a company launch and festive campaign, focusing on engagement and SEO fundamentals.",
        image: blogImg
    },
    {
        category: "Content & Marketing Projects",
        title: "Personal Portfolio Content Writing",
        subtitle: "Portfolio SEO & Content",
        desc:
        "Developed and optimized a personal portfolio with keyword-driven content and recruiter-focused messaging.",
        image: portfolioImg
    }
    ];

    const Projects = () => {
    useFadeIn();
    const [index, setIndex] = useState(0);
    const [flipping, setFlipping] = useState(false);

    const handleNext = () => {
        if (flipping) return;

        setFlipping(true);

        // 🔥 almost instant change
        setIndex((prev) => (prev + 1) % projects.length);

        // 🔥 very small lock just for safety
        setTimeout(() => {
            setFlipping(false);
        }, 180);
    };
    return (
        <section className="projects fade-section" id="projects">
        <div className="projects-container wide-layout">
            <h2 className="projects-title">Projects & Achievements</h2>

            <h3 key={projects[index].category} className="projects-dynamic-heading">
            {projects[index].category}
            </h3>

            <div className="project-stack wide" onClick={handleNext}>
            {projects.map((project, i) => {
                const pos = (i - index + projects.length) % projects.length;
                const isActive = pos === 0;
                const isLeft = pos % 2 !== 0;

                return (
                <div
                    key={i}
                    className={`project-card-stack 
                    ${isActive ? "active" : ""}
                    ${isActive && flipping ? "flip-vertical" : ""}
                    `}
                    style={{
                    zIndex: projects.length - pos,
                    transform: `
                        translateX(${isLeft ? -pos * 36 : pos * 36}px)
                        translateY(${pos * 16}px)
                        scale(${1 - pos * 0.06})
                    `,
                    opacity: pos > 3 ? 0 : 1
                    }}
                >
                    <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    </div>

                    <div className="project-content">
                    <h4>{project.title}</h4>
                    <span>{project.subtitle}</span>
                    <p>{project.desc}</p>
                    </div>
                </div>
                );
            })}
            </div>

            <p className="projects-hint">
            Tap the card to flip & move to the next project →
            </p>
        </div>
        </section>
    );
    };

    export default Projects;
