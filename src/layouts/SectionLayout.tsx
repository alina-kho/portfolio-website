import { FC } from "react";
import "./sectionLayout.scss";

interface SectionLayoutProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export const SectionLayout: FC<SectionLayoutProps> = ({ title, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
