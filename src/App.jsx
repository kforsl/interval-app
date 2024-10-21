import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import StartPage from "./pages/startPage/StartPage";
import SetPage from "./pages/setPage/SetPage";
import TimerPage from "./pages/timerPage/TimerPage";
import TimesUpPage from "./pages/timesUpPage/TimesUpPage";
import BreakPage from "./pages/breakPage/BreakPage";

function App() {
    const location = useLocation();
    return (
        <main className='app'>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<StartPage />} />
                    <Route path='/set' element={<SetPage />} />
                    <Route path='/timer' element={<TimerPage />} />
                    <Route path='/done' element={<TimesUpPage />} />
                    <Route path='/break' element={<BreakPage />} />
                </Routes>
            </AnimatePresence>
        </main>
    );
}

export default App;
