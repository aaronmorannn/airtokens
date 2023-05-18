'use client'
import React from 'react';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      dataSource: null,
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
            <span className=' pl-2 pr-2 text-green-500 font-semibold'>${val.price_usd}</span> 
          </h1>
          </div>
      });

    return (
      <main >
        <h1 className='text-center bg-stone-100 font-white p-2 pb-2 font-semibold text-black'>Top 100 Cryptocurrencies  
          <span class="relative h-3 w-3 pl-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 pl-2"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500 pl-2"></span>
          </span>
        </h1>
        <div className='flex items-center justify-center pt-8'>
          <p>{coins}</p>
        </div>
      </main>
      
    );
    }
  }
}
