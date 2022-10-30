import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage'
import MoviePage from './Components/Pages/MoviePage'
import MoviePageDetail from './Components/Pages/MoviePageDetail'
import TVPage from './Components/Pages/TVPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
                <Route path="/movie/:id" element={<MoviePageDetail/>}/>
                <Route path="/tv" element={<TVPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
