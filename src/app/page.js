import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import SideNavbar from "./SideNavbar/SideNavbar";
import Homepage from "./Home/page";
import Productspage from "./products/page";
import Servicespage from "./OurServices/page";
export default function Home() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Homepage></Homepage>
    <Productspage></Productspage>
    <Servicespage></Servicespage>
    {/* <SideNavbar></SideNavbar> */}
    </>
  );
}
