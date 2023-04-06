import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { movieContext } from "../data/context";
import MoviesbyGenre from './MoviesbyGenre';
import Tapilmadi from './Tapilmadi';
import { useContext } from 'react';
import MainLayout from './MainLayout';
import MoviesByPage from './MoviesByPage';
import MoviebyTitle from './MoviebyTitle';
export default function ContextProvider() {
    const data = useContext(movieContext);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout data={data} />} />
                <Route path="/movies/all/page/:id" element={<MoviesByPage data={data} />} />
                <Route path="/movies/:genre/page/:id" element={<MoviesbyGenre data={data} />} />
                <Route path="/movie/:title" element={<MoviebyTitle data={data.movies} />} />
                <Route path="*" element={<Tapilmadi />} />

            </>
        )
    )
    return (
        <RouterProvider router={router} />

    )
}



// [
//     {
//         path: "/", element: <Main data={data} />,
//         children: [
//             {
//                 path: '/movies/all/page/:id'
//             },
//             {
//                 path: '/movies/:genre',
//                 children: [
//                     { path: 'page/:id' }
//                 ]
//             }
//         ]
//     },
//     {
//         path: "/movie/:title", element: <MoviebyTitle data={data.movies} />
//     },
//     {
//         path: "*", element: <Tapilmadi />
//     }
// ]