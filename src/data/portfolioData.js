// src/data/portfolioData.js
export const projects = [
    {
      id: 1,
      title: "Custom Booking Solution",
      description: "For my BrainStation capstone, I built a full-stack website for Blink Lash and Nail Bar with a custom booking system, showcasing my skills in web development and API integration.",
      technologies: ["React", "Node.js", "Express", "SCSS"],
      githubUrl: "https://github.com/jfitt149/justin-fitt-blink_lash_and_nail_bar",
      liveUrl: "https://blinklashandnailbar.netlify.app/",
      image: "/blink.jpg"
    },
    {
      id: 2,
      title: "Portfolio Site",
      description: "I developed a responsive portfolio site using React to showcase my projects, skills, and experience. The site features dynamic components, smooth navigation, and a clean, modern design",
      technologies: ["React", "Styled Components", "Framer Motion", "React Router"],
      githubUrl: "https://github.com/jfitt149/portfolio",
      liveUrl: "https://justinfitt.ca/",
      image: "/portfolio_screenshot.png"
    },
    {
      id: 3,
      title: "MyBrary",
      description: "An online library management system allowing users to browse, add, and manage books. I built this full-stack web app to practice working with databases, and express servers.",
      technologies: ["Express", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/jfitt149/Mybrary",
      liveUrl: "https://mybrary-6zgy.onrender.com/",
      image: "/mybrary.png"
    }
  ];
  
  export const skills = [
    {
      category: "Frontend",
      technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "Express", "Django", "REST APIs"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools",
      technologies: ["Git", "Jira", "Postman", "VS Code"]
    }
  ];