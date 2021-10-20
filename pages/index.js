import { About, Hero, Skills, Work } from "../components";
import { Headtag, Main } from "../global";
import portfolioData from "../data/portfolioData.json";

export default function Home() {
  return (
    <div>
      <Headtag title="Omar's Portfolio | Resume" />

      <Main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Work data={portfolioData.portfolio} />
      </Main>
    </div>
  )
};