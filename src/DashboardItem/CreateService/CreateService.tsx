/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Form, Input, InputNumber, Card } from "antd";
import { useCreateServiceMutation } from "@/redux/Api/serviceApi";
import Swal from "sweetalert2";

const { TextArea } = Input;

const CreateService: React.FC = () => {
  const [form] = Form.useForm();
  const [addService] = useCreateServiceMutation();

  // Handle form submission
  const onFinish = async (values: any) => {
    try {
      const createService = await addService(values).unwrap();
      form.resetFields();
      console.log("Service created Azir", createService);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Created New Service!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "top-start",
        icon: "error",
        title: "Failed to create service. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-lg shadow-lg rounded-lg bg-white p-8">
        <h2 className="text-gray-800 font-bold text-3xl text-center mb-6">
          Create Service
        </h2>

        <Form
          form={form}
          name="add-service"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* Service Name */}
          <Form.Item
            label={
              <span className="text-gray-700 font-medium">Service Name</span>
            }
            name="name"
            rules={[
              { required: true, message: "Please enter the service name!" },
            ]}
          >
            <Input
              placeholder="Enter service name"
              className="rounded-md py-2 px-4 border-gray-300 focus:ring-indigo-500"
            />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label={
              <span className="text-gray-700 font-medium">Description</span>
            }
            name="description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <TextArea
              rows={4}
              placeholder="Enter service description"
              className="rounded-md border-gray-300 focus:ring-indigo-500"
            />
          </Form.Item>

          {/* Price */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Price (€)</span>}
            name="price"
            rules={[{ required: true, message: "Please enter the price!" }]}
          >
            <InputNumber
              min={1}
              placeholder="Enter price"
              className="w-full rounded-md border-gray-300 focus:ring-indigo-500"
            />
          </Form.Item>

          {/* Duration */}
          <Form.Item
            label={
              <span className="text-gray-700 font-medium">
                Duration (minutes)
              </span>
            }
            name="duration"
            rules={[{ required: true, message: "Please enter the duration!" }]}
          >
            <InputNumber
              min={10}
              placeholder="Enter duration"
              className="w-full rounded-md border-gray-300 focus:ring-indigo-500"
            />
          </Form.Item>

          {/* Image URL */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Image URL</span>}
            name="image"
            rules={[{ required: true, message: "Please enter the image URL!" }]}
          >
            <Input
              placeholder="Enter image URL"
              className="rounded-md py-2 px-4 border-gray-300 focus:ring-indigo-500"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300"
              htmlType="submit"
            >
              Add Service
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateService;
