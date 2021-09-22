import { Hero, Portfolio } from "../components";
import { Headtag, Main } from "../global";

export default function Home() {
  return (
    <div>
      <Headtag title="Omar's Portfolio | Resume" />

      <Main>
        <Hero />
        <Portfolio />
      </Main>
    </div>
  )
};