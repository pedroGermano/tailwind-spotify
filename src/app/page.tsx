import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react';
import Image from 'next/image';


export default function Home(){
  return(
    <section className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          
          <nav className='space-y-5 mt-10'>
            <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              You Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">Rock Nacional</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">Heavy Metal</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">Hard Core</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="#">Power Metal</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft  />
            </button>
            <button className='rounded-full bg-black/30 p-1'>
              <ChevronRight  />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/maiden.jpg" width={104} height={104} alt='capa'/>
              <strong>Killers</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8'>
                  <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/maiden.jpg" width={104} height={104} alt='capa'/>
              <strong>Killers</strong>
            </a>
            <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/maiden.jpg" width={104} height={104} alt='capa'/>
              <strong>Killers</strong>
            </a>
            <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/maiden.jpg" width={104} height={104} alt='capa'/>
              <strong>Killers</strong>
            </a>
            <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/maiden.jpg" width={104} height={104} alt='capa'/>
              <strong>Killers</strong>
            </a>
            <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/maiden.jpg" width={104} height={104} alt='capa'/>
              <strong>Killers</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </section>
  )
}