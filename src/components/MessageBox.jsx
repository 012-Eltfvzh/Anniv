import { useState } from "react";

export default function MessageBox() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 py-16 text-center">

      <button
        onClick={() => setOpen(true)}
        className="w-32 h-32 rounded-full bg-pink-500 text-6xl text-white shadow-xl active:scale-95 transition"
      >
        💌
      </button>

      <p className="mt-4 text-pink-600">
        Tap untuk membuka surat cinta
      </p>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-5">

          <div className="bg-white rounded-[30px] p-6 w-full max-w-sm">

            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Untuk Kamu 💕
            </h2>

            <div className="max-h-72 overflow-y-auto text-left text-gray-600 leading-7">
              3 tahun ya kita… gila juga sih 😭
Dari yang dulu cuma “eh lagi apa”, sekarang jadi “jangan pergi ya”.

Makasih udah nemenin aku sejauh ini, dari seneng, capek, sampai drama-drama kecil kita.

Aku gak janji kita selalu mulus, tapi aku janji bakal selalu usaha buat kamu.
Love you, always 🤍
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-full mt-5 bg-pink-500 text-white py-3 rounded-2xl"
            >
              Tutup
            </button>

          </div>

        </div>
      )}
    </section>
  );
}