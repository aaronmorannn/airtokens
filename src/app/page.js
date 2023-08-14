'use client'
import React from 'react';

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
          <h1 className=''>
            <span className='bg-sky-100 rounded p-1 font-semibold'>{val.rank}</span> 
            <a href={`http://www.google.com/search?q=${val.name} cryptocurrency`} className='underline font-semibold pl-4 pr-2 hover:text-blue-500 underline-offset-4'>{val.name}</a> 
            <span className='text-gray-500 font-semibold pl-2 pr-2'>({val.symbol}) </span>
            <span className=' pl-2 pr-2 font-semibold'>${val.price_usd}</span> 
            <span>{val.percent_change_24h > 0 ? <span className='text-green-500'>{val.percent_change_24h}</span> : <span className='text-red-500'>{val.percent_change_24h}</span>}</span>
          </h1>
          
          </div>
      });

    return (
      <main className='flex p-4 pb-2 max-sm:p-4 pt-6'>
        <table class="table-auto md:table-fixed max-sm:table-auto max-sm:text-sm">
          <tbody>
            {
              this.state.dataSource.map((val,key) =>{
                return <tr className='' key={key}>
                  <td className='font-medium text-sm '><a href={`http://www.google.com/search?q=${val.name} cryptocurrency`} className='hover:text-green-500 lg:text-6xl md:text-4xl sm:text-2xl max-sm:text-xl hover:underline hover:underline-offset-4'>{val.name}</a></td>
                  <td className='font-normal lg:text-6xl align-middle md:text-4xl sm:text-2xl max-sm:text-xl'>${val.price_usd}</td> 
                  <td className='pl-4 p-2 text-sm align-middle md:text-4xl lg:text-6xl sm:text-2xl max-sm:text-xl'>{val.percent_change_24h > 0 ? <span className='text-[#248a3e]'>{val.percent_change_24h}%</span> : <span className='text-[#d70015]'>{val.percent_change_24h}%</span>}</td>
                </tr>
              })
            }
          </tbody>
        </table>     
      </main>
    );
    }
  }
}