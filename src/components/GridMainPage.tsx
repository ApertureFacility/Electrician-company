import svetilniki from "../assets/svetilniki3.png";
import suhie from "../assets/suhie6.png";
import schit from "../assets/schit4.png";
import schina from "../assets/schina2.png";
import problems from "../assets/Problems1.png";
import potolok from "../assets/potolok5.png";
import podstanc from "../assets/podstanc8.png";
import maslotrans from "../assets/maslotrans7.png";
import lotki from "../assets/lotki9.png";

function GridMainPage() {
  return (
    <div className="container mx-auto p-4 px-4 sm:px-6 md:px-10 lg:px-[250px] space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={svetilniki}
            alt="Светильники"
            className="w-full h-48 object-cover"
          />
          <div className="p-2 text-center font-medium">Светильники</div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={suhie} alt="Сухие" className="w-full h-48 object-cover" />
          <div className="p-2 text-center font-medium">Сухие трансформаторы</div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={schit} alt="Щит" className="w-full h-48 object-cover" />
          <div className="p-2 text-center font-medium">Щитовые</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={schina} alt="Шина" className="w-full h-48 object-cover" />
          <div className="p-2 text-center font-medium">Шинопроводы</div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={problems}
            alt="Проблемы"
            className="w-full h-48 object-cover"
          />
          <div className="p-2 text-center font-medium">Релейная защита</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={potolok}
            alt="Потолок"
            className="w-full h-48 object-cover"
          />
          <div className="p-2 text-center font-medium">Потолочные системы</div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={podstanc}
            alt="Подстанция"
            className="w-full h-48 object-cover"
          />
          <div className="p-2 text-center font-medium">Подстанции</div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={maslotrans}
            alt="Маслотранс"
            className="w-full h-48 object-cover"
          />
          <div className="p-2 text-center font-medium">Маслянные трансформаторы</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={lotki} alt="Лотки" className="w-full h-48 object-cover" />
          <div className="p-2 text-center font-medium">Лотки</div>
        </div>
        <div className="bg-blue-500 text-white flex items-center justify-center rounded-lg h-48 text-xl font-bold">
          Хотите связаться?
        </div>
      </div>
    </div>
  );
}

export default GridMainPage;
