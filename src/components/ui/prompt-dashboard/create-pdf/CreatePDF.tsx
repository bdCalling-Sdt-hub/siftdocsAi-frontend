"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LargeDataset from './LargeDataset/LargeDataset';
import PreFilledForm from './PreFilledForm/PreFilledForm';
import BlankTemplateForm from './BlankTemplateForm/BlankTemplateForm';
import { pageNavigationPlugin, RenderGoToPageProps, RenderCurrentPageLabelProps } from '@react-pdf-viewer/page-navigation';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps, zoomPlugin } from '@react-pdf-viewer/zoom';
import FinalReport from './Final Report/FinalReport';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { GoZoomIn, GoZoomOut } from 'react-icons/go';


const CreatePDF = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState(tabParam || "1");
    const [isFinalReport, setIsFinalReport] = useState(false)
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const zoomPluginInstance = zoomPlugin();
    const { GoToNextPage, GoToPreviousPage, CurrentPageLabel } = pageNavigationPluginInstance;
    const { ZoomIn, ZoomOut, CurrentScale } = zoomPluginInstance;

    console.log(activeTab);

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    const tabs = [
        { id: "1", label: "Large Dataset File", component: <LargeDataset zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> },
        { id: "2", label: "Pre-filled Form", component: <PreFilledForm zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> },
        { id: "3", label: "Blank Template Form", component: <BlankTemplateForm zoomPluginInstance={zoomPluginInstance} pageNavigationPluginInstance={pageNavigationPluginInstance} /> },
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
                <div className="flex items-center lg:gap-[200px] gap-5">


                    {/* Zoom in . zoom Out . current scale */}
                    <div className='flex items-center gap-2'>
                        <ZoomOut>
                            {(props: RenderZoomOutProps) => (
                                <p onClick={props.onClick} className="cursor-pointer "><GoZoomOut size={16} color='#606060' /></p>
                            )}
                        </ZoomOut>

                        <div style={{ padding: '0px 2px' }}>
                            <CurrentScale>
                                {(props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>}
                            </CurrentScale>
                        </div>


                        <ZoomIn>
                            {(props: RenderZoomInProps) => (
                                <p onClick={props.onClick} className="cursor-pointer "><GoZoomIn size={16} color='#606060' /></p>
                            )}
                        </ZoomIn>
                    </div>


                    {/* previous page , next page , current page */}
                    <div className='flex items-center gap-2 '>
                        <GoToPreviousPage>
                            {(props: RenderGoToPageProps) => (
                                <button
                                    disabled={props.isDisabled}
                                    onClick={props.onClick}
                                    className="text-sm  border rounded disabled:opacity-50 outline-none"
                                    style={{ height: "20px", width: "20px" }}
                                >
                                    <ChevronLeft color='#606060' size={14} />
                                </button>
                            )}
                        </GoToPreviousPage>

                        <div>
                            <CurrentPageLabel>
                                {(props: RenderCurrentPageLabelProps) => (
                                    <div className='flex items-center gap-2'>
                                        <span className='bg-[#E7E7E7] text-[#414141] rounded-full px-5 h-6 flex items-center'>{`${props.currentPage + 1} `} </span> <span className='text-[#929292]'>  of {`${props.numberOfPages}`}</span>
                                    </div>
                                )}
                            </CurrentPageLabel>
                        </div>
                        <GoToNextPage>
                            {(props: RenderGoToPageProps) => (
                                <button
                                    disabled={props.isDisabled}
                                    onClick={props.onClick}
                                    className="text-sm  border rounded disabled:opacity-50 outline-none"
                                    style={{ height: "20px", width: "20px" }}
                                >
                                    <ChevronRight color='#606060' size={14} />
                                </button>
                            )}
                        </GoToNextPage>

                    </div>



                </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-auto bg-[#f6f6f6] ">
                <div className="lg:h-[calc(100vh-225px)] h-full  overflow-hidden">
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>
            </div>

            {/* Footer */}
            <div className="lg:h-[72px] h-full bg-white flex items-center justify-between border-t">
    {/* Tab Buttons */}
    <div className="flex gap-4 overflow-x-auto lg:overflow-visible">
        {tabs.map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 py-1 rounded-full text-sm font-medium ${activeTab === tab.id
                    ? "border border-primary text-primary shadow"
                    : "bg-[#F1F1F1] text-[#929292] hover:border-primary hover:border hover:bg-white hover:text-primary"
                    } 
                    lg:px-4 lg:py-2 lg:text-[16px] text-[12px] lg:h-[48px] h-[38px]`}
            >
                {tab.label}
            </button>
        ))}
    </div>

    {/* Footer Buttons for different tabs */}
    <div>
        {activeTab === "2" && (
            <div>
                <button
                    style={{ borderRadius: 50, height: 48 }}
                    className="text-white bg-primary lg:px-7 px-1 lg:text-[16px] text-[12px]"
                >
                    Save
                </button>
            </div>
        )}

        {activeTab === "3" && (
            <div>
                <button
                    style={{ borderRadius: 50, height: 48 }}
                    className="text-white bg-primary lg:px-7 px-1 lg:text-[16px] text-[12px]"
                    onClick={() => setIsFinalReport(true)}
                >
                    Create Report
                </button>
            </div>
        )}

        {activeTab === "4" && (
            <div className="flex items-center gap-4">
                <button
                    style={{ borderRadius: 50, height: 48 }}
                    className="text-white bg-primary lg:px-7 px-1 lg:text-[16px] text-[12px]"
                    onClick={() => setIsFinalReport(true)}
                >
                    Confirm
                </button>

                <button
                    className="flex items-center justify-center px-4"
                    style={{
                        backgroundColor: "#F1F1F1",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: "50px",
                        height: 48,
                    }}
                >
                    <span>
                        <Download color="#12A3E1" size={18} />
                    </span>
                    <span className="text-primary lg:text-[16px] text-[12px]">
                        Download
                    </span>
                </button>
            </div>
        )}
    </div>
</div>
        </div>
    );
};

export default CreatePDF;
