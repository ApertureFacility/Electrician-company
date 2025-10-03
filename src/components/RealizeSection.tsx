import bgImage from '/src/assets/Electrobackground.jpg';
import arrowIcon from '/src/assets/arrowRighticon.png';

function RealizeSection() {
  return (
    <div
      className="relative min-h-[63vh] bg-no-repeat bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>


      <div className="relative container mx-auto px-6 sm:px-12 lg:px-[250px] flex flex-col items-start">
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 max-w-xl">
          Реализуйте свой проект вместе с РСЭМ
        </h3>

        <button className="flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg 
                           hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
          <span>К проектам</span>
          <img src={arrowIcon} alt="Arrow Right Icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default RealizeSection;
