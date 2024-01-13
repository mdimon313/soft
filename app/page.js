import homeStyle from "@/app/styles/home.module.css";
import Banner from "./components/Banner";
import Weare from "./components/Weare";
import OurService from "./components/OurService";
import ChooseUs from "./components/ChooseUs";
import OurProject from "./components/OurPorjects";
export default function Home() {
  return (
    <main className={homeStyle.main}>
      <Banner />
      <Weare />
      <OurService />
      <ChooseUs />
      <OurProject />
    </main>
  )
}
