import Strategy from "@/components/Strategy";
import Deliver from "../components/Deliver";
import Demand from "../components/Demand";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import Speak from "../components/Speak";
import Web3 from "../components/Web3";
import Footer from "@/components/Footer";
import Marketing from "@/components/Marketing";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <Web3 />
      {/* <Marketing /> */}
      <Strategy />
      <Deliver />
      <Blog />
      <Demand />
      <Speak />
      <Questions />
      <Footer />
    </main>
  );
}
