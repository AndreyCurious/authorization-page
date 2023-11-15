import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./components/authentication";
import NotFoundPage from "./components/notFoundPage";
import routes from "./routes"

const AppRoutes = () => {
  return (
    <Routes>
      <Route key={routes.authentication()} path={routes.authentication()} element={<Authentication />} />
      <Route path="*" element={<NotFoundPage />} exact />
    </Routes>
  )
}

export default AppRoutes;