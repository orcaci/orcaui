import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Skeleton } from "antd";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./route";
import { TopFrame } from "./components/topframe";

import "antd/dist/antd.css";

function Authorizer(props: any) {
  const { children } = props;
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    return (
      <div>
        <TopFrame navigation={PUBLIC_ROUTES} />
        {children}
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton active={true} />}>
        <Routes>
          {PUBLIC_ROUTES.map((route) => {
            const Component = route.component();
            return (
              <Route
                path={route.path}
                key={route.key}
                element={<Component />}
              />
            );
          })}

          {/* Private Routes */}

          {PRIVATE_ROUTES.map((route) => {
            const Component = route.component();
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <Authorizer>
                    <Component />
                  </Authorizer>
                }
              >
                {route.nestedRoute
                  ? route.nestedRoute.map((subRoute) => {
                      const SubRouteComponent = subRoute.component();
                      return (
                        <Route
                          path={subRoute.path}
                          key={subRoute.path}
                          element={<SubRouteComponent />}
                        />
                      );
                    })
                  : null}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
