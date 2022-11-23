import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/Pages/MainPage'
import MoviePage from './Components/Pages/MoviePage'
import TVPage from './Components/Pages/TVPage'
import CreditPage from './Components/Pages/CreditPage'
import CreditDetailPage from './Components/Pages/CreditDetailPage'
import UserPage from './Components/Pages/UserPage'
import SearchPage from './Components/Pages/SearchPage'
import SubHeader from './Components/Organisms/SubHeader'

function App() {
    return (
        <>
            <SubHeader />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/movie' element={<MoviePage />} />
                    <Route path='/movie/:genre' element={<MoviePage />} />
                    <Route path='/tv' element={<TVPage />} />
                    <Route path='/tv/:genre' element={<TVPage />} />
                    <Route path='/credit' element={<CreditPage />} />
                    <Route path='/credit/:id' element={<CreditDetailPage />} />
                    <Route path='/user' element={<UserPage />}></Route>
                    <Route path='/search' element={<SearchPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
