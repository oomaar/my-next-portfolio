import { Hero, Portfolio } from "../components";
import { Headtag, Main } from "../global";
import portfolioData from "../data/portfolioData.json";

export default function Home() {
  return (
    <div>
      <Headtag title="Omar's Portfolio | Resume" />

      <Main>
        <Hero />
        <Portfolio data={portfolioData.portfolio} />
      </Main>
    </div>
  )
};