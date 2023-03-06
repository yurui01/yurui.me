/// <reference types="vite-plugin-pages/client-react" />
import { Suspense } from "react";
import { useRoutes } from 'react-router-dom';
import routes from "~react-pages";

function App() {
  return <Suspense>{useRoutes(routes)}</Suspense>;
}

export default App;
