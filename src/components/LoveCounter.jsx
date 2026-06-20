import { useEffect, useState } from "react";

export default function LoveCounter() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const start = new Date("2024-06-21");

    const update = () => {
      const now = new Date();
      const diff = now - start;

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff / 3600000) % 24,
        minutes: Math.floor(diff / 60000) % 60
      });
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-5 py-14">

      <h2 className="text-center text-3xl font-bold text-pink-500 mb-8">
        💖 Love Counter
      </h2>

      <div className="grid grid-cols-3 gap-3">

        <div className="bg-white rounded-3xl shadow-lg p-4 text-center">
          <h3 className="text-3xl font-bold text-pink-500">
            {time.days}
          </h3>
          <p>Hari</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-4 text-center">
          <h3 className="text-3xl font-bold text-pink-500">
            {time.hours}
          </h3>
          <p>Jam</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-4 text-center">
          <h3 className="text-3xl font-bold text-pink-500">
            {time.minutes}
          </h3>
          <p>Menit</p>
        </div>

      </div>
    </section>
  );
}