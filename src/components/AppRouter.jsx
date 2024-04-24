import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Posts from "../pages/Posts";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  // Для устранения предупреждений, так как в React V6 есть небольшие изменения насчет "Навигации"
  let router = Router;
  console.log(router);

  return (

    <Routes>
    {isAuth ? (
      <>
        {privateRoutes.map(route => (
          <Route
            key={route.path}
            element={<route.component />}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </>
    ) : (
      <>
        {publicRoutes.map(route => (
          <Route
            key={route.path}
            element={<route.component />}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </>
    )}
  </Routes>

        
  );
};

export default AppRouter;
