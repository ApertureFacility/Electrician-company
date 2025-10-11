import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  phone: string;
}

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1000));
    reset();
    alert("Спасибо! Мы скоро с вами свяжемся.");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-transparent">
      <div className="absolute inset-0 " />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 w-[360px] sm:w-[400px] p-6 rounded-2xl  border border-white/30 text-white"
      >
        <h2 className="text-2xl font-semibold mb-2">Написать нам</h2>
        <p className="text-sm text-gray-200 mb-6">
          Заполните форму и в течение 15 минут с вами свяжется наш специалист
        </p>

        <input
          placeholder="Ваше имя"
          {...register("name", { required: "Введите имя" })}
          className="block w-full mb-4 p-3 text-gray-900 placeholder-gray-400 rounded-xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mb-2">{errors.name.message}</p>
        )}

        <input
          placeholder="Ваш телефон"
          {...register("phone", {
            required: "Введите телефон",
            pattern: {
              value: /^[0-9+\-\s()]+$/,
              message: "Введите корректный номер телефона",
            },
          })}
          className="block w-full mb-6 p-3 text-gray-900 bg-amber-50 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mb-2">{errors.phone.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-xl py-3 font-semibold transition-all ${
            isSubmitting
              ? "bg-blue-600 opacity-70 cursor-not-allowed"
              : "bg-[#0047FF] hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Отправка..." : "Получить консультацию"}
        </button>
      </form>
    </div>
  );
}
