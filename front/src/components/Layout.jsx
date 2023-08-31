// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { NavBar } from './Navbar'
// import { Footer } from './Footer'
// const Layout = () => {
//   return (
//     <>
    
//       <div className='container mx-auto max-w screen-xl py-4'>
//         <NavBar />
//           <Outlet />
//         <Footer />
//       </div>
      
//     </>
    
//   )
// }

// export default Layout
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './Navbar';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <div className='container mx-auto max-w flex flex-col min-h-screen py-4'>
      <NavBar />
      <main className='flex-grow container mx-auto max-w-screen-xl p-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
