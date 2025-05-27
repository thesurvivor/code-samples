"use client";
import useMousePosition from "@/app/hooks/useMousePosition";

export default function Home() {
  const { x, y } = useMousePosition();
  return (
    <div className="">
      <div className="p-10">
        <h1 className="text-3xl font-bold">Anasayfa</h1>
        <p className="text-lg text-gray-700">Merhaba bu benim portföy sitem</p>
      </div>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Mouse Position</h1>
        <p className="text-lg text-gray-700">
          Mouse Position: x: {x}, y: {y}
        </p>
      </div>
    </div>
  );
}
