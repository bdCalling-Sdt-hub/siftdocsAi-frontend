"use client";
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


const data = [
    {
        id: 1,
        question: "shortly report on it ",
        answer: <div className="text-[#606060] text-[12px] space-y-2 tracking-wide">

            <p> Free Chat with AI – Users can directly chat with the AI without uploading any documents or creating a project. This is a general-purpose AI interaction. </p>
            <p>  Chat with a Single Document – Users can upload one document and engage with the AI to extract insights, summarize, or ask specific questions related to that document. </p>
            <p>     Create a Project – This option takes users to the &quot;My Projects&quot; page, where they can set up a new project by uploading multiple data sources. This could be useful for managing multiple documents, datasets, or structured files. </p>

            <p className="font-medium">  Implementation Considerations: </p>
            <p className=" pb-3">       User Flow: The system should have a clear way to navigate between these options, such as a home screen with three distinct buttons. </p>
            <p className=" pb-3">Data Management: If users create a project, they should have a structured way to manage and revisit their uploaded data sources. </p>

            <p className=" pb-3">  AI Chat UX: For both free chat and document chat, a seamless interface with a text input, file viewer (for documents), and response history would be helpful. </p>

            <p className=" pb-3">Security: Implementing secure authentication and authorization would be crucial to protect user data and privacy. </p>

            <p>If you’re looking for examples of similar implementations, you might want to check out: </p>
            <p>ChatGPT – For free AI chat experience</p>
            <p>Chat with PDFs – Example of interacting with a single document</p>
            <p> Notion AI – Example of integrating AI with structured document-based workflows</p>
        </div>
    }
]
const ChatWithDocument = () => {
    return (

        <div>
            {
                data.map((item) => (
                    <div key={item.id} className="w-full flex flex-col gap-y-10">
                        <div className=" flex items-center justify-end">
                            <div className=" bg-[#FBFBFB] text-[#606060] text-[12px] px-6 py-4 w-[630px] tracking-wide rounded-b-3xl rounded-tl-3xl rounded-tr-none ">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src="/logoIcon.png" alt="" style={{ width: "42px", height: "42px" }} />
                                    </div>
                                    <div className="flex flex-col gap-0">
                                        <p className="text-[#414141] text-[14px]"> SiftDocs.pdf </p>
                                        <p className="text-[#B6B6B6] text-[12px]">PDF</p>
                                    </div>
                                </div>

                                <p className=" text-[#606060] text-[12px] mt-2">  {item.question} </p>  </div>
                        </div>

                        <div className=" flex items-center justify-start relative">
                            <div >
                                <div className="absolute -top-3 left-0">   <img src="/logoIcon.png" alt="" style={{ width: "17px", height: "19px" }} />  </div>


                                <div className="bg-[#F1F1F1] text-[#606060] text-[12px] px-6 py-4 w-full tracking-wide rounded-b-3xl rounded-tl-none rounded-tr-3xl flex lg:flex-row flex-col items-center gap-[60px]">
                                    <div className="lg:w-1/2 w-full">
                                        <div className='w-full'>
                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                                <div
                                                    style={{
                                                        // border: '1px solid rgba(0, 0, 0, 0.3)', 
                                                        height: '500px',
                                                        width: '100%'
                                                    }}
                                                >
                                                    <Viewer fileUrl="/example.pdf" 
                                                     theme={{
                                                        theme: 'auto'
                                                    }}
                                                        defaultScale={0.95}
                                                        renderLoader={(percentages: number) => (
                                                            <div style={{ width: '100%' }}>
                                                                Loading... ({Math.round(percentages)}%)
                                                            </div>
                                                        )} />
                                                </div>
                                            </Worker>

                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 w-full pe-5"> {item.answer} </div>
                                </div>


                            </div>

                        </div>

                    </div>
                ))
            }
        </div>

    );
};

export default ChatWithDocument;