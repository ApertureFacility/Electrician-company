import ContactForm from "../components/ContactForm";
import RealizeSection from "../components/RealizeSection";
import mapImage from "../assets/map.png";
import { Home, Phone, Mail } from "lucide-react";

export default function Contacts() {
  return (
    <section className="relative w-full overflow-x-hidden">
      <div className="absolute inset-0 h-[600px] bg-[url('/src/assets/ContactsMainImg.png')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-40 py-12 gap-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-lg mb-4">
            Контактная информация
          </h1>
          <span className="text-lg sm:text-xl block mb-3">
            Свяжитесь с нами для консультации и сотрудничества
          </span>
          <p className="text-base sm:text-lg mb-6">
            Мы поможем с подбором оборудования, проектированием и монтажом
            систем электроснабжения любой сложности. Наши специалисты всегда
            готовы ответить на ваши вопросы.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors">
            Подробнее
          </button>
        </div>

        <ContactForm />
      </div>

      <div className="relative z-10 bg-white py-16 px-6 lg:px-40 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <Home className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Наш офис</h3>
            <p>г. Москва, ул. Техническая, д. 1435</p>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p>+7 (495) 123-45-67</p>
            <p>+7 (905) 222-33-44</p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@rsафem.ru</p>
            <p>support@rseфывm.ru</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <img
          src={mapImage}
          alt="Карта"
          className="w-full max-h-[400px] object-cover rounded-lg"
        />
      </div>

      <RealizeSection />
    </section>
  );
}
