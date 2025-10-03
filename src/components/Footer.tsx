import logo from '/src/assets/headerLogo.png';

const services = ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4"];
const solutions = ["Решение 1", "Решение 2", "Решение 3", "Решение 4"];
const contacts = [
  "📞 +7 (495) 9299 88 77",
  "📍 Московская область, г. Могинск, ул. Лесная, дом 21322",
  "✉️ info@rsoaa-natag.vu"
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        

        <div className="col-span-1 md:col-span-2">
          <img src={logo} alt="РСЭМ" className="h-10 mb-4" />
          <p className="text-sm">Электротехнические работы полного цикла</p>
        </div>


        <div>
          <h4 className="font-semibold mb-3">Услуги</h4>
          <ul className="space-y-2 text-sm">
            {services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="font-semibold mb-3">Решения</h4>
          <ul className="space-y-2 text-sm">
            {solutions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="font-semibold mb-3">Контакты</h4>
          <ul className="space-y-2 text-sm">
            {contacts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © 2025 РСМ. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
