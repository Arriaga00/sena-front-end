import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "../../data/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pizza Paisa Cafe</h3>
            <p>
              La mejor pizza de la ciudad, hecha con ingredientes frescos y
              amor.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contáctanos</h4>
            <p>Calle Principal 123</p>
            <p>Ciudad, CP 12345</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@pizzeriadeliciosa.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Horario</h4>
            <p>Lunes a Jueves: 11:00 - 22:00</p>
            <p>Viernes y Sábado: 11:00 - 23:00</p>
            <p>Domingo: 12:00 - 21:00</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Twitter />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-lg font-semibold mb-2">
                Suscríbete a nuestro boletín
              </h4>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-gray-800 text-white border-gray-700 focus:border-gray-600"
                />
                <Button
                  type="submit"
                  className="ml-2 bg-red-600 hover:bg-red-700"
                >
                  Suscribirse
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Pizzería Deliciosa. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
