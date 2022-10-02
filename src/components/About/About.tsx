import { SectionLayout } from "../../layouts/SectionLayout";
import "./about.scss";

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
        </div>
        <div className="photo"></div>
      </div>
    </SectionLayout>
  );
};
