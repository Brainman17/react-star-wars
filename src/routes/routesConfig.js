import React from "react";
import HomePage from "@containers/HomePage/HomePage";
import PeoplePage from "@containers/PeoplePage/PeoplePage";
import NotFoundPage from '@containers/NotFoundPage/NotFoundPage';
import PersonPage from "@containers/PersonPage/PersonPage";
import FavoritePage from "@containers/FavoritePage/FavoritePage";
import SearchPage from "@containers/SearchPage/SearchPage";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/favorites',
        element: <FavoritePage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }

];

export default routesConfig;