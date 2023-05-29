'use client'
import React from 'react';
import Link from 'next/link';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      dataSource: null,
      search: '',
    }
  }

  componentDidMount(){

    // Fetching API data from coinlore website and returning it to the project.
    return fetch('https://api.coinlore.com/api/tickers/')
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      })      

    })

    .catch((error) =>{
      console.log(error)
    });
  }

  render() {

    if(this.state.isLoading){
      return (
        <div></div>
      )
    } else{
      // DATA TAKES 10 SECONDS TO UPDATE
      let coins = this.state.dataSource.map((val,key) =>{
          return <div className="cryptocurrency-market" key={key}>
          <h1 className='p-2'>
            <span className='bg-sky-100 rounded p-1 font-semibold'>{val.rank}</span> 
            <a href={`http://www.google.com/search?q=${val.name} cryptocurrency`} className='underline font-semibold pl-4 pr-2 hover:text-blue-700 underline-offset-4'>{val.name}</a> 
            <span className='text-gray-500 font-semibold pl-2 pr-2'>({val.symbol}) </span>
            <span className=' pl-2 pr-2 font-semibold'>${val.price_usd}</span> 
            <span>{val.percent_change_24h > 0 ? <span className='text-green-500'>{val.percent_change_24h}</span> : <span className='text-red-500'>{val.percent_change_24h}</span>}</span>
          </h1>
          
          </div>
      });

    return (
      <main className='pb-8'>
        <ul class="flex justify-between p-2">
   
          <li class="mr-1">
            <p class="inline-block py-2 px-4 font-semibold text-black">Air Tokens
              <span class="relative h-3 w-3 pl-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 pl-2"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500 pl-2"></span>
              </span>
            </p>
          </li>
          <li class="mr-3">
            <a class="inline-block py-2 px-4 font-semibold border border-green-100 bg-green-100 hover:border hover:border-green-400 backdrop-opacity-10 rounded" href="https://www.tiktok.com/@airtokens" target='_blank'>TikTok</a>
          </li>
        </ul>

        <div className='flex justify-center pt-2'>
        {/* <form className='w-1/3 max-sm:w-2/3 max-md:w-2/3'>   
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-stone-100 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search"/>
            </div>
        </form> */}
        </div>

        <div className='flex justify-center pt-8'>
        <table class="table-auto md:table-fixed max-sm:table-auto max-sm:text-sm max-sm:p-8 ">
  
          <tbody>
            {
              this.state.dataSource.map((val,key) =>{
                return <tr className='p-4' key={key}>
                  <td  className='underline p-2 font-semibold hover:text-blue-600 underline-offset-4 pl-4'><a href={`http://www.google.com/search?q=${val.name} cryptocurrency`}>{val.name}</a></td> 
                  <td className='text-[#6c6c70] p-2 text-xs font-light pl-4'>({val.symbol}) </td>
                  <td className='font-normal pl-4 p-2'>${val.price_usd}</td> 
                  <td className='pl-4 p-2'>{val.percent_change_24h > 0 ? <span className='text-[#248a3e] '>▲{val.percent_change_24h}%</span> : <span className='text-[#d70015]'>▼{val.percent_change_24h}%</span>}</td>
                </tr>
              })
            }
          </tbody>
          </table>
          
        </div>

        <div className='flex justify-center pt-8'>
          <div>
            <Link href="https://www.tiktok.com/@airtokens" target='_blank' className='p-2 text-sm bg-slate-700 text-white rounded hover:outline hover:outline-slate-500 hover:bg-slate-500 hover:text-white font-semibold'>TikTok (420.69M) 🍏</Link>
            <p className='pt-2 italic airtokens'>omg wow airtokens</p>

          </div>
        </div>
      </main>
      
    );
    }
  }
}
