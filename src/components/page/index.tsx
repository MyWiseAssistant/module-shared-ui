import React from "react";
import Hero, { HeroProps } from "../hero";
import Container from "../container";

export interface PageProps {
  pageName: string;
  hero?: HeroProps;
  children?: React.ReactNode;
}

const Page = ({ pageName, hero, children }: PageProps) => {
  return (
    <>
      {hero ? (
        <Hero pageTitle={pageName} image={hero.image} height={hero.height}>
          {hero.children}
        </Hero>
      ) : null}
      {children}
    </>
  );
};

export default Page;
