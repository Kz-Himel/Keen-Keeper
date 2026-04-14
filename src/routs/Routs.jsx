import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../pages/FriendDetails/FriendDetails";

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
            },
            {
                path: "friendDetails/:friendId",
                loader: () => fetch('/data/friendsData.json').then((res) => res.json()),
                Component: FriendDetails
            }
        ],
        errorElement: <ErrorPage />
    }
])