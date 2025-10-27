import Hero from "../components/main/Hero";
import About from "../components/main/About";
import CategoryPage from "@/components/main/category";
import Process from "@/components/main/process";
import Buyers from "@/components/main/buyers";
import Testimonials from "@/components/main/testimals";
import FAQs from "@/components/main/faqs";
import Contact from "@/components/main/contact";
import Footer from "@/components/services/footer";
import WhatsAppButton from "@/components/services/whatsappbt";
import Location from "@/components/main/location";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CategoryPage/>
      <Process />
      <Buyers />
      <Testimonials />
      <FAQs />
      <Contact />
      <Location/>
      <Footer />
    <WhatsAppButton/>
    </div>
  );
}
