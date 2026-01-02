import { useEffect } from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import setPageTitle from "../functions/setPageTitle";

export default function Home() {
  useEffect(() => {
    setPageTitle("Home");
  }, []);

  return (
    <>
      <Container center_x fullscreen_x>
        <Title>Hello, world!</Title>
      </Container>
    </>
  );
}
