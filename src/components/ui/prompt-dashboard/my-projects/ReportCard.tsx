"use client"
import { Button, Space, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { ReportItem } from '@/lib/data';
import FileItem from './FileItem';
import { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

interface ReportCardProps {
  report: ReportItem;
}

export default function ReportCard({ report }: ReportCardProps) { 

    const router  = useRouter(); 
  const handleContinue = () => { 
    router.push("/create-pdf");
    console.log('Continue clicked for report:', report.id);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    console.log('Menu item clicked:', key, 'for report:', report.id);
  };

  // To match the design in the image
  const cardStyle: CSSProperties = {
    borderRadius: 8,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', 
    border: '1px solid #E7E7E7',
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#f6f6f6', // White background for the card-like div
    padding: '16px', // Padding for the whole div
  };

  const menuItems = [
    { key: 'view', label: 'View Details' },
    { key: 'download', label: 'Download All' },
    { key: 'delete', label: 'Delete' },
  ];

  return (
    <div style={cardStyle}>
      <div className="flex justify-between items-center mb-3">
        <span style={{ fontSize: 16, fontWeight: 500 , color:"#12A3E1"  }}>{report.title}</span>
        <Dropdown 
          menu={{ items: menuItems, onClick: handleMenuClick }} 
          trigger={['click']}
          placement="bottomRight"
        >
          <Button 
            type="text" 
            icon={<EllipsisOutlined color='#929292' />} 
            style={{ border: 'none' }} 
          />
        </Dropdown>
      </div>

      <Space direction="vertical" style={{ width: '100%' }}>
        <FileItem 
          label="Large Dataset File" 
          file={report.files.largeDataset} 
        />
        <FileItem 
          label="Pre-filled Form" 
          file={report.files.preFilledForm} 
        />
        <FileItem 
          label="Blank Template Form" 
          file={report.files.blankTemplate} 
        />
        
        {report.reportNumber && (
          <div className="text-sm text-gray-500 mt-2">
            Report: <span className="text-blue-500">{report.reportNumber}</span>
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <Button 
            type="primary" 
            onClick={handleContinue}
            style={{
              borderRadius: 20,
              height: 32,

            }}
          >
            Continue
          </Button>
        </div>
      </Space>
    </div>
  );
}
