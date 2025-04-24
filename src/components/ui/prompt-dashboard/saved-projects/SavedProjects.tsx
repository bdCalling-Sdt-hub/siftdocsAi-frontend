'use client';
import { ConfigProvider, DatePicker, Tabs, Input, Button, Table } from 'antd';
import { Download, Search } from 'lucide-react';
import React, { useState } from 'react';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { documentData } from '@/lib/data';

interface Document {
  key: string;
  serialNumber: string;
  name: string;
  documentName: string;
  uploadDate: string;
  modifiedDate: string;
  supplierName: string;
}

const SavedProjects = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: ColumnsType<Document> = [
    {
      title: 'S.No',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
      width: '80px',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Document Name',
      dataIndex: 'documentName',
      key: 'documentName',
      sorter: (a, b) => a.documentName.localeCompare(b.documentName),
    },
    {
      title: 'Upload Date',
      dataIndex: 'uploadDate',
      key: 'uploadDate',
      sorter: (a, b) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime(),
    },
    {
      title: 'Modified Date',
      dataIndex: 'modifiedDate',
      key: 'modifiedDate',
      sorter: (a, b) => new Date(a.modifiedDate).getTime() - new Date(b.modifiedDate).getTime(),
    },
    {
      title: 'Supplier Name',
      dataIndex: 'supplierName',
      key: 'supplierName',
      sorter: (a, b) => a.supplierName.localeCompare(b.supplierName),
    },
  ];

  const onChange: TableProps<Document>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('Table change:', pagination, filters, sorter, extra);
  };

  const tabItems = [
    { key: 'all', label: <p className="lg:text-[16px] text-[10px] font-normal">All</p> },
    { key: 'largeDataset', label: <p className="lg:text-[16px] text-[10px] font-normal">Large Dataset File</p> },
    { key: 'pre-filled', label: <p className="lg:text-[16px] text-[10px] font-normal">Pre-filled Form</p> },
    { key: 'blankTemplate', label: <p className="lg:text-[16px] text-[10px] font-normal">Blank Template Form</p> },
  ];

  return (
    <div className="lg:h-[calc(100vh-120px)] h-[calc(100vh-105px)] w-full px-0 lg:px-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[20px] text-[#606060] font-normal">Saved Projects</p>

          <div className="flex items-center lg:hidden">
            <Button
              shape="circle"
              icon={<Download color="#12A3E1" size={18} />}
              className="h-10 w-10 flex items-center justify-center saved-page-btn"
              style={{ backgroundColor: "#F1F1F1", boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)" }}
            />
          </div>
        </div>

        <div className="flex flex-row gap-4 w-full lg:w-auto">
          <div className="hidden lg:flex items-center">
            <Button
              shape="circle"
              icon={<Download color="#12A3E1" size={18} />}
              className="h-10 w-10 saved-page-btn"
              style={{ backgroundColor: "#F1F1F1", boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)" }}
            />
          </div>

<div className='w-full'> 

          <Input
            placeholder="Search your interests..."
            size="large"
            className="flex-1 transition-all"
            style={{
              height: "42px",
              borderRadius: "50px",
              border: "1px solid #E4E4E4",
              backgroundColor: "#F1F1F1",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
            }}
            suffix={<Search color="#606060" size={18} />}
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

      <div> 

        <div className=''> 
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
          <Tabs defaultActiveKey="all" items={tabItems} />
        </ConfigProvider>

        </div>
 

 <div className=' w-[300px] lg:w-full'> 

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
            dataSource={documentData}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '50'],
              showTotal: (total) => `Total ${total} items`,
            }}
            scroll={{ x: 'auto' }}
            className="shadow-sm rounded-lg"
          />
        </ConfigProvider>
 </div>
      </div>
    </div>
  );
};

export default SavedProjects;
