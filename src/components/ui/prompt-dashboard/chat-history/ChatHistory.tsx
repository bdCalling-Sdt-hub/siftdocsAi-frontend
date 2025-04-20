'use client';
import { ConfigProvider, DatePicker, Tabs, Input, Button, Table } from 'antd';
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


    const items = [
        {
            key: "all",
            label: (
                <p className="text-[16px] font-normal ">All </p>
            ),
        },
        {
            key: "largeDataset",
            label: (
                <p className="text-[16px] font-normal ">Large Dataset File </p>
            ),
        },
        {
            key: "pre-filled",
            label: (
                <p className="text-[16px] font-normal ">Pre-filled Form</p>
            ),
        },
        {
            key: "blankTemplate",
            label: (
                <p className="text-[16px] font-normal ">Blank Template Form</p>
            ),
        },
    ];



    return (
        <div>

            <div className='flex items-center justify-between mb-[15px]'>
                <p className='text-[20px] text-[#606060] font-normal  '> Chat History</p>

                <div className='flex items-center gap-4'>
                    <Button

                        shape="circle"
                        icon={<Download color='#12A3E1' size={18} />}
                        className="h-8 w-8 flex items-center justify-center saved-page-btn"
                        style={{ backgroundColor: "#F1F1F1", boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)", }}
                    />

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

            <div>

                <div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    itemActiveColor: "#12A3E1",
                                    itemSelectedColor: "#12A3E1",
                                    inkBarColor: "#12A3E1",
                                    itemHoverColor: "#12A3E1",
                                    itemColor: "#929292",

                                },
                            },
                        }}
                    >

                        <Tabs defaultActiveKey="services" items={items} />
                    </ConfigProvider>
                </div>


                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                bodySortBg: "#F1F1F1", 
                                headerColor: "#5C5C5C", 
                                rowSelectedBg:"#e7f6fc",
                                rowSelectedHoverBg:"#e7f6fc",
                                rowHoverBg:"#e7f6fc",
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
                        scroll={{ x: 1000 }}
                        className="shadow-sm rounded-lg"
                    />
                </ConfigProvider>

            </div>
        </div>
    );
};

export default ChatHistory;