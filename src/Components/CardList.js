import React from "react";
import Card from "./Card";
import Australia from "../Assets/img/Projects/Australia.png";
import Rich from "../Assets/img/Projects/Rich UI.png";
import Tedimin from "../Assets/img/Projects/Tedimin.png";
import JakubArt from "../Assets/img/Projects/Jakub Art.png";
import TortTurt from "../Assets/img/Projects/TURTLES.png";
import Equifox from "../Assets/img/Projects/EQUIFOX.png";

function CardsList() {
  const projects = [
    {
      title: "Australia",
      stack: "React JS, Styled Components ",
      image: Australia,
      code: "https://github.com/MeRichard123/Australia",
      site: "https://merichard123.github.io/Australia/",
      desc:
        "I wanted to build another travel site, but this isn't any old travel site. This site shows the various beauties of Australia using Google maps custom CSS carousels. A Friend wanted as way to show of one of his favourite places: Australia. So I built a way for people to see the beauty within.",
    },
    {
      title: "Rich UI",
      stack: "HTML, SCSS",
      image: Rich,
      code: "https://github.com/MeRichard123/Rich-UI-Docs",
      site: "https://rich-ui.netlify.app/",
      desc:
        "I wanted my sites to have a certain feel, so my work is unique. This was a project suggested by WebDevSimplified, so I built a component library using interesing SCSS features and then built a documentation website to go with it. As a result I can speed up my development by having already made some of the components I need.",
    },
    {
      title: "Tedimin",
      stack: "HTML, SCSS",
      image: Tedimin,
      code: "https://github.com/MeRichard123/Tedimin",
      site: "https://merichard123.github.io/Tedimin/",
      desc:
        "Tedimin is a theoretical drug to treat boredom. I was asked to make a website about the testing of drugs to teach students about why medication needs to tested and trialed, I made a site to showcase the product, medical trial and a trail sign up. As a result students in my school learned about process new drugs go through.",
    },
    {
      title: "Jakub Art",
      stack: "HTML, SCSS, JQuery",
      image: JakubArt,
      code: "https://github.com/MeRichard123/jakubArt",
      site: "https://artjakub.netlify.com/",
      desc:
        "A 'Client' site made for a family member, who needed a personal site. Jakub is an art student, and wanted an online presence to show his work. I created a fully responsive professional site, with an artistic theme. As a result Jakub can show his work and be contacted for any collaborations and requests.",
    },
    {
      title: "Turtles and Tortoises",
      stack: "HTML, CSS3",
      image: TortTurt,
      code: "https://github.com/MeRichard123/TurtlesTortoises",
      site: "https://merichard123.github.io/TurtlesTortoises/",
      desc:
        "Turtles and Tortoises are one of my greatest passions. However I felt that even though there are many different types of each, there wasn't really collection of all of them on the Web. So i recreated my first ever Web Project To inform the world about the wonders of the reptile world. Now all the different types are together in an organized fashion. ",
    },
    {
      title: "Equifox",
      stack: "HTML, CSS, Bootstrap, JS",
      image: Equifox,
      code: "https://github.com/MeRichard123/Equifox",
      site: "https://teamequifox.netlify.com/",
      desc:
        "Equifox is a FLL team. They needed a way to present themselves at the annual competition without having to carry around lots of posters. They asked me to make them a website so that they can show who they are and how their robot is coming along. As a result they are now able to present their work in a more portable fashion.",
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
