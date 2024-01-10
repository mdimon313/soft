import homeStyle from "@/app/styles/home.module.css"
import Container from "./components/Container"
export default function Home() {
  return (
    <main className={homeStyle.main}>
      <Container>
        <h1>This is Home</h1>
      </Container>
    </main>
  )
}
