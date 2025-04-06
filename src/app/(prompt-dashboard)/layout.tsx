
import React from 'react';
import LayoutClone from './LayoutClone';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutClone>
            {children}

        </LayoutClone>
    );
};

export default layout;