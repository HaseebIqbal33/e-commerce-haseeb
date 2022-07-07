import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

function Router() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.id}
          path={route.route}
          element={route.component}
        ></Route>
      ))}

      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
}

export default Router;
