"use client"
import { Disclosure } from '@headlessui/react'

export default function Example() {
  return (
    <Disclosure as="nav" className="sticky top-0 bg-white p-1 bg-opacity-80 backdrop-blur-lg backdrop-filter border-b">
      {({ open }) => (
        <>
          <div className=" mx-auto pb-7">
            <div className=" flex h-4 pt-2">
              <div className="flex flex-1">
                <div className='max-sm:pb-2 pl-4 flex '>
                  <a href="/"><span class="relative flex h-5 w-5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                  </span></a>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}
