import { SectWraper } from "./Section.styled";

export const Section = ({ title, children }) => {
    return (
      <SectWraper>
        <h1>{title}</h1>
        {children}
      </SectWraper>
    );
  };