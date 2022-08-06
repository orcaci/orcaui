import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Skeleton } from "antd";

import { PUBLIC_ROUTES } from "./route";
import { TopFrame } from "./components/topframe";

import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <TopFrame navigation={PUBLIC_ROUTES} />
      <main className="flex w-full align-middle justify-center">
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
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
