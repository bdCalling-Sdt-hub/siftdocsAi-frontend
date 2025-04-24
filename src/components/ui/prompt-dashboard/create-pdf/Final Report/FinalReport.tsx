/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
const FinalReport = ({zoomPluginInstance , pageNavigationPluginInstance}:{zoomPluginInstance:any , pageNavigationPluginInstance:any }) => { 

    return (
        <div className="h-full w-full grid grid-cols-3 overflow-hidden">
        {/* Left Side PDF Viewer */}
        <div className="col-span-3  overflow-y-auto">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="h-full w-full">
                    <Viewer
                        fileUrl="/blank_template.pdf"
                        theme={{ theme: 'auto' }}
                        defaultScale={SpecialZoomLevel.PageWidth}  
                        renderLoader={(percentages: number) => (
                            <div style={{ width: '100%' }}>
                                Loading... ({Math.round(percentages)}%)
                            </div>
                        )}
                        plugins={[pageNavigationPluginInstance, zoomPluginInstance]}
                    />
                </div>
            </Worker>
        </div>
    </div>
    );
};

export default FinalReport;