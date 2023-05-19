import { useEffect, useState } from "react";
import { getCoin } from "../services/api";
import Loader from "./Loader";
import Coin from "./Coin"

function Landing() {
  const [coin, setCoin] = useState([]);
  const [search,setSearch]=useState("");
  useEffect(() => {
    const fetchApi = async () => {
      setCoin(await getCoin());
    };
    fetchApi();
  }, []);
  console.log(coin);

  const searchHandler=event=>{
        setSearch(event.target.value)
  }
  const searchedCion=coin.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()));
  return (
    
      <div className="flex flex-col items-center gap-10 py-4">
        <input type="search" className="text-gray-700 outline-none p-2 rounded-md border-2 bg-slate-100 w-1/3 " value={search} placeholder="Search" onChange={searchHandler} />
        {coin.length ? (
          <div className="border-2 px-6 py-4 rounded-xl bg-slate-100">
            {searchedCion.map((coin) => (
             <Coin 
             key={coin.id}
             image={coin.image}
             name={coin.name}
             symbol={coin.symbol}
             price={coin.current_price}
             market_cap={coin.market_cap}
             price_change_percentage_24h={coin.price_change_percentage_24h}
             />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>

  );
}

export default Landing;
