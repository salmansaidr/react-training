/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row } from "antd";
import { Meta } from "antd/lib/list/Item";

function TenantDetail() {
  const { id } = useParams();
  const [tenant, setTenant] = useState({});

  useEffect(() => {
    axios
      .get(`https://backend-kantin-umn.fly.dev/tenant/${id}`)
      .then((data) => {
        setTenant(data?.data?.data);
        console.log(data?.data?.data);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {tenant?.full_name?.toUpperCase()}
      </h1>
      <p style={{ textAlign: "center" }}>
        Now {tenant?.is_open ? "Open!" : "Closed!"}
      </p>
      <h2>Our Menu</h2>
      {tenant?.tenant_menu?.map((menu) => {
        return (
          <>
            <h3 style={{ marginTop: "30px" }}>{menu?.category?.title}</h3>
            <Row key={menu?._id} gutter={[8, 16]}>
              {menu?.menu.map((men) => {
                return (
                  <Card
                    key={men?._id}
                    style={{ width: 240 }}
                    cover={<img alt="example" src={men?.image} />}
                  >
                    <Meta
                      key={men?._id}
                      title={men?.title}
                      description={men?.description}
                    />
                  </Card>
                );
              })}
            </Row>
          </>
        );
      })}
    </div>
  );
}

export default TenantDetail;
