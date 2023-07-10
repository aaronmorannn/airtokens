"use client"
import { Disclosure } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-md px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className='pt-2 max-sm:pb-2 flex '>
                  <a href="/"><span class="relative flex h-5 w-5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                  </span></a>
                  <p className='align-middle pl-4 text-sm text-slate-500'>AirTokens</p>
                </div>
              </div>

            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}
