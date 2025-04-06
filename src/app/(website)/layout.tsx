import HomeNavbar from '@/components/shared/HomeNavbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HomeNavbar />
            {children}
        </div>
    );
};

export default layout;