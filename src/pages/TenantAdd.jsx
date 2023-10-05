import { Button, Form, Input, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TenantAdd() {
  const [formInstance] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (valueForm) => {
    console.log(valueForm);
    axios
      .post(
        "https://backend-kantin-umn.fly.dev/admin/tenant/register",
        valueForm,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImthbnRpbi51bW5AZ21haWwuY29tIiwiaWF0IjoxNjk2NDg2MjY0LCJleHAiOjE2OTcwOTEwNjR9.nt_7kdZ6BmcawsJa0wNkMNvQod9thG3J9c-Ybo7PHG8`,
          },
        }
      )
      .then(() => {
        navigate(`/`);
      })
      .catch((err) => {
        message.error(err.response.data.message);
      });
  };

  return (
    <>
      <Form onFinish={onFinish} form={formInstance}>
        <Form.Item name="email" label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item name="full_name" label="Full Name">
          <Input type="text" />
        </Form.Item>
        <Form.Item name="location" label="location">
          <Input type="text" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TenantAdd;
