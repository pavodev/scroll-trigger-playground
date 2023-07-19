import Image from "next/image";
import Container from "./components/Container";
import Card from "./components/Card";
import Images from "./components/Images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Container>
        <h1 className="text-2xl">Scroll to see the magic!</h1>
      </Container>
      <Container>
        <Images />
      </Container>
      <Container>{<Card />}</Container>
      <Container>{}</Container>
    </main>
  );
}
