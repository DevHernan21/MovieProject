import {  createBrowserRouter } from "react-router-dom";
import MoviesPage from "../pages/Home/MoviesPage";
import TVShowsPage from "../pages/TVShows/TVShowsPage";
import AnimePage from "../pages/Anime/AnimePage";
import PlansPage from "../pages/Plans/PlansPage";
import Login from "../pages/Authentication/Login";
import DefaultLayout from "../layout/DefaultLayout";
import Register from "../pages/Authentication/Register";
import { PrivateRoute } from "./privateRoutes";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<DefaultLayout />,
        children: [
            {
                path: "/",
                element: (
                    <PrivateRoute>
                        <MoviesPage />
                    </PrivateRoute>
                )
            },
            {
                path: "/tv-shows",
                element: (
                    <PrivateRoute>
                        <TVShowsPage />
                    </PrivateRoute>
                )
            },
            {
                path: "/anime",
                element: (
                    <PrivateRoute>
                        <AnimePage />
                    </PrivateRoute>
                )
            },
            {
                path: "/plans",
                element: (
                    <PrivateRoute>
                        <PlansPage />
                    </PrivateRoute>
                )
            },
            // { TODO: Profile page
            //     path: "/profile",
            //     element: <PrivateRoute> <Profile /> </PrivateRoute>
            // },
            {
                path: "*",
                element: (
                    <PrivateRoute>
                        <NotFoundPage />
                    </PrivateRoute>
                )
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ],
    }
]);