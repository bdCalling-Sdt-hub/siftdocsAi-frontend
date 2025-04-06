

import GradientBtn from "@/components/shared/GradientBtn";
import TextInput from "@/components/shared/TextInput";
import { Checkbox, ConfigProvider, Form, Input } from "antd";

import React from "react";

const Register = ({ openLogin , setIsModalOpen }: { openLogin: () => void , setIsModalOpen:(open:boolean)=>void }) => {


  const onFinish = async () => {
    setIsModalOpen(false)
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-center"> 
      <div  className="flex items-center justify-center mb-4"> 
          <img src="/logo.png" alt="Logo" className="h-[32px] w-auto" /> 
          </div>
        <h1 className="text-[25px] font-semibold mb-3 ">Register Now</h1>  
        <p className="text-[#5C5C5C] text-center "> To proceed with your application, we first need some information from you</p>
      </div>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
          components: {
            Input: {
              //   borderColor: "#d9d9d9",  
              hoverBorderColor: "#d9d9d9",
            },
          },
        }}
      >
        <Form onFinish={onFinish} layout="vertical">
          <TextInput name="name" label="Full Name" />
          <TextInput name="email" label="Email" />
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
            className="mb-4"
          >
            <Input.Password
              placeholder="Enter password"
              className="border border-gray-300 h-[40px] bg-white rounded-full"
              style={{ borderRadius: "50px" }}
            />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator(_, value) {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must agree to continue!"));
                },
              },
            ]}
          >
            <Checkbox>
              I agree with terms of service and privacy policy
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <GradientBtn className="w-full h-[40px]  font-[400px] "> Sign Up</GradientBtn>
          </Form.Item>
        </Form>
      </ConfigProvider>

      <div className="flex items-center justify-center gap-1 py-0">
        <p className="text-[#636363]">Have an account?</p>
        <div className="text-primary font-semibold cursor-pointer" onClick={openLogin}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default Register;
