import { SectionLayout } from "../../layouts/SectionLayout";
import "./about.scss";
import avatar from "./avatar.svg";

export const About = () => {
  return (
    <SectionLayout title="About me">
      <div className="flex">
        <div className="bio">
          <p>
            My name is Alina and I am a web-developer based in Aalborg, Denmark.
            My key interest is front-end development with focus on UX and UI.
            However, my toolkit is full-stack. As for the tools, I am a big fan
            of React.js together with TypeScript.
          </p>
          <p>
            In august 2022, I graduated from{" "}
            <a
              href="https://www.hackyourfuture.dk/"
              target="_blank"
              rel="noreferrer"
            >
              HackYourFuture
            </a>{" "}
            bootcamp where I studied web-development. The cirriculum included
            modules on HTML/CSS, JavaScript, Node.js, React.js, and databases.
            While studying, I did an internship as a software developer at
            PeekEmbrace I/S, where my primary stack was React.js with
            TypeScript.
          </p>
          <p>
            My key priority is to make a solution user-friendly and aesthetic as
            well as the source code - structured and maintainable.
          </p>
          <p>
            Before my career switch, I got a BA in Political science, where I
            specialized in political analysis and management. During my studies
            and some time after, I was working in a small NGO where I managed
            educational programs for youth. Besides, I had to deal with
            marketing, inclucing SoMe and SEO.{" "}
          </p>
          <p>
            When I am not coding, I like to travel, cook food, and learn foreign
            languages.{" "}
          </p>
        </div>
        <div className="photo">
          <img src={avatar} width="300px" alt="cartoonified avatar" />
        </div>
      </div>
    </SectionLayout>
  );
};
