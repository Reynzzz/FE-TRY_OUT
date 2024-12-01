import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "../components/molekul/Sidebar";
import DashboardPage from "../pages/Dashboard";
import ChooseTryOut from "../pages/ChooseTryOut";
import Subcategory from "../pages/ChooseSubCategoryTryout";
import QuizPage from "../pages/Quiz";
import RiwayatTryOut from "../pages/RiwayatTryout";

const router = createBrowserRouter([
            {
                element : <DashboardPage/>,
                path : '/',
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
            }
        
])

export default router