import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { movieContext } from "../data/context";
import MoviesbyGenre from './MoviesbyGenre';
import Tapilmadi from './Tapilmadi';
import { useContext } from 'react';
import MainLayout from './MainLayout';
import MoviesByPage from './MoviesByPage';
import MoviebyTitle from './MoviebyTitle';
export default function ContextProvider() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/MovieApp" element={<MainLayout />} />
                <Route path="/MovieApp/movies/all/page/:id" element={<MoviesByPage  />} />
                <Route path="/MovieApp/movies/:genre/page/:id" element={<MoviesbyGenre  />} />
                <Route path="/MovieApp/movie/:title" element={<MoviebyTitle  />} />
                <Route path="*" element={<Tapilmadi />} />

            </>
        )
    )
    return (
        <RouterProvider router={router} />

    )
}
