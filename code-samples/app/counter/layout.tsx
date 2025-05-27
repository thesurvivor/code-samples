import Link from "next/link";


export default function SamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Link className="row-start-1 justify-self-start" href="/">Back to home</Link>
      {children}
    </div>
  );
}
