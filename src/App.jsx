import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage'
import MoviePage from './Components/Pages/MoviePage'
import MoviePageDetail from './Components/Pages/MoviePageDetail'
import TVPage from './Components/Pages/TVPage'
import PersonPage from './Components/Pages/PersonPage'
import PersonPageDetail from './Components/Pages/PersonPageDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
                <Route path="/movie/:id" element={<MoviePageDetail/>}/>
                <Route path="/tv" element={<TVPage/>}/>
                <Route path="/person" element={<PersonPage/>}/>
                <Route path="/person/:id" element={<PersonPageDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
