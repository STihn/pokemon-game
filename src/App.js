import { useState } from "react";
import { HomePage } from './routes/Home/HomePage';
import { GamePage } from "./routes/Game";

export const App = () => {
  const [page, setPage] = useState('home');

  const handleChangePage = (page) => {
    console.log('handleChangePage')
    setPage(page)
  }

  switch (page) {
    case 'home':
      return <HomePage onClick={handleChangePage}/>
    case 'game':
      return <GamePage/>
    default:
      return <HomePage/> 
  }
}