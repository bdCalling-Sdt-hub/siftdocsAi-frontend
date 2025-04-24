'use client';
import { ConfigProvider, DatePicker, Input, Button, Table } from 'antd';
import { Download, Search } from 'lucide-react';
import React, { useState } from 'react';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { documentHistoryData } from '@/lib/data';

interface DocumentHistory {
    key: string;
    date: string;
    documentName: string;
    history: string;
}

const ChatHistory = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const columns: ColumnsType<DocumentHistory> = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        },
        {
            title: 'Document Name',
            dataIndex: 'documentName',
            key: 'documentName',
            sorter: (a, b) => a.documentName.localeCompare(b.documentName),
        },
        {
            title: 'History',
            dataIndex: 'history',
            key: 'history',
            sorter: (a, b) => a.history.localeCompare(b.history),
        },
    ];

    const onChange: TableProps<DocumentHistory>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('Table change:', pagination, filters, sorter, extra);
    };

    return (
        <div className='lg:h-[calc(100vh-120px)] h-[calc(100vh-105px)] w-full px-0 lg:px-4'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4'>
                <div className='flex items-center justify-between gap-4'>
                    <p className='text-[20px] text-[#606060] font-normal'>Chat History</p>

                    <div className='flex items-center lg:hidden'>
                        <Button
                            shape="circle"
                            icon={<Download color='#12A3E1' size={18} />}
                            className="h-10 w-10 flex items-center justify-center saved-page-btn "
                            style={{
                                backgroundColor: "#F1F1F1",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                            }}
                        />

                    </div>
                </div>

                <div className='flex flex-row items-stretch  gap-4 w-full lg:w-auto'>

                    <div className='lg:flex items-center hidden '>
                        <Button
                            shape="circle"
                            icon={<Download color='#12A3E1' size={18} />}
                            className="h-10 w-10 hidden lg:flex items-center justify-center saved-page-btn"
                            style={{
                                backgroundColor: "#F1F1F1",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                            }}
                        />

                    </div>

                    <div className='w-full  '>

                        <Input
                            placeholder="Search your interests..."
                            size="large"
                            className="transition-all flex-1"
                            style={{
                                height: "42px",
                                borderRadius: "50px",
                                border: "1px solid #E4E4E4",
                                backgroundColor: "#F1F1F1",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                            }}
                            suffix={<Search color='#606060' size={18} />}
                        />
                    </div>

                    <DatePicker
                        style={{
                            width: "100%",
                            maxWidth: "200px",
                            borderRadius: "50px",
                            height: "42px",
                            border: "1px solid #E4E4E4",
                            backgroundColor: "#F1F1F1",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                        }}
                    />
                </div>
            </div>

            <div className="w-[300px] lg:w-full">
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F1F1F1",
                                headerColor: "#5C5C5C",
                                rowSelectedBg: "#e7f6fc",
                                rowSelectedHoverBg: "#e7f6fc",
                                rowHoverBg: "#e7f6fc",
                            },
                        },
                        token: {
                            colorText: "#767676",
                        },
                    }}
                >
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        onChange={onChange}
                        dataSource={documentHistoryData}
                        pagination={{
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '20', '50'],
                            showTotal: (total) => `Total ${total} items`,
                        }}
                        scroll={{ x: 'max-content' }}
                        className="shadow-sm rounded-lg"
                    />
                </ConfigProvider>
            </div>
        </div>
    );
};

export default ChatHistory;
