
import dynamic from 'next/dynamic';
import React from 'react';

const CreatePDF = dynamic(() => import('@/components/ui/prompt-dashboard/create-pdf/CreatePDF'), {
    loading: () => <div>Loading...</div>,
    ssr: false,
});

const CreatePDFPage = () => {
    return (
        <div>
            <CreatePDF />
        </div>
    );
};

export default CreatePDFPage;