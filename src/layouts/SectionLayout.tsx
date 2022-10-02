import { FC } from "react";
import "./sectionLayout.scss";

interface SectionLayoutProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export const SectionLayout: FC<SectionLayoutProps> = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
};
