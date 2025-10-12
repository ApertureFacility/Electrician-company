

function CorporateSection() {
  return (
    <section className="flex gap-12 flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-[250px] py-16 max-w-7xl mx-auto">

    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Корпоративная ответственность
      </h2>
      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
        Рыбатекст используется дизайнерами, проектировщиками и
        фронтендерами, когда нужно быстро заполнить макеты или
        прототипы содержимым. Этот текстовый контент, который не
        должен нести никакого смысла, лишь показать наличие
        самого текста или продемонстрировать типографику в деле.
      </p>
    </div>
    
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/src/assets/corporateMan.png"
        alt="Корпоративная ответственность"
        className="rounded-lg shadow-lg max-h-[400px] object-contain"
      />
    </div>
    </section>
  )
}

export default CorporateSection