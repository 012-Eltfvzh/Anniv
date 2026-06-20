import Hero from "./components/Hero";
import LoveCounter from "./components/LoveCounter";
import Timeline from "./components/Timeline";
import MessageBox from "./components/MessageBox";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white overflow-hidden">
      <Hero />
      <LoveCounter />
      <Timeline />
      <MessageBox />
    </main>
  );
}