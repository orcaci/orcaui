import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { PRIVATE_ROUTES } from "../../route";

function Authorizer(props: any) {
  const { children } = props;
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  console.log("abc", isLoggedIn);

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export function HomeLayout() {
  return (
    <Authorizer>
      <Routes>
        {PRIVATE_ROUTES.map((route) => {
          const Component = route.component();
          console.log("AM ROUTE", route);
          return (
            <Route key={route.key} path={route.path} element={<Component />}>
              {console.log("AM RENDERIND", route)}
              {route.nestedRoute ? (
                route.nestedRoute.map((subRoute) => {
                  const SubRouteComponent = route.component();
                  return (
                    <Route
                      path={subRoute.path}
                      key={subRoute.path}
                      element={<SubRouteComponent />}
                    />
                  );
                })
              ) : (
                <div>No String</div>
              )}
            </Route>
          );
        })}
        <Route path="*" element={<Navigate to={"/suit/login/testcase"} />} />
      </Routes>
    </Authorizer>
  );
}
