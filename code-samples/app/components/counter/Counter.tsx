"use client"; // App Router kullanıyorsan gerekli

import { useEffect, useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log("🟢 Component MOUNT edildi");

    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    setIntervalId(interval);

    return () => {
      clearInterval(interval); // Temizlik: sayaç durdurulur
    };
  }, []);

  const handleReset = () => {
    setCount(0);
    setIsPaused(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setIntervalId(interval);
  };

  const handlePause = () => {
    if (!isPaused) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setIsPaused(true);
    } else {
      const interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
      setIntervalId(interval);
      setIsPaused(false);
    }
  };

  const buttonText = isPaused ? "Devam Et" : "Duraklat";


  return (
    <div className="text-center text-xl mt-10">
      <h1 className="text-3xl font-bold">Sayaç</h1>
      <p className="mt-4">Sayaç Değeri: {count}</p>
      <div className="flex gap-6 items-center">
          <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={handleReset}
      >
        Sıfırla
      </button>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
        onClick={handlePause}
      >
        {buttonText}
      </button>
      </div>
    </div>
  );
}
