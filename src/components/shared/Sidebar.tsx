"use client"

import { LuLayoutDashboard } from 'react-icons/lu';
import Link from 'next/link';
import { Bookmark, FilePlus2, MessageCirclePlus, MessageCircleReply } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Sidebar = ({showLabels , setShowLabels}:{showLabels: boolean, setShowLabels: (showLabels: boolean) => void}) => {
    const pathname = usePathname();

    const toggleLabels = () => {
        setShowLabels(!showLabels);
    };

    const menuItems = [
        {
            key: "/dashboard",
            icon: <LuLayoutDashboard style={{ height: "34px", width: "24px", color: pathname === "/dashboard" ? "#07AFF8" : "#606060" }} />,
            label: "Dashboard"
        },
        {
            key: "/new-chat",
            icon: <MessageCirclePlus style={{ height: "34px", width: "24px", color: pathname === "/new-chat" ? "#07AFF8" : "#606060" }} />,
            label: "New Chat"
        },
        {
            key: "/my-documents",
            icon: <FilePlus2 style={{ height: "34px", width: "24px", color: pathname === "/my-documents" ? "#07AFF8" : "#606060" }} />,
            label: "My Documents"
        },
        {
            key: "/saved-templates",
            icon: <Bookmark style={{ height: "34px", width: "24px", color: pathname === "/saved-templates" ? "#07AFF8" : "#606060" }} />,
            label: "Saved Templates"
        },
        {
            key: "/chat-history",
            icon: <MessageCircleReply style={{ height: "34px", width: "24px", color: pathname === "/chat-history" ? "#07AFF8" : "#606060" }} />,
            label: "Chat History"
        },
    ];

    return (
        <div className="h-full">
            <div className="flex flex-col h-full">
                {/* Toggle button at the top */}
                <button 
                    onClick={toggleLabels}
                    className="p-4 text-center hover:bg-gray-100"
                >
                    {showLabels ? "Hide Labels" : "Show Labels"}
                </button>
                
                {/* Menu items */}
                <div className="flex-1">
                    {menuItems.map((item) => (
                        <Link href={item.key} key={item.key}>
                            <div className={`flex items-center gap-2 p-2 rounded-md border-b border-[#E7E7E7] ps-[60px] py-[14px] hover:bg-gray-100 ${pathname === item.key ? 'bg-blue-50' : ''}`}>
                                <span>{item.icon}</span>
                                {!showLabels && (
                                    <span className='text-sm text-[#606060] font-normal'>
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;