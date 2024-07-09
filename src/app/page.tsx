import Image from "next/image";
import logo from "../../public/logo.svg"
import Navbar from "@/components/navbar/nav";
import Hero from "@/components/hero/hero";
import QuemSomos from "@/components/quemsomos/quemSomos";
import Produtos from "@/components/produtos/produtos";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loading/loading";


export default function Home() {
  return (
    <>
      <Loading />
      <Navbar />
      <Hero />
      <QuemSomos />
      <Produtos />
      <Footer />
    </>
  );
}
