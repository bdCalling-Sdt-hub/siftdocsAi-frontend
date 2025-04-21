"use client"

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LargeDataset from './LargeDataset/LargeDataset';
import PreFilledForm from './PreFilledForm/PreFilledForm';
import BlankTemplateForm from './BlankTemplateForm/BlankTemplateForm';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'; 
import { zoomPlugin } from '@react-pdf-viewer/zoom'; 


const CreatePDF = () => { 
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam || "1");   
  const pageNavigationPluginInstance = pageNavigationPlugin();  
  const zoomPluginInstance = zoomPlugin();
  const { GoToNextPageButton, GoToPreviousPageButton } = pageNavigationPluginInstance;
const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

  
  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]); 


  const tabs = [
    { id: "1", label: "Large Dataset File", component: <LargeDataset zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> },
    { id: "2", label: "Pre-filled Form", component: <PreFilledForm /> },
    { id: "3", label: "Blank Template Form", component: <BlankTemplateForm /> },
  ];
 


  return (
    <div className=' w-full h-[calc(100vh-120px)] relative '>
      <div className=' bg-white h-[40px] w-full flex items-center justify-center pb-2 '>
<div className="flex items-center gap-4  rounded">
<GoToPreviousPageButton
  render={(props) => <button onClick={props.onClick}>⬅️ Prev</button>}
/>

<GoToNextPageButton
  render={(props) => <button onClick={props.onClick}>Next ➡️</button>}
/>

<ZoomOutButton
  render={(props) => <button onClick={props.onClick}>➖ Zoom Out</button>}
/>

<ZoomInButton
  render={(props) => <button onClick={props.onClick}>➕ Zoom In</button>}
/>

            </div> 
      </div>


      <div  className=' h-[calc(100vh-192px)] overflow-y-scroll  bg-[#f6f6f6]'>
      <div> 
      {tabs.find((tab) => tab.id === activeTab)?.component} 
      </div>
      </div> 


      <div className=' h-[72px] w-full bg-white pt-3 absolute -bottom-2 flex items-center'> 
      <div className="flex flex-row gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-4 py-2 rounded-full font-medium h-[48px] text-[16px] ${
                  activeTab === tab.id
                    ? " border border-primary text-primary  shadow"
                    : "bg-[#F1F1F1] text-[#929292] hover:border-primary hover:border hover:bg-white hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div> 
      </div>
    </div>
  );
};

export default CreatePDF;