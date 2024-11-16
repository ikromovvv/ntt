import React, {Suspense} from 'react';
import {createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import "app/styles/index.sass"

import {routersConfig} from "../config/routersConfig";


export const AppRouter = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                    {
                        routersConfig?.map(item =>
                        <Route
                            path={item.path}
                            element={item.element}
                        />
                        )
                    }
            </>
        )
    );

    return (

        <Suspense>
            <div style={{background: "#E7F3FF" , height: "100vh"}}>
                <RouterProvider router={router}/>
            </div>
        </Suspense>

    );
};
