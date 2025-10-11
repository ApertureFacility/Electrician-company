import CorporateSection from "../components/CorporateSection";
import Footer from "../components/Footer";
import GridMainPage from "../components/GridMainPage";

import RealizeSection from "../components/RealizeSection";

function Home() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-[url('/src/assets/elo.webp')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
  
        <div className="flex-1 flex items-center px-4 sm:px-8 lg:px-[250px] text-white justify-start">
          <div className="text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-lg mb-4">
              Электромонтажные работы
            </h1>
            <span className="text-lg sm:text-xl block mb-3">
              На коммерческих объектах
            </span>
            <p className="text-base sm:text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, velit!
            </p>
            <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors">
              Подробнее
            </button>
          </div>
        </div>
      </div>

      <section className="px-4 sm:px-8 lg:px-[250px] py-20 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Готовые решения от РСЭМ
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iure
              atque dicta at consequuntur nemo similique aut praesentium nisi
              doloribus?
            </p>
            <button className="flex items-center gap-2 w-full sm:w-auto bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold text-white transition-colors">
              <span>Перейти к решениям</span>
              <img
                src="/src/assets/arrowRighticon.png"
                alt="ArrowRighticon"
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="/src/assets/maskGroup.png"
              alt="Решения РСЭМ"
              className="rounded-2xl shadow-lg max-w-md w-full"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <span className="block text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
              50+
            </span>
            <span className="block text-base sm:text-lg text-gray-600">
              заказчиков
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <span className="block text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
              100+
            </span>
            <span className="block text-base sm:text-lg text-gray-600">
              проектов
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <span className="block text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
              10 лет
            </span>
            <span className="block text-base sm:text-lg text-gray-600">
              опыта
            </span>
          </div>
        </div>
      </section>

      <GridMainPage />
      <RealizeSection />

      <CorporateSection />
      <Footer />
    </div>
  );
}

export default Home;
