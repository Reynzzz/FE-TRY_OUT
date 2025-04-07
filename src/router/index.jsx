import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "../components/molekul/Sidebar";
import DashboardPage from "../pages/Dashboard";
import ChooseTryOut from "../pages/ChooseTryOut";
import Subcategory from "../pages/ChooseSubCategoryTryout";
import QuizPage from "../pages/Quiz";
import RiwayatTryOut from "../pages/RiwayatTryout";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ScorePage from "../pages/ScorePage";
import KecermatanQuiz from "../pages/KecermatanQuiz";

const router = createBrowserRouter([
            {
                element : <LandingPage/>,
                path : '/'
            },
            {
                element : <Login/>,
                path : '/Login'
            },
            {
                element : <Register/>,
                path :'/register'
            },
            {
                element : <DashboardPage/>,
                path : '/dashboard',
            },
            {
                element : <ChooseTryOut/>,
                path : '/Try-out'
            },
            {
                element : <Subcategory/>,
                path : '/subcategory/:category'
            },
            {
                element : <QuizPage/>,
                path : '/ujian'
            },
            {
                element : <RiwayatTryOut/>,
                path : '/Histori-Tryout'
            },
            {
                element : <ScorePage/>,
                path : '/score-page'
            },
            {
                element : <KecermatanQuiz/>,
                path : '/ujian/kecermatan'
            }
        
])

export default router