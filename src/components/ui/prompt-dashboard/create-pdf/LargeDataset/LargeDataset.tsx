/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'; 
import '@react-pdf-viewer/zoom/lib/styles/index.css';


const LargeDataset = ({ zoomPluginInstance, pageNavigationPluginInstance }: { zoomPluginInstance: any, pageNavigationPluginInstance: any}) => { 

    return (
        <div>

            <div className=" grid grid-cols-3 ">

                {/* left side   */}
                <div className=" col-span-2 border-e-2 border-white ">
                    <div className='w-full'>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" >
                            <div
                                style={{
                                    // border: '1px solid rgba(0, 0, 0, 0.3)', 
                                    height: '100%',
                                    width: '100%' , 
                                    
                                }}  
                                className="pdf-container"
                            > 



                                <Viewer fileUrl="/example.pdf"
                                    theme={{
                                        theme: 'auto'
                                    }}
                                    defaultScale={0.98}
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

                {/* right side   */}
                <div className=" col-span-1">

                </div>

            </div>

        </div>
    );
};

export default LargeDataset;