import "./globals.css";
import {InputForm} from "./PartyCodeInput"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-500 p-4">
      <h1 className="text-5xl font-bold text-white mb-8">PingMe</h1>
      <InputForm />
    </div>
  );
}

