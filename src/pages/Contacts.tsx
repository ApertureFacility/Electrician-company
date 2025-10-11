import ContactForm from "../components/ContactForm";
import RealizeSection from "../components/RealizeSection";
import mapImage from "../assets/map.png";

export default function Contacts() {
  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-[url('/src/assets/ContactsMainImg.png')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-40 py-12 gap-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-lg mb-4">
            Контактная информация
          </h1>
          <span className="text-lg sm:text-xl block mb-3">
            На коммерческих объектах
          </span>
          <p className="text-base sm:text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors">
            Подробнее
          </button>
        </div>

        <ContactForm />
      </div>

      <img
        src={mapImage}
        alt="Карта"
        className="w-full h-[500px] object-cover relative z-10"
      />

      <RealizeSection />
    </section>
  );
}
