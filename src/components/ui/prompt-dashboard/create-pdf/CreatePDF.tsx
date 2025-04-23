"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LargeDataset from './LargeDataset/LargeDataset';
import PreFilledForm from './PreFilledForm/PreFilledForm';
import BlankTemplateForm from './BlankTemplateForm/BlankTemplateForm';
import { pageNavigationPlugin, RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import FinalReport from './Final Report/FinalReport';


const CreatePDF = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState(tabParam || "1"); 
    const [isFinalReport , setIsFinalReport] = useState(false)
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const zoomPluginInstance = zoomPlugin();
    const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
    const { ZoomInButton, ZoomOutButton } = zoomPluginInstance; 

    console.log(activeTab);

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    const tabs = [
        { id: "1", label: "Large Dataset File", component: <LargeDataset zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> },
        { id: "2", label: "Pre-filled Form", component: <PreFilledForm  zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> },
        { id: "3", label: "Blank Template Form", component: <BlankTemplateForm  zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> }, 
        ...(isFinalReport ? [{
          id: "4", 
          label: "Final Report",
          component: <FinalReport zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} />
        }] : [])
    ];

    return (
        <div className="w-full h-[100vh-115px] flex flex-col">
            {/* Navbar */}
            <div className="bg-white h-[48px] flex items-center justify-center shadow">
                <div className="flex items-center gap-4">
                    <GoToPreviousPage>
                        {(props: RenderGoToPageProps) => (
                            <button
                                disabled={props.isDisabled}
                                onClick={props.onClick}
                                className="text-sm px-2 py-1 border rounded disabled:opacity-50"
                            >
                                Previous
                            </button>
                        )}
                    </GoToPreviousPage>

                    <GoToNextPage>
                        {(props: RenderGoToPageProps) => (
                            <button
                                disabled={props.isDisabled}
                                onClick={props.onClick}
                                className="text-sm px-2 py-1 border rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        )}
                    </GoToNextPage>

                    <ZoomOutButton render={(props) => (
                        <button onClick={props.onClick} className="text-sm px-2 py-1 border rounded">➖</button>
                    )} />

                    <ZoomInButton render={(props) => (
                        <button onClick={props.onClick} className="text-sm px-2 py-1 border rounded">➕</button>
                    )} />
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-auto bg-[#f6f6f6] ">
                <div className="h-[calc(100vh-225px)] overflow-hidden">
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>
            </div>

            {/* Footer */}
            <div className="h-[72px] bg-white flex items-center justify-between border-t">
                <div className="flex gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full text-[16px] font-medium h-[48px] ${activeTab === tab.id
                                ? "border border-primary text-primary shadow"
                                : "bg-[#F1F1F1] text-[#929292] hover:border-primary hover:border hover:bg-white hover:text-primary"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div> 
<div> 
{
  activeTab === "2" && <div> <button  style={{ borderRadius:50 , height:48 , }} className=' text-white bg-primary px-7 '> Save </button></div>
} 

{
  activeTab === "3" && <div> <button  style={{ borderRadius:50 , height:48 , }} className=' text-white bg-primary px-7 ' onClick={()=>setIsFinalReport(true)}> Create Report </button></div>
}  

{
  activeTab === "4" && <div> <button  style={{ borderRadius:50 , height:48 , }} className=' text-white bg-primary px-7 ' onClick={()=>setIsFinalReport(true)}> Confirm </button></div>
} 



</div>
           
            </div>
        </div>
    );
};

export default CreatePDF;
