"use client";

import { Divider, Typography, Row, Col, DatePicker, Input } from 'antd';
import { useState } from 'react';
import { ReportGroup, reportsData } from '@/lib/data';
import ReportCard from './ReportCard';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Search } from 'lucide-react';

dayjs.extend(customParseFormat);

export default function MyProjects() {
    const [displayData, setDisplayData] = useState<ReportGroup[]>(reportsData);
    console.log(setDisplayData);

    return (
        <div className=" lg:pe-5 pe-2 ">
            <div className='flex lg:flex-row flex-col lg:items-center gap-2 justify-between mb-[34px]'>
                <p className='text-[20px] text-[#606060] font-normal lg:ps-0 ps-2  '> My Projects</p>

                <div className='flex items-center gap-4'>

                    <Input
                        placeholder="Search your interests..."
                        size="large"
                        className="rounded-full w-full h-12 transition-all"
                        style={{
                            height: "42px",
                            borderRadius: "50px",
                            border: "1px solid #E4E4E4",
                            backgroundColor: "#F1F1F1",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                        }}
                        suffix={<Search color='#606060' size={18} />}
                    />

                    <DatePicker style={{ width: "200px", borderRadius: "50px", height: "42px", border: "1px solid #E4E4E4", backgroundColor: "#F1F1F1", boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)", }} />
                </div>
            </div>

            {displayData.length === 0 ? (
                <div className="text-center py-12">
                    <Typography.Text type="secondary">No documents found for the selected date.</Typography.Text>
                </div>
            ) : (
                displayData.map((group, groupIndex) => (
                    <div key={`group-${groupIndex}`}>
                        <Divider orientation="left" style={{ borderColor: '#B6B6B6' }} >
                            <p className='text-[14px] text-[#B6B6B6] font-normal'>{group.date}</p>
                        </Divider>

                        <div className='lg:ps-2'>
                            <Row gutter={[24, 24]}>
                                {group.reports.map((report) => (
                                    <Col xs={24} md={12} lg={8} key={report.id}>
                                        <ReportCard report={report} />
                                    </Col>
                                ))}
                            </Row>
                        </div>

                    </div>
                ))
            )}
        </div>
    );
}