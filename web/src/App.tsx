import { useState, useEffect } from 'react';
import { GameBanner } from './components/GameBanner';
import logo from './assets/logo-nlw-esports.svg';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export default function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);


  return (
    <div
      className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img
        src={logo}
        alt="Logo" />
      <h1
        className="text-6xl text-white font-black mt-20">
        Seu<span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}              
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              link={`/games/${game.id}`}
            />
          )
        })}       

      </div>
      <CreateAdBanner />
    </div>
  )
}


