import Image from "next/image";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Image src="/images/Profile.jpg" alt="logo" width={400} height={400} className="border border-none rounded-full max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <span className="text-3xl text-center md:text-start text-emerald-300 p-2">
          Tanish Rastogi
        </span>
        <p className="text-center md:text-start text-lg mt-2">
          Full Stack Web Developer <br />
          React | Next.js | Node.js | Express.js | MongoDB
        </p>
      </div>
    </div>
  );
}
