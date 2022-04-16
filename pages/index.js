import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGermy,
  Header,
} from "../src/containers";
import { CTA, Brand, Navbar } from "../src/components";

export default function Home() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGermy />
      {/* <Features /> */}
      <Possibility />
      <CTA
        label="This is a long term project"
        title="Let's join with The Germies and become a Germy Ranger!"
        link="See Roadmap"
        path="/roadmap"
      />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}
