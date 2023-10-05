/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Col, Layout, Rate, Row } from "antd";
import { Meta } from "antd/lib/list/Item";
import { useEffect, useState } from "react";
// import styled, { css } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const { Content } = Layout;

// const colors = [
//   { id: 1, bgColor: "#a84a32" },
//   { id: 2, bgColor: "#a6a832" },
//   { id: 3, bgColor: "#32a832" },
//   { id: 4, bgColor: "#32a89e" },
//   { id: 5, bgColor: "#323ca8" },
//   { id: 6, bgColor: "#a832a8" },
// ];

// const DivWrapper = styled(Col)`
//   ${({ isganjil }) =>
//     isganjil
//       ? css`
//           background-color: red;
//         `
//       : css`
//           background-color: green;
//         `}
// `;

function Contents() {
  const [dataTenant, setDataTenant] = useState([]);
  const navigate = useNavigate();
  // const [counter, setCounter] = useState(0);
  // const [contentColor, setContentColor] = useState("white");

  // function addCounter() {
  //   const currentCounter = counter;
  //   setCounter(currentCounter + 1);
  // }

  // function minCounter() {
  //   if (counter - 1 < 0) {
  //     return;
  //   }

  //   const currentCounter = counter;
  //   setCounter(currentCounter - 1);
  // }

  // function isGanjil(val) {
  //   return val % 2;
  // }

  // useEffect(() => {
  //   document.body.style.backgroundColor = contentColor;
  // }, [contentColor]);

  useEffect(() => {
    axios.get("https://backend-kantin-umn.fly.dev/tenant").then((data) => {
      setDataTenant(data?.data?.data);
      console.log(data?.data?.data);
    });
  }, []);

  return (
    <Content style={{ padding: "50px", backgroundColor: "white" }}>
      <Row gutter={[0, 16]}>
        {/* {colors.map((color) => {
          return (
            <DivWrapper
              onClick={() => setContentColor(color?.bgColor)}
              key={color.id}
              span={12}
              // style={{ backgroundColor: color.bgColor }}
              isganjil={isGanjil(color.id)}
            >
              Grid {color.id}
            </DivWrapper>
          );
        })} */}
        {dataTenant.map((tenant) => {
          return (
            <Col key={tenant._id} span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={tenant.profile_image} />}
                onClick={() => navigate(`/tenant/${tenant?._id}`)}
              >
                <Meta
                  title={tenant.full_name}
                  description={tenant.description}
                />
                <Rate value={tenant.rating} />
                <p style={{ marginTop: "10px" }}>
                  See all review ({tenant.total_review})
                </p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Content>
  );
}

export default Contents;
