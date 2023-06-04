import { Header } from './components/Header'
import { Main } from './components/Main'
import { ContextFunction } from './context'
import { Theme } from './components/Theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharacherCard } from './components/CharacterCard'
import { Episode } from './components/Episode'

function App() {
    return (
        <ContextFunction>
            <Theme>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/:id" element={<CharacherCard />} />
                        <Route path="/episode/:id" element={<Episode />} />
                        <Route path="*" element={<h3>Nothing found</h3>} />
                    </Routes>
                </BrowserRouter>
            </Theme>
        </ContextFunction>
    )
}

export default App
