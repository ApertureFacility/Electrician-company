import React from "react";

import readyChoice from "../assets/ReadyChoise.png";
import arrowRight from "../assets/arrowRighticon.png";
import corporateMan from "../assets/corporateMan.png";
import schit4 from "../assets/schit4.png";
import suxie6 from "../assets/suhie6.png";
import maslotrans7 from "../assets/maslotrans7.png";
import potolok5 from "../assets/potolok5.png";
import podstanc8 from "../assets/podstanc8.png";

const SolutionsPage: React.FC = () => {
  return (
    <>

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${readyChoice})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-left px-6 py-24 sm:py-32">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-amber-50 drop-shadow-lg">
            Проектирование систем электроснабжения
          </h2>

          <p className="text-base sm:text-lg text-amber-50/90 mb-8 leading-relaxed max-w-2xl">
            Разрабатываем полную проектную документацию для объектов любой
            сложности — от квартир до промышленных предприятий. Учитываем все
            требования по безопасности, нагрузкам и энергоэффективности.
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-xl font-semibold text-white text-base transition-all shadow-md hover:shadow-lg active:scale-95">
            <span>Связаться с нами</span>
            <img src={arrowRight} alt="ArrowRighticon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Решаем любые задачи электромонтажа с помощью профессиональных решений
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Проектирование систем электроснабжения",
              text: "Разрабатываем полную проектную документацию для объектов любой сложности — от квартир до промышленных предприятий. Учитываем все требования по безопасности, нагрузкам и энергоэффективности.",
            },
            {
              title: "Монтаж и подключение оборудования",
              text: "Выполняем монтаж электрощитов, прокладку кабельных линий, установку освещения и розеток. Работаем по утверждённым схемам, соблюдая все нормы ПУЭ и ГОСТ.",
            },
            {
              title: "Пусконаладка и проверка системы",
              text: "Проводим тестирование и настройку оборудования, измеряем сопротивление изоляции, проверяем заземление и автоматические выключатели. Гарантируем безопасный и стабильный запуск системы.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
          <img
            src={corporateMan}
            alt="Электромонтажник за работой"
            className="shadow-md object-cover w-full h-[350px] rounded-xl"
          />

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-1 flex items-center">
                ✅ Задача
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Заказчику требовалось полностью обновить электроснабжение
                производственного помещения: заменить старые кабельные трассы,
                установить современный распределительный щит и обеспечить
                бесперебойную работу оборудования с высоким энергопотреблением.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1 flex items-center">
                ✅ Решение
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Наша команда провела диагностику сети, разработала проект
                электроснабжения и выполнила полный цикл монтажных работ.
                Установлены современные автоматы защиты, выполнена разводка
                кабеля с учётом будущих нагрузок и резервов мощности.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1 flex items-center">
                ✅ Результат
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Объект сдан в срок, система прошла все проверки и тесты.
                Заказчик получил безопасную, надёжную и энергоэффективную
                электросеть с возможностью расширения. Мы предоставили полную
                документацию и гарантию на работы.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl mt-8 mb-2">Наш подход</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Мы работаем «под ключ»: от анализа и проектирования до монтажа и
                сдачи объекта. Используем только сертифицированные материалы и
                оборудование, уделяем особое внимание безопасности и качеству.
                Наша цель — обеспечить надёжное электроснабжение и комфорт на
                долгие годы.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-20 mt-10">
          <div className="flex flex-col items-center space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center w-full">
              <img
                src={schit4}
                alt="Проект верхний левый"
                className="w-full h-60 object-cover shadow-md rounded-xl"
              />

              <div className="bg-white shadow-md px-6 py-6 text-center border border-gray-200 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Проект: Электроснабжение производственного цеха
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Полная модернизация сети, установка нового щитового
                  оборудования, освещение и системы автоматики.
                </p>
              </div>

              <img
                src={suxie6}
                alt="Проект верхний правый"
                className="w-full h-60 object-cover shadow-md rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <img
                src={maslotrans7}
                alt="Проект нижний 1"
                className="w-full h-48 object-cover shadow-md rounded-xl"
              />
              <img
                src={potolok5}
                alt="Проект нижний 2"
                className="w-full h-48 object-cover shadow-md rounded-xl"
              />
              <img
                src={podstanc8}
                alt="Проект нижний 3"
                className="w-full h-48 object-cover shadow-md rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
