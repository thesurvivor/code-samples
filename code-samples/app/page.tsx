
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-stretch justify-center gap-8 border-2 border-gray-300 rounded-sm bg-white [:nth-child(odd)]:border-l-2 [:nth-child(odd)]:border-gray-300">
        <div className="flex flex-col items-center p-8">
          <h2>Sayaç Uygulaması</h2>
          <Link href="/counter">
          <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded">
            Sayaç Uygulamasına Git
          </button>
        </Link>
        </div>
        <div className="flex flex-col items-center p-8">
          <h2>Routing Uygulaması</h2>
          <Link href="/routing">
          <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded">
            Routing Uygulamasına Git
          </button>
        </Link>
        </div>
      </main>

    </div>
  );
}
