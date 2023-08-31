// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { ThemeProvider } from "@material-tailwind/react";
// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Layout from './components/Layout.jsx';
// import Home from './pages/Home.jsx';
// import Docs from './pages/Docs.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: '/docs',
//         element: <Docs />
//       }
//     ]
//   },
  
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <ThemeProvider>
        
//       </ThemeProvider>
//     </RouterProvider>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Solucion from './pages/Solucion';
import Preguntas from './pages/Preguntas';
import Modelado from './pages/Modelado';
import Documentacion from './pages/Documentacion.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/documentacion',
        element: <Documentacion />
      },
      {
        path: '/modelado',
        element: <Modelado />
      },
      {
        path: '/preguntas',
        element: <Preguntas />
      },
      {
        path: '/solucion',
        element: <Solucion />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
