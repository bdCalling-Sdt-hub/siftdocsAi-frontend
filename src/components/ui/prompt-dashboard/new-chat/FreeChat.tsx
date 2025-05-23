

const data = [
    {
        id: 1,
        question: "From here the user should have the ability to free chat with AI, load a single document and chat with that document or create a project which will bring them to the “My Projects” page allowing them to create a new project by uploading the data sources.",
        answer: <div className="text-[#606060] text-[12px] space-y-2 tracking-wide">  
            <div> Describing a system where users can interact with AI in three ways: </div>
            <div> Free Chat with AI – Users can directly chat with the AI without uploading any documents or creating a project. This is a general-purpose AI interaction. </div>
            <div>  Chat with a Single Document – Users can upload one document and engage with the AI to extract insights, summarize, or ask specific questions related to that document. </div>
            <div>     Create a Project – This option takes users to the &quot;My Projects&quot; page, where they can set up a new project by uploading multiple data sources. This could be useful for managing multiple documents, datasets, or structured files. 

            </div>

            <div className="font-medium">  Implementation Considerations: </div>
            <div className=" pb-3">       User Flow: The system should have a clear way to navigate between these options, such as a home screen with three distinct buttons. </div>
            <div className=" pb-3">Data Management: If users create a project, they should have a structured way to manage and revisit their uploaded data sources. </div>

            <div className=" pb-3">  AI Chat UX: For both free chat and document chat, a seamless interface with a text input, file viewer (for documents), and response history would be helpful. </div>

            <div className=" pb-3">Security: Implementing secure authentication and authorization would be crucial to protect user data and privacy. </div>

            <div>If you’re looking for examples of similar implementations, you might want to check out: </div>
            <div>ChatGPT – For free AI chat experience</div>
            <div>Chat with PDFs – Example of interacting with a single document</div>
            <div> Notion AI – Example of integrating AI with structured document-based workflows</div>
        </div>
    }
]
const FreeChat = () => {
    return (
        <div>
         <div> 
            {
                data.map((item ) => (
                    <div key={item.id} className="w-full flex flex-col gap-y-10">  
                     <div className=" flex items-center justify-end"> 
                        <p className=" bg-[#FBFBFB] text-[#606060] text-[12px] px-6 py-4 lg:w-[630px] w-[95%] tracking-wide rounded-b-3xl rounded-tl-3xl rounded-tr-none "> {item.question}</p>
                     </div> 

                     <div className=" flex items-center justify-start relative">   
                        <div > 
                        <div className="absolute -top-3 left-0">   <img src="/logoIcon.png" alt="" style={{ width: "17px", height: "19px"}} />  </div>  

                        <p className=" bg-[#F1F1F1] text-[#606060] text-[12px] px-6 py-4 lg:w-[630px] w-[95%] tracking-wide rounded-b-3xl rounded-tl-none rounded-tr-3xl "> {item.answer}</p>

                        </div>
                      
                     </div>

                    </div> 
                ))
            }
         </div>
        </div>
    );
};

export default FreeChat;