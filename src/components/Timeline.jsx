const events = [
  {
    date: "Awal Kita",
    desc: "Dulu aku sering dicuekin / gak digubris 😭 tapi ya lihat sekarang… malah kamu yang jadi rumah aku."
  },
  {
    date: "21 Juni 2024",
    desc: "Hari kita resmi bareng 💖 jujur ini salah satu keputusan terbaik di hidup aku. Dari sini semuanya mulai berasa beda, lebih hangat, lebih punya arah."
  },
  {
    date: "Hari-Hari Bareng Kamu",
    desc: "Kita udah lewat banyak hal bareng, dari yang seneng banget sampai berantem kecil yang gak penting. Tapi anehnya, aku tetep milih kamu lagi dan lagi."
  },
  {
    date: "Sekarang & Seterusnya",
    desc: "Anniversary ini bukan akhir, tapi reminder kalau aku masih mau kamu di hari-hari aku. Semoga kita gak cuma sampai sini aja, tapi lanjut terus bareng sampai nanti."
  }
];

export default function Timeline() {
  return (
    <section className="px-5 py-14">

      <h2 className="text-center text-3xl font-bold text-pink-500 mb-8">
        🌸 Our Journey
      </h2>

      <div className="space-y-5">

        {events.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-5 shadow-lg border border-pink-100"
          >
            <h3 className="text-xl font-bold text-pink-500">
              {item.date}
            </h3>

            <p className="mt-2 text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}