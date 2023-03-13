/// <reference types="vite-plugin-pages/client-react" />
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import LayoutWapper from "./components/LayoutWapper";
import Spinner from "./components/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <LayoutWapper>{useRoutes(routes)}</LayoutWapper>
    </Suspense>
  );
}

export default App;
