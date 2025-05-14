import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/get-data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Арбитражные Связки</h1>
      <div className="grid gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow">
            <div className="font-semibold text-lg">{item.pair}</div>
            <div>{item.exchange_from} → {item.exchange_to}</div>
            <div className="text-green-400">{item.profit_percent}% прибыли</div>
            <div>Объём: ${item.volume_usd}</div>
            <div className="flex gap-2 mt-2">
              <a href={`https://www.${item.exchange_from.toLowerCase()}.com/token/${item.token_slug_from}`} target="_blank" rel="noreferrer" className="underline text-blue-400">{item.exchange_from}</a>
              <a href={`https://www.${item.exchange_to.toLowerCase()}.com/token/${item.token_slug_to}`} target="_blank" rel="noreferrer" className="underline text-blue-400">{item.exchange_to}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}