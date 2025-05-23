
import GradientBtn from "@/components/shared/GradientBtn";
import {  Form, Input } from "antd";
import React from "react";

const ResetPassword = ({setIsModalOpen}:{setIsModalOpen:(open:boolean)=>void}) => { 
    const onFinish = async() => { 
        setIsModalOpen(false)
    }; 

    return (
        <div>

        <div className=" mb-6  flex flex-col items-center justify-center "> 
          <div className="flex items-center justify-center lg:mb-6 mb-3">
            <img src="/logo.png" alt="Logo" className="lg:h-[32px] h-[24px] w-auto" />
          </div>
          <h1 className="lg:text-[25px] text-[22px] font-semibold text-[#333333] mb-2 ">Set a new password </h1> 
          <div className="  lg:w-[70%] w-full "> <p className="text-[#5C5C5C] text-center lg:text-base text-xs "> Your new password must be different from previous passwords. </p> </div> 
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
        >

            <Form.Item
              name="newPassword" 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
              
                className="font-semibold "
              >
                New Password
              </p>}
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password
                type="password"
                placeholder="Enter New password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "40px",
                  background: "white",
                  borderRadius: "50px",
                  outline: "none",
                }} 
                className="mb-6"
              />
            </Form.Item>       
           
            <Form.Item
              style={{ marginBottom: 0 }} 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
                className="font-semibold"
              >
                Confirm Password
              </p>}
              name="confirmPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Confirm password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "40px",
                  background: "white",
                  borderRadius: "50px",
                  outline: "none",
                }} 
                className="mb-6"
              />
            </Form.Item>
      

            <Form.Item style={{marginBottom: 0}}>
            <GradientBtn className="w-full h-[40px]  font-[400px] "> Update Password </GradientBtn>
          </Form.Item>


         
        </Form>


    </div>
    );
};

export default ResetPassword;