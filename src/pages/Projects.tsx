import  { useEffect, useState, type JSX } from "react";


type Project = {
  id: number;
  title: string;
  category: "All" | "Industrial" | "Commercial" | "Renovation";
  image: string;
  thumb?: string;
  description?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Электроснабжение цеха",
    category: "Industrial",
    image: "/src/assets/schit4.png",
    description: "Полная модернизация сети, новые щитовые и автоматика.",
  },
  {
    id: 2,
    title: "Сухие помещения — монтаж",
    category: "Commercial",
    image: "/src/assets/suhie6.png",
    description: "Монтаж и подключение осветительных групп.",
  },
  {
    id: 3,
    title: "Маслотранс трансформатор",
    category: "Industrial",
    image: "/src/assets/maslotrans7.png",
    description: "Установка трансформаторного оборудования и защит.",
  },
  {
    id: 4,
    title: "Подстанция 8",
    category: "Industrial",
    image: "/src/assets/podstanc8.png",
    description: "Поставка и монтаж подстанции, комплексная проверка.",
  },
  {
    id: 5,
    title: "Новый потолок с подсветкой",
    category: "Renovation",
    image: "/src/assets/potolok5.png",
    description: "Реконструкция освещения и инженерных трасс.",
  },
];

export default function Projects(): JSX.Element {
  const [active, setActive] = useState<"All" | "Industrial" | "Commercial" | "Renovation">("All");
  const [visible, setVisible] = useState<Project[]>(projectsData);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (active === "All") {
      setVisible(projectsData);
    } else {
      setVisible(projectsData.filter((p) => p.category === active));
    }
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      <section className="relative w-full h-[340px] sm:h-[380px] md:h-[480px] bg-[url('/src/assets/elo.webp')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex items-center h-full px-6 sm:px-12 lg:px-40">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Наши проекты</h1>
            <p className="text-sm sm:text-base text-white/90">
              Реализованные объекты — от коммерческих помещений до промышленных цехов.
            </p>
          </div>
        </div>
      </section>


      <section className="py-12 px-4 sm:px-8 lg:px-40 bg-white">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            {(["All", "Industrial", "Commercial", "Renovation"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition 
                  ${active === c ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {c === "All" ? "Все" : c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm">Найдено:</span>
            <div className="text-gray-900 font-semibold">{visible.length}</div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visible.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelected(p)}
              aria-label={`Открыть проект ${p.title}`}
            >
              <div className="w-full h-48 bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{p.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{p.category}</div>
                <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
              </div>
            </article>
          ))}
        </div>


        {visible.length === 0 && (
          <div className="mt-12 text-center text-gray-600">Проекты не найдены в этой категории.</div>
        )}
      </section>


      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
              aria-label="Закрыть"
            >
              ✕
            </button>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="w-full h-[60vh] md:h-[70vh] bg-gray-200">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selected.title}</h3>
                <div className="text-sm text-gray-500 mb-4">{selected.category}</div>
                <p className="text-gray-700">{selected.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
