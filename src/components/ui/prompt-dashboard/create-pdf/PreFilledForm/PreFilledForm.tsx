/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { useState } from 'react';
import { Input , Space } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const PreFilledForm = ({
    zoomPluginInstance,
    pageNavigationPluginInstance,
}: {
    zoomPluginInstance: any;
    pageNavigationPluginInstance: any;
}) => {

    const [fields, setFields] = useState([{ key: "", value: "" }]);

    const addField = () => {
        setFields([...fields, { key: "", value: "" }]);
    };

    const removeField = (index: number) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const newFields = [...fields];
        newFields[index][field as "key" | "value"] = value;
        setFields(newFields);
    };


    return (
        <div className="h-full w-full grid lg:grid-cols-3 grid-cols-1 overflow-hidden">
            {/* Left Side PDF Viewer */}
            <div className="col-span-2 border-e-[12px] border-white overflow-y-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="h-full w-full">
                        <Viewer
                            fileUrl="/form.pdf"
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

            {/* Right Side Input and Chat Bubble */}
            <div className="col-span-1 relative h-full ">
                {/* Message bubble */}
                <div className='overflow-y-auto'>
                    <div style={{ background: "#f5f5f5", padding: 24, borderRadius: 8 }}>
                        <h3 className=' text-[16px] text-[#414141]  font-medium mb-4   '>Personal Data</h3>

                        {fields.map((field, index) => (
                            <Space key={index} style={{ display: "flex", marginBottom: 8 }}>
                                <Input
                                    placeholder="Key value"
                                    value={field.key}
                                    onChange={(e) => handleChange(index, "key", e.target.value)}
                                    style={{ height: "32px" }}
                                />
                                <Input
                                    placeholder="Value what do you living?"
                                    value={field.value}
                                    onChange={(e) => handleChange(index, "value", e.target.value)}
                                    style={{ height: "32px" }}
                                />

                                <button className='rounded-full h-[16px] w-[16px]  text-[#FF2A30] ' onClick={() => removeField(index)}>
                                    <DeleteOutlined size={16} className=' text-[#FF2A30]' />
                                </button>

                            </Space>
                        ))}

                        <div className='flex items-center justify-end mt-5'>
                            <button className='rounded-full h-10 w-10 bg-[#B6B6B6] flex items-center justify-center text-white ' onClick={addField}>
                                <PlusOutlined size={16} className=' text-white' />
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PreFilledForm;
