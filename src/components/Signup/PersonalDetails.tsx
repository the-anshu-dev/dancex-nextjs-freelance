import {
    InboxOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import {
    Button,
    DatePicker,
    DatePickerProps,
    Input,
    Typography,
    message,
  } from "antd";
  import Dragger from "antd/es/upload/Dragger";
  import React, { useEffect } from "react";
  import type { UploadProps } from "antd";
  
  const { TextArea } = Input;
  
  const PersonalDetails = ({ state, setState, setIsNext }: any) => {
    // Handle date change
    const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
      setState((prev: any) => ({
        ...prev,
        dob: dateString,
      }));
    };
  
    // Handle text input change (name, email, city)
    const handleInputChange = (field: string, value: string) => {
      setState((prev: any) => ({
        ...prev,
        [field]: value,
      }));
    };
  
    // Handle textarea change (about yourself)
    const onChangeTextArea = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setState((prev: any) => ({
        ...prev,
        profile: e.target.value,
      }));
    };
  
    // Upload props for Dragger (upload profile)
    const props: UploadProps = {
      name: "file",
      multiple: false,
      maxCount: 1,
      action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          // Set avatar url or name in state here
          setState((prev: any) => ({
            ...prev,
            avatar: info.file.response?.url || info.file.name, // use actual url if backend returns
          }));
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
      },
    };
  
    // Enable Next button only if all fields are filled
    useEffect(() => {
      const allFilled =
        state.name?.trim() !== "" &&
        state.email?.trim() !== "" &&
        state.city?.trim() !== "" &&
        state.dob?.trim() !== "" &&
        state.avatar?.trim() !== "" &&
        state.profile?.trim() !== "";
  
      setIsNext(allFilled);
    }, [state, setIsNext]);
  
    return (
      <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 transition-all duration-300">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Now Let's Add Your Personal Details
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <Typography.Title level={5} className="flex justify-start">
              Full Name <span className="text-red-600">*</span>
            </Typography.Title>
            <Input
              placeholder="Anshu Chaurasia"
              prefix={<UserOutlined />}
              value={state.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
  
          {/* Email */}
          <div className="flex flex-col">
            <Typography.Title level={5} className="flex justify-start">
              Email <span className="text-red-600">*</span>
            </Typography.Title>
            <Input
              placeholder="register@gmail.com"
              prefix={<UserOutlined />}
              type="email"
              value={state.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
  
          {/* Date of Birth */}
          <div className="flex flex-col">
            <Typography.Title level={5} className="flex justify-start">
              Date of Birth <span className="text-red-600">*</span>
            </Typography.Title>
            <DatePicker
              onChange={onChangeDate}
             
              required
            />
          </div>
  
          {/* City */}
          <div className="flex flex-col">
            <Typography.Title level={5} className="flex justify-start">
              City <span className="text-red-600">*</span>
            </Typography.Title>
            <Input
              placeholder="Lucknow"
              prefix={<UserOutlined />}
              value={state.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              required
            />
          </div>
  
          {/* Upload Profile */}
          <div className="flex flex-col">
            <Typography.Title level={5} className="flex justify-start">
              Upload Profile <span className="text-red-600">*</span>
            </Typography.Title>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single upload. Strictly prohibited from uploading company data or other banned files.
              </p>
            </Dragger>
            {state.avatar && (
              <Typography.Text className="mt-2">
                Uploaded: {state.avatar}
              </Typography.Text>
            )}
          </div>
  
          {/* About Yourself */}
          <div className="flex flex-col">
            <Typography.Title level={5} className="flex justify-start">
              About Yourself <span className="text-red-600">*</span>
            </Typography.Title>
            <TextArea
              showCount
              maxLength={100}
              onChange={onChangeTextArea}
              placeholder="Tell us about yourself"
              style={{ height: 172, resize: "none" }}
              value={state.profile}
              required
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default PersonalDetails;
  