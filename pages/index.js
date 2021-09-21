import { Hero } from "../components";
import { Headtag, Main } from "../global";

export default function Home() {
  return (
    <div>
      <Headtag title="Omar's Portfolio | Resume" />

      <Main>
        <Hero />
      </Main>
    </div>
  )
};