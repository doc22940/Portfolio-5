import React from "react";
import Card from "./Card";
// import Tedimin from "../Assets/Tedimin.png";
// import Rich from "../Assets/Rich UI.png";

function CardsList() {
  const projects = [
    //   {
    //     title: "Tedimin",
    //     stack: "HTML, SCSS",
    //     image: Tedimin,
    //     code: "https://github.com/MeRichard123/Tedimin",
    //     site: "https://merichard123.github.io/Tedimin/",
    //     desc: "Tedimin is a theoretical drug to treat boredom. I was asked to make a website about the testing of drugs to teach students about why medication needs to tested and trialed, I made a site to showcase the product, medical trial and a trail sign up. As a result students in my school learned about process new drugs go through."
    //   },
    //   {
    //     title: "Rich UI",
    //     stack:"HTML, SCSS",
    //     image: Rich,
    //     code: "https://github.com/MeRichard123/Rich-UI-Docs",
    //     site: "https://rich-ui.netlify.app/",
    //     desc: "I wanted my sites to have a certain feel, so my work is unique. This was a project suggested by WebDevSimplified, so I built a component library using interesing SCSS features and then built a documentation website to go with it. As a result I can speed up my development by having already made some of the components I need."
    //   },
    {
      title: "Elena Joy",
      stack: "HTML, CSS",
      image: "https://richardcoric.netlify.app/img/ELENA.jpg",
      code: "https://github.com/MeRichard123/Elena-Joy",
      site: "https://merichard123.github.io/Elena-Joy/",
      desc:
        "Elena Joy is a Theoretical Professional Photographer. She Felt that her potential is not expressed fully and her past clients thought that her work needs to be shown to the world. To help I created a fully Responsive and accessible website. As a result she would gain more customers, and showcase her work online. ",
    },
  ];
  return (
    <div className="projectContainer">
      {projects.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          title={project.title}
          stack={project.stack}
          desc={project.desc}
          code={project.code}
          site={project.site}
        />
      ))}
    </div>
  );
}
export default CardsList;
