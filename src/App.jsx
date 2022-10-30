import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage'
import MoviePageTemplate from './Components/Templates/MoviePageTemplate'
import MoviePageDetailTemplate from './Components/Templates/MoviePageDetailTemplate'
import TVPageTemplate from './Components/Templates/TVPageTemplate'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/movie" element={<MoviePageTemplate />}></Route>
                <Route path="/movie/:id" element={<MoviePageDetailTemplate />}></Route>
                <Route path="/tv" element={<TVPageTemplate />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
