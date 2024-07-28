import Image from "next/image";
import AboutUs from "./About/page";
import Reviews from "./Reviews/reviews"
import FooterPage from "./Footer/Footer"

export default function Home() {
  return (
    <>
    <AboutUs></AboutUs>
    <Reviews></Reviews>
    <FooterPage></FooterPage>
    </>
  );
}
