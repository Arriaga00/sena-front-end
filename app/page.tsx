import { NavBar } from "@/components/nav";
import { Banner } from "@/components/banner";
import { HomeFood } from "@/components/home-food";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <section className="bg-gradient-to-r from-orange-400 to-yellow-400">
        <NavBar text="text-white" />
        <div className="w-full flex justify-center">
          <Banner />
        </div>
      </section>

      <main className="container mx-auto  p-4">
        <HomeFood />
      </main>
      <Footer />
    </div>
  );
}
