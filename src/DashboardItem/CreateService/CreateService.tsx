import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useCreateServiceMutation } from "@/redux/Api/serviceApi";
import Swal from "sweetalert2";

const { TextArea } = Input;

const CreateService: React.FC = () => {
  const [form] = Form.useForm();

  const [addService] = useCreateServiceMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    try {
      const createService = await addService(values).unwrap();
      form.resetFields();
      console.log("service created Azir", createService);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Created New Service !",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Failed to Create service. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="bg-slate-600 rounded-md py-8 px-12">
      <h2 className="text-white font-semibold text-2xl">Create Service</h2>
      <Form
        form={form}
        name="add-service"
        layout="vertical"
        onFinish={onFinish}
      >
        {/* Service Name */}
        <Form.Item
          label="Service Name"
          name="name"
          rules={[
            { required: true, message: "Please enter the service name!" },
          ]}
        >
          <Input placeholder="Enter service name" />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <TextArea rows={4} placeholder="Enter service description" />
        </Form.Item>

        {/* Price */}
        <Form.Item
          label="Price (€)"
          name="price"
          rules={[{ required: true, message: "Please enter the price!" }]}
        >
          <InputNumber
            min={1}
            placeholder="Enter price"
            style={{ width: "100%" }}
          />
        </Form.Item>

        {/* Duration */}
        <Form.Item
          label="Duration (minutes)"
          name="duration"
          rules={[{ required: true, message: "Please enter the duration!" }]}
        >
          <InputNumber
            min={10}
            placeholder="Enter duration"
            style={{ width: "100%" }}
          />
        </Form.Item>

        {/* Image URL */}
        <Form.Item
          label="Image URL"
          name="image"
          rules={[{ required: true, message: "Please enter the image URL!" }]}
        >
          <Input placeholder="Enter image URL" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            className="bg-indigo-800 text-xl font-semibold"
            htmlType="submit"
            block
          >
            Add Service
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateService;
