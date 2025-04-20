"use client"
import { ZoomOut } from 'lucide-react';
import React, { useState } from 'react';

const CreatePDF = () => { 
    const [zoom, setZoom] = useState(1);
    const handleZoomIn = () => {
      if (zoom < 1.3) {
        setZoom(zoom + 0.1); 
      }
    };
  
    const handleZoomOut = () => {
      if (zoom > 0.8) {
        setZoom(zoom - 0.1); 
      }
    };

    const zoomPercentage = Math.round(zoom * 100);
   
    return (
        <div>
            <div className=' bg-white h-[40px] w-full flex items-center justify-center '> 
            <div className='flex items-center gap-4' >
          <button onClick={handleZoomIn} disabled={zoom >= 1.3}>        </button> 
          <p>Zoom: {zoomPercentage}%</p>
          <button onClick={handleZoomOut} disabled={zoom <= 0.8}> <ZoomOut size={6} color='#606060' /> </button>
        </div>
                  </div>
   

        <div style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s' }}>
          <h1>Zoomable Header</h1>
        </div> 

      </div>
    );
};

export default CreatePDF;