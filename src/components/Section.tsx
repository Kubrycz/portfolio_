import React, { ReactNode } from "react";
import "../scss/components/SectionContainer.scss";
import "../scss/components/Section.scss";
import "../scss/variables/text.scss";
import "../scss/components/ProjectsContainer.scss";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="section">
        <div className="wrapper">{children}</div>
    </div>
  );
};
export default Section;
