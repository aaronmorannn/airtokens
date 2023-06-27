"use client";
import '../globals.css'
import Image from 'next/image'
import Head from 'next/head'

export default function Trending() {
  return (
    <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <Head>
        <title>Graveyard - Air Tokens</title>
      </Head>
      <div className='items-center text-center'>
        <p className='p-2 text-6xl'>🪦</p>
      </div>

      <div class="grid grid-cols-4 gap-4 pt-8 max-sm:grid-cols-1 max-md:grid-cols-2">
        <div className='bg-slate-100 p-4 rounded-md'>
          <Image src='/ftx.png' height={150} width={150}/>
          <p className='text-sm'><strong>Name:</strong> FTX Trading Ltd</p>
          <p className='text-sm'><strong>Time of Death:</strong> November 2022</p>
          <MyModal/>
          
        </div>
      </div>
      
    </main>
  )
}

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

 function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className='pt-2'>
        <button
          onClick={openModal}
          className='text-white p-1 rounded-md text-sm bg-slate-500 hover:bg-slate-600'
        >
          Cause of Death
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    FTX
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    FTX is a company that formerly operated a cryptocurrency exchange and crypto hedge fund. It was founded in 2019 by Sam Bankman-Fried and Gary Wang. However, in November 2022, FTX filed for bankruptcy and its chief executive, Sam Bankman-Fried, resigned. This happened after its rival and the worlds largest crypto exchange, Binance, pulled out of a deal to acquire the company.
                    <br/><br/>
                    The current CEO of FTX is John J. Ray III, who specializes in recovering funds from failed corporations. Speaking of its previous management, Ray stated: &quot;Never in my career have I seen such a complete failure of corporate controls and such a complete absence of trustworthy financial information as occurred here.&quot; He added that &quot;this situation is unprecedented.&quot;
                    <br/><br/>
                    <br/>
                    FTX - Wikipedia. <a className='text-blue-500' href="https://en.wikipedia.org/wiki/FTX">https://en.wikipedia.org/wiki/FTX</a>.<br/>
                    (2) Why Did FTX Collapse? What to Know. - The New York Times. <a  className='text-blue-500' href="https://www.nytimes.com/2022/11/10/technology/ftx-binance-crypto-explained.html">https://www.nytimes.com/2022/11/10/technology/ftx-binance-crypto-explained.html</a>.<br/>
                    (3) FTX: An Overview of the Exchange and Its Collapse - Investopedia. <a  className='text-blue-500' href="https://www.investopedia.com/ftx-exchange-5200842">https://www.investopedia.com/ftx-exchange-5200842</a>.<br/>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Thanks, bye
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
