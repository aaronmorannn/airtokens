"use client"
import Link from 'next/link'

export default function Navbar() {
  return (
    <div as="nav" className="sticky top-0 bg-white p-1 bg-opacity-80 backdrop-blur-lg backdrop-filter border-b">
      <div className="mx-auto pb-7">
        <div className="flex h-4 pt-2">
          <div className="max-sm:pb-2 pl-4 flex">
            <Link href="/" className='pr-4'>
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
