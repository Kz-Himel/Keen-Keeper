import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'timeline',
                Component: Timeline
            },
            {
                path: 'stats',
                Component: Stats
            }
        ],
        errorElement: <ErrorPage />
    }
])