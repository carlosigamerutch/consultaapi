// pages/page.tsx
'use client';
import React from 'react';
import NavBar from './components/navbar'; // Asegúrate de que la ruta sea correcta
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import FluidExample from 'components/image.jsx';
import UncontrolledExample from './components/carousel';

const Page: React.FC = () => {
  return (
    <>
      <NavBar />
      <UncontrolledExample />
      <div>
        {/* Aquí va el contenido de tu página */}
      </div>
      
    </>
  );
};

export default Page;