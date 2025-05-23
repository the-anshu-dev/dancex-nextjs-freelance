// import {
//   InboxOutlined,
//   UserOutlined,
//   LinkOutlined,
//   PhoneOutlined,
// } from "@ant-design/icons";
// import {
//   Button,
//   DatePicker,
//   DatePickerProps,
//   Input,
//   Typography,
//   message,
//   Upload,
//   Form,
// } from "antd";
// import Dragger from "antd/es/upload/Dragger";
// import React from "react";
// import type { UploadProps } from "antd";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

// const { TextArea } = Input;

// type SocialField = {
//   key: string;
//   label: string;
//   placeholder: string;
//   icon: React.ReactNode;
//   type: "url" | "phone";
// };

// const socialFields: SocialField[] = [
//   {
//     key: "instagram",
//     label: "Instagram",
//     placeholder: "Enter your Instagram URL",
//     icon: <LinkOutlined />,
//     type: "url",
//   },
//   {
//     key: "facebook",
//     label: "Facebook",
//     placeholder: "Enter your Facebook URL",
//     icon: <LinkOutlined />,
//     type: "url",
//   },
//   {
//     key: "twitter",
//     label: "Twitter",
//     placeholder: "Enter your Twitter URL",
//     icon: <LinkOutlined />,
//     type: "url",
//   },
//   {
//     key: "whatsapp",
//     label: "WhatsApp Number",
//     placeholder: "Enter your WhatsApp number",
//     icon: <PhoneOutlined />,
//     type: "phone",
//   },
//   {
//     key: "emailId",
//     label: "Email Address",
//     placeholder: "Enter your email address",
//     icon: <MdOutlineAlternateEmail />,
//     type: "phone",
//   },
// ];

// const SocialDetails= ({ state, setState, setIsNext }:any) => {
  
  

//   return (
//     <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 transition-all duration-300">
//       <Typography.Title level={2} className="mb-6 text-center">
//         Now Connect Your Social Accounts
//       </Typography.Title>

//       <Form
//         name="social_details_form"
//         layout="vertical"
//         onFinish={(values) => {
//           console.log("Submitted values:", values);
//           message.success("Form submitted successfully!");
//         }}
//       >
//         {/* Static social fields */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {socialFields.map(({ key, label, placeholder, icon, type }: any) => (
//             <Form.Item
//               key={key}
//               name={key}
//               label={label}
//               rules={[
//                 { required: false },
//                 ...(type === "url"
//                   ? [
//                       {
//                         type: "url",
//                         message: "Please enter a valid URL",
//                       },
//                     ]
//                   : []),
//               ]}
//             >
//               <Input
//                 type={type === "phone" ? "tel" : "url"}
//                 placeholder={placeholder}
//                 prefix={icon}
//               />
//             </Form.Item>
//           ))}
//           {/* Dynamic custom social fields using Form.List */}
//           <div className="mt-7">
//             <Form.List name="customSocials">
//               {(fields, { add, remove }) => (
//                 <>
//                   {fields.map(({ key, name, ...restField }) => (
//                     <div
//                       key={key}
//                       style={{
//                         display: "flex",
//                         marginBottom: 8,
//                         alignItems: "center",
//                       }}
//                     >
//                       <Form.Item
//                         {...restField}
//                         name={[name, "networkName"]}
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please input social network name",
//                           },
//                         ]}
//                         style={{ flex: 1, marginRight: 8 }}
//                       >
//                         <Input placeholder="Social Network Name (e.g. Github)" />
//                       </Form.Item>

//                       <Form.Item
//                         {...restField}
//                         name={[name, "url"]}
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please input URL or phone number",
//                           },
//                           {
//                             type: "url",
//                             message: "Please enter a valid URL",
//                           },
//                         ]}
//                         style={{ flex: 2, marginRight: 8 }}
//                       >
//                         <Input placeholder="URL or phone number" />
//                       </Form.Item>

//                       <MinusCircleOutlined
//                         onClick={() => remove(name)}
//                         style={{ color: "red", fontSize: 20 }}
//                       />
//                     </div>
//                   ))}

//                   <Form.Item>
//                     <Button
//                       type="dashed"
//                       onClick={() => add()}
//                       block
//                       icon={<PlusOutlined />}
//                     >
//                       Add Custom Social Network
//                     </Button>
//                   </Form.Item>
//                 </>
//               )}
//             </Form.List>
//           </div>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default SocialDetails;











import React, { useEffect } from "react";
import {
  InboxOutlined,
  UserOutlined,
  LinkOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Input,
  Typography,
  message,
  Form,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const socialFields = [
  { key: "instagram", label: "Instagram", placeholder: "Enter your Instagram URL", icon: <LinkOutlined />, type: "url" },
  { key: "facebook", label: "Facebook", placeholder: "Enter your Facebook URL", icon: <LinkOutlined />, type: "url" },
  { key: "twitter", label: "Twitter", placeholder: "Enter your Twitter URL", icon: <LinkOutlined />, type: "url" },
  { key: "whatsapp", label: "WhatsApp Number", placeholder: "Enter your WhatsApp number", icon: <PhoneOutlined />, type: "phone" },
  { key: "emailId", label: "Email Address", placeholder: "Enter your email address", icon: <MdOutlineAlternateEmail />, type: "phone" },
];

const SocialDetails = ({ state, setState, setIsNext }: any) => {
  const [form] = Form.useForm();

  // When form values change, update social array in state
  const onValuesChange = (_: any, allValues: any) => {
    // Extract static socials from form values
    const staticSocials = socialFields
      .map(({ key, label }) => {
        const value = allValues[key];
        if (value && value.trim() !== "") {
          return { networkName: label, value: value.trim() };
        }
        return null;
      })
      .filter(Boolean);

    // Extract custom socials from form values
    const customSocials = allValues.customSocials || [];

    // Merge static and custom socials
    const combinedSocials = [...staticSocials, ...customSocials];

    // Update state with new social array
    setState((prevState: any) => ({
      ...prevState,
      social: combinedSocials,
    }));

    // Optionally, enable next button when at least one social is present
    setIsNext(combinedSocials.length > 0);
  };

  // Optional: populate form if you want to load existing state.social
  useEffect(() => {
    const initialStaticValues:any = {};
    socialFields.forEach(({ key, label }) => {
      const found = state.social.find((item: any) => item.networkName === label);
      if (found) initialStaticValues[key] = found.value;
    });

    // Extract custom socials (those not matching static)
    const initialCustomSocials = state.social.filter(
      (item: any) => !socialFields.some(({ label }) => label === item.networkName)
    );

    form.setFieldsValue({
      ...initialStaticValues,
      customSocials: initialCustomSocials,
    });
  }, [state.social, form]);


  
  return (
    <div className="transition-all duration-300">
      <Form
        form={form}
        name="social_details_form"
        layout="vertical"
        onValuesChange={onValuesChange}
        onFinish={(values) => {
          message.success("Form submitted successfully!");
        }}
      >
        <div className="grid grid-cols-1  gap-4 md:grid-cols-2">
          {socialFields.map(({ key, label, placeholder, icon, type }) => (
            <Form.Item
              key={key}
              name={key}
              label={label}
              rules={[
                { required: false },
                ...(type === "url"
                  ? [
                      {
                        type: "url",
                        message: "Please enter a valid URL",
                      },
                    ]
                  : []),
              ]}
            >
              <Input
                type={type === "phone" ? "tel" : "url"}
                placeholder={placeholder}
                prefix={icon}
              />
            </Form.Item>
          ))}

          <div className=" mt-7">
            <Form.List name="customSocials">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      style={{ display: "flex", marginBottom: 8, alignItems: "center" }}
                    >
                      <Form.Item
                        {...restField}
                        name={[name, key]}
                        rules={[
                          {
                            required: true,
                            message: "Please input social network name",
                          },
                        ]}
                        style={{ flex: 1, marginRight: 8 }}
                      >
                        <Input placeholder="Social Network Name (e.g. Github)" />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "value"]}
                        rules={[
                          {
                            required: true,
                            message: "Please input URL or phone number",
                          },
                          {
                            type: "url",
                            message: "Please enter a valid URL",
                          },
                        ]}
                        style={{ flex: 2, marginRight: 8 }}
                      >
                        <Input placeholder="URL or phone number" />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        style={{ color: "red", fontSize: 20 }}
                      />
                    </div>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Custom Social Network
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SocialDetails;
