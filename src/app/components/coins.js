import React, { useEffect, useState } from "react";

export default function GetCoins() {
  const coins_url = "https://api.coinlore.com/api/tickers/";
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchInfo = () => {
    return fetch(coins_url)
      .then((res) => res.json())
      .then((d) => setData(d.data || [])); // Use an empty array if 'data' is not available
  }

  useEffect(() => {
    const filteredResults = data.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    setSearchResults(filteredResults)
  }, [searchTerm, data]);

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <main>
      <input
        type="text"
        placeholder="Search"
        className="p-4 w-full h-20 text-green-500 lg:text-4xl md:text-4xl sm:text-2xl max-sm:text-xl border-b outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table-auto w-full md:table-fixed max-sm:table-auto max-sm:text-sm">
        {(searchTerm ? searchResults : data).map((val) => (
          <tbody key={val.id}>
            <tr className='border-b hover:bg-gray-100' >
                <td className=' text-sm pl-4 border-r'><a href={`http://www.google.com/search?q=${val.name} cryptocurrency`} className='hover:text-green-500 lg:text-4xl md:text-4xl sm:text-2xl max-sm:text-xl'>{val.name}</a></td>
                <td className='text-black lg:text-4xl align-middle border-r md:text-4xl sm:text-2xl max-sm:text-xl pl-4'>${val.price_usd}</td> 
                <td className='pl-4 p-2 text-sm align-middle md:text-4xl lg:text-4xl sm:text-2xl max-sm:text-xl'>{val.percent_change_24h > 0 ? <span className='text-[#248a3e]'>{val.percent_change_24h}%</span> : <span className='text-[#d70015]'>{val.percent_change_24h}%</span>}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
}
