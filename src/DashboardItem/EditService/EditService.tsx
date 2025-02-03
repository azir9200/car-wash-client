/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useEditServiceMutation,
  useGetServiceDetailsQuery,
} from "@/redux/Api/serviceApi";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, InputNumber } from "antd";
import Swal from "sweetalert2";
import { useEffect } from "react";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch service details by ID
  const {
    data: serviceResponse,
    // error,
    // isLoading: isFetching,
  } = useGetServiceDetailsQuery(id || "");
  const [editService, { isLoading }] = useEditServiceMutation();

  const service = serviceResponse?.data;
  const [form] = Form.useForm();

  // Set initial form values when service data is fetched
  useEffect(() => {
    if (service) {
      form.setFieldsValue({
        name: service.name,
        description: service.description,
        price: service.price,
        duration: service.duration,
        image: service.image,
      });
    }
  }, [service, form]);

  // Show loading or error state
  // if (isFetching) return <div>Loading...</div>;
  // if (error) return <div>Error: Unable to fetch service details.</div>;

  // Handle form submission
  const handleSubmit = async (values: any) => {
    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Invalid service ID.",
      });
      return;
    }

    // Ensure values are correctly formatted to meet Zod validation
    const updatedService = {
      name: values.name || undefined,
      description: values.description || undefined,
      price: values.price ? Number(values.price) : undefined,
      duration: values.duration ? Number(values.duration) : undefined,
      image: values.image || undefined,
    };

    try {
      const response = await editService({ id, data: updatedService }).unwrap();
      console.log("Response:", response);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Service updated successfully!",
      });

      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error updating service:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.data?.message || "Failed to update service. Please try again.",
      });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: "20px" }}>
      <h2>Edit Service</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          name: "",
          description: "",
          price: 0,
          duration: 0,
          image: "",
        }}
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
          rules={[
            {
              required: true,
              message: "Please enter the service description!",
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Enter service description" />
        </Form.Item>

        {/* Price */}
        <Form.Item
          label="Price ($)"
          name="price"
          rules={[{ required: true, message: "Please enter a valid price!" }]}
        >
          <InputNumber placeholder="Enter service price" min={0} />
        </Form.Item>

        {/* Duration */}
        <Form.Item
          label="Duration (minutes)"
          name="duration"
          rules={[
            { required: true, message: "Please enter a valid duration!" },
          ]}
        >
          <InputNumber placeholder="Enter service duration" min={1} />
        </Form.Item>

        {/* Image URL */}
        <Form.Item
          label="Image URL"
          name="image"
          rules={[
            { required: true, message: "Please enter a valid image URL!" },
          ]}
        >
          <Input placeholder="Enter image URL" />
        </Form.Item>

        {/* Action Buttons */}
        <Form.Item>
          <Button
            type="default"
            onClick={() => navigate("/admin/services")}
            style={{ marginRight: 10 }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditService;
