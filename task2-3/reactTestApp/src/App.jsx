import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { ShowButton } from './components/ShowButtons'
import { PostList } from './components/PostList';


function App() {
  const [posts, setPosts] = useState([
    {id: 2, url: "https://chel.ligarobotov.ru/wp-content/uploads/sites/9/2020/07/py.png", text: "Базовые знания питон", progress:80},
    {id: 3, url: "https://cdn.worldvectorlogo.com/logos/fastapi.svg", text: "Работал с FastAPI", progress:51},
    {id: 4, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVyIlX1IOHs3HdtYTtOeE812QiqiTcx1NasR-teW0sw&s", text: "Базовые знания C#", progress:60},
    {id: 5, url: "https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI", text: "Слабые навыки JS", progress:40},
    {id: 6, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstFIb9c2xX_tz60TZ7bIMiCSYJiKIEgQLnDv9OXYFlw&s", text: "Хотел бы : Изучить React", progress:10},
    {id: 7, url: "https://www.ishir.com/wp-content/uploads/2023/03/backend-development-languages-ISHIR.png", text: "Хотел бы : Улучшить навыки backend'а", progress:30},
    {id: 8, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdwZ9hAHzCy_5pk9Hy3p0aXjKBR6XcpuDucEKFVRR7g&s", text: "Хотел бы : Изучить Docker", progress:0},
    {id: 9, url: "https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI", text: "Хотел бы : Углубить знания JS", progress:20},
    {id: 10, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3GBKBymJTx_K-Nz_iTxZJNnhVPNgXjh0pfQgmw36KQ&s", text: "Хотел бы : Углубить знания postgreSQL", progress:15},
    {id: 11, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT727x4i5bwD4U_den_tCtBk1BcUqeOYeTTbgyoVbLcOg&s", text: "Хотел бы : Изучить Node.js", progress:0}
  ]);

  return (
    <>
      <div>
        <Card props = {{id: 1, url: "https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq", text: "Самар Андрей Александрович"}}/>
        <ShowButton posts = {posts}/>
      </div>
    </>
  )
}

export default App
