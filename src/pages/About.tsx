import { Link } from "react-router-dom";
import CorporateSection from "../components/CorporateSection";
import RealizeSection from "../components/RealizeSection";
import arrowIcon from '/src/assets/arrowRighticon.png';

function About() {
  const timeline = [
    {
      year: "2020–2023",
      text: "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно",
    },
    {
      year: "2008–2020",
      text: "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно",
    },
    {
      year: "2001–1008",
      text: "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно",
    },
    {
      year: "1995–1991",
      text: "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно",
    },
    {
      year: "1988–1991",
      text: "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно",
    },
  ];

  return (
    <>
      <section className=" bg-white relative ">
      <div className="grid py-20 px-4 sm:px-8 lg:px-[250px] grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[url('/src/assets/Smilingabout.png')] bg-cover bg-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-amber-50">
              Готовые решения от РСЭМ
            </h2>
            <p className="text-base sm:text-lg text-amber-50 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iure
              atque dicta at consequuntur nemo similique aut praesentium nisi
              doloribus?
            </p>
            <button className="flex items-center gap-2 w-full sm:w-auto bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold text-white transition-colors">
            <Link to="/solutions"><span>Перейти к решениям</span></Link>
              <img
                src={arrowIcon}
                alt="ArrowRighticon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-2 text-centerpy-20">
            История компании РСЭМ насчитывает более 15 лет успешной работы
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Основные этапы развития компании:
          </p>

          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-700 h-full"></div>

            <div className="flex flex-col space-y-16 relative">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex md:items-center relative ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
    
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`bg-gray-50 p-6 rounded-2xl shadow-md ${
                        index % 2 === 0
                          ? "text-right md:ml-auto"
                          : "text-left md:mr-auto"
                      }`}
                    >
                      <h3 className="text-blue-700 font-semibold text-lg mb-2">
                        {item.year}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-700 rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CorporateSection />
      <RealizeSection />
    </>
  );
}

export default About;
