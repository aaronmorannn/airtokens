import '../globals.css'

export default function Blog() {
  return (
    <main className='bg-stone-100 h-screen'>
        <h1 className='text-center bg-white font-white p-2 pb-2 font-semibold text-black'>Air Tokens Blog 
          <span class="relative h-3 w-3 pl-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 pl-2"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500 pl-2"></span>
          </span>
        </h1>
        
        <div className='items-center justify-center flex pt-8'>
            <div className="grid grid-cols-1 w-1/2 max-sm:w-4/5">
                <a href="/"><div class="bg-white  rounded-md outline outline-white hover:outline-blue-500 h-max p-8">
                    <span class="relative inline-flex align-middle rounded-full h-4 w-4 bg-green-500 pb-4 pl-8"></span>
                    <p className='text-xl align-baseline pt-4 max-sm:text-sm'>The Dangers of Cryptocurrency: Staying Safe and Keeping Informed for Complete Beginners</p>
                </div>
                </a>
            </div> 
        </div>
        
    </main>
  )
}
