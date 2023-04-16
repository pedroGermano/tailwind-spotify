import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
 
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/30 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition"
            >
              <Image src="/maiden.jpg" width={104} height={104} alt="capa" />
              <strong>Killers</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-0.5
                rounded-full bg-green-400 text-black ml-auto mr-8 invisible 
                group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition"
            >
              <Image src="/maiden.jpg" width={104} height={104} alt="capa" />
              <strong>Killers</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-0.5
                rounded-full bg-green-400 text-black ml-auto mr-8 invisible 
                group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition"
            >
              <Image src="/maiden.jpg" width={104} height={104} alt="capa" />
              <strong>Killers</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-0.5
                rounded-full bg-green-400 text-black ml-auto mr-8 invisible 
                group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition"
            >
              <Image src="/maiden.jpg" width={104} height={104} alt="capa" />
              <strong>Killers</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-0.5
                rounded-full bg-green-400 text-black ml-auto mr-8 invisible 
                group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition"
            >
              <Image src="/maiden.jpg" width={104} height={104} alt="capa" />
              <strong>Killers</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-0.5
                rounded-full bg-green-400 text-black ml-auto mr-8 invisible 
                group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden"
            >
              <Image src="/maiden.jpg" width={104} height={104} alt="capa" />
              <strong>Killers</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-0.5
                rounded-full bg-green-400 text-black ml-auto mr-8 invisible 
                group-hover:visible"
              >
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Pedro Germano
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/maiden.jpg"
                width={120}
                height={120}
                alt="capa"
              />
              <strong className="font-semibold">Daily Mix 1 </strong>
              <span className="text-sm text-zinc-500">Iron Maiden Killers</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/maiden.jpg"
                width={120}
                height={120}
                alt="capa"
              />
              <strong className="font-semibold">Daily Mix 1 </strong>
              <span className="text-sm text-zinc-500">Iron Maiden Killers</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/maiden.jpg"
                width={120}
                height={120}
                alt="capa"
              />
              <strong className="font-semibold">Daily Mix 1 </strong>
              <span className="text-sm text-zinc-500">Iron Maiden Killers</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/maiden.jpg"
                width={120}
                height={120}
                alt="capa"
              />
              <strong className="font-semibold">Daily Mix 1 </strong>
              <span className="text-sm text-zinc-500">Iron Maiden Killers</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/maiden.jpg"
                width={120}
                height={120}
                alt="capa"
              />
              <strong className="font-semibold">Daily Mix 1 </strong>
              <span className="text-xs text-zinc-500">Iron Maiden Killers</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />      
    </section>
  );
}
