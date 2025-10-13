import { Zap, Cpu, Wrench } from "lucide-react";



export default function Services() {
  return (
    <div className="w-full overflow-x-hidden">

      <section className="relative w-full h-[500px] sm:h-[600px] bg-[url('/src/assets/services-banner.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg mb-4">
              Наши услуги
            </h1>
            <p className="text-lg sm:text-xl drop-shadow-md">
              Предоставляем полный спектр электромонтажных и инженерных решений
              для коммерческих и промышленных объектов.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 sm:px-12 lg:px-40 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Что мы делаем</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Предлагаем комплексные решения от проектирования до монтажа и
            обслуживания. Каждая услуга выполняется профессионально и в срок.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <Zap className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Электромонтаж</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Полный спектр работ по электроснабжению: монтаж, подключение,
              обслуживание и модернизация сетей.
            </p>
          </div>

    
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <Cpu className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Автоматизация</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Внедрение систем управления и автоматизации производства,
              освещения и энергоэффективности.
            </p>
          </div>

      
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <Wrench className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Техническое обслуживание</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Плановое обслуживание, модернизация оборудования и устранение
              аварийных ситуаций.
            </p>
          </div>

       
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-40 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl font-bold text-blue-700 mb-2">50+</span>
            <span className="block text-gray-600">Довольных клиентов</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-700 mb-2">100+</span>
            <span className="block text-gray-600">Проектов</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-700 mb-2">10</span>
            <span className="block text-gray-600">Лет опыта</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-700 mb-2">24/7</span>
            <span className="block text-gray-600">Поддержка</span>
          </div>
        </div>
      </section>
    </div>
  );
}
