import homeStyle from "@/app/styles/home.module.css"
import Container from "./components/Container"
import Banner from "./components/Banner"
import Weare from "./components/Weare"
import OurService from "./components/OurService"
export default function Home() {
  return (
    <main className={homeStyle.main}>
      <Banner />
      <Weare />
      <OurService />
    </main>
  )
}
