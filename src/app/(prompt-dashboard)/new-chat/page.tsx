
import dynamic from 'next/dynamic';
import React from 'react';


const NewChat = dynamic(() => import('@/components/ui/prompt-dashboard/new-chat/NewChat'), {
    loading: () => <div>Loading...</div>,
    ssr: false,
});
const NewChatPage = () => {
    return (
        <div>
            <NewChat />
        </div>
    );
};

export default NewChatPage;