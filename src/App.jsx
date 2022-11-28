import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/Pages/MainPage'
import MoviePage from './Components/Pages/MoviePage'
import TVPage from './Components/Pages/TVPage'
import CreditPage from './Components/Pages/CreditPage'
import CreditDetailPage from './Components/Pages/CreditDetailPage'
import UserPage from './Components/Pages/UserPage'
import SearchPage from './Components/Pages/SearchPage'
import AdministratorPage from './Components/Pages/AdministratorPage'
import SubHeader from './Components/Organisms/SubHeader'
import { useEffect, useState } from 'react'
import MainHeader from './Components/Organisms/MainHeader'

function App() {
    const [loginStatus, setLoginStatus] = useState(false)

    async function setGlobalLoginStatus(status) {
        setLoginStatus(status)
    }

    const preventClose = (e) => {
        e.preventDefault()
        e.returnValue = ''
    }

    useEffect(() => {
        ;(() => {
            window.addEventListener('beforeunload', preventClose)
        })()

        return () => {
            window.removeEventListener('beforeunload', preventClose)
        }
    }, [])

    return (
        <>
            <SubHeader />
            <BrowserRouter>
                <MainHeader loginStatus={loginStatus} setGlobalLoginStatus={setGlobalLoginStatus} />
                <Routes>
                    <Route path='/' element={<MainPage loginStatus={loginStatus} />} />
                    <Route path='/movie' element={<MoviePage loginStatus={loginStatus} />} />
                    <Route path='/movie/:genre' element={<MoviePage loginStatus={loginStatus} />} />
                    <Route path='/tv' element={<TVPage loginStatus={loginStatus} />} />
                    <Route path='/tv/:genre' element={<TVPage loginStatus={loginStatus} />} />
                    <Route path='/credit' element={<CreditPage />} />
                    <Route path='/credit/:id' element={<CreditDetailPage />} />
                    <Route path='/user' element={<UserPage loginStatus={loginStatus} />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/admin' element={<AdministratorPage loginStatus={loginStatus} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
