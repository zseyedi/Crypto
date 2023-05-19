
function Coin(props) {
    const {image,name,symbol,price,market_cap,price_change_percentage_24h}=props;
  return (
    <div className="flex items-center gap-12 justify-around px-6 py-4  ">
        <img className="w-12  m-2" src={image} alt="name"/>
        <span className="w-28 p-4 text-sm font-bold">{name}</span>
        <span className="w-12 p-4 text-slate-700">{symbol.toUpperCase()}</span>
        <span className="w-28 p-4">${price}</span>
        <span className={ "w-28 p-4 font-semibold " + (Number(price_change_percentage_24h) > 0 ? "text-green-500" : "text-red-500")}>{price_change_percentage_24h}%</span>
        <span className="w-32 p-4">{market_cap.toLocaleString()}</span>
        
        
    </div>
  )
}

export default Coin