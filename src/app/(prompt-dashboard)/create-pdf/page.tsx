import CreatePDF from '@/components/ui/prompt-dashboard/create-pdf/CreatePDF';
import React, { Suspense } from 'react';

const CreatePDFPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <CreatePDF />
            </Suspense>
        </div>
    );
};

export default CreatePDFPage;