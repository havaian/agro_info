import React from "react";
import useStatusData from "../../Hooks/usedata";
import { Button, Col, Row } from "reactstrap";
import useData from "../../../Controller/hooks/useData";
import "./style.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
export default function Application() {
  const { data, isLoading } = useStatusData();
  const {
    infos,
    main,
    xisobRaqam,
    umumiyYerTashkilot,
    umumiyYerIjara,
    asosiy,
    smeta,
    xodimlar,
    vakant,
    loyiha,
    oylik,
    daromad,
  } = useData();
  const navigate = useNavigate();

  // Parse the UTC timestamp using dayjs
  const utcTimestamp = data?.updatedAt;
  const originalDate = dayjs(utcTimestamp);
  const formattedDateTime = originalDate.format("HH:mm | DD.MM.YYYY");

  return (
    <div className="application">
      <hr />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Row>
          {data &&
            main.map(({ name, size, label }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={6}
                key={name}
              >
                <p>
                  <b>{label}</b>: {data[name]}
                </p>
              </Col>
            ))}
          <Col sm={12}>
            <hr />
            <h4>Xisob raqamlar</h4>
          </Col>

          {xisobRaqam.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Tashkilot tomonidan foydalanilayotgan yer maydoni</h4>
          </Col>

          {umumiyYerTashkilot.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Ijaraga berilgan yer maydoni</h4>
          </Col>

          {umumiyYerIjara.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Asosiy vositalar</h4>
          </Col>

          {asosiy.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}

          <Col sm={12}>
            <hr />
            <h4>Smeta bo'yicha 2023-yil uchun ajratilgan mablag'</h4>
          </Col>

          {smeta.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Faoliyat yuritayotgan xodimlar soni</h4>
          </Col>

          {xodimlar.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}

          <Col sm={12}>
            <hr />
            <h4>Vakant ish o'rinlar soni</h4>
          </Col>

          {vakant.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={6}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Loyihalar</h4>
          </Col>

          {loyiha.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={12}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>O'rtacha oylik ish xaqqi</h4>
          </Col>

          {oylik.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={12}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Daromadlar bo'yicha</h4>
          </Col>

          {daromad.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={12}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          <Col sm={12}>
            <hr />
            <h4>Byudjetdan tashqari xisob raqamiga kelib tushgan mablag'</h4>
          </Col>

          {infos.map(({ name, size, label }) => (
            <Col
              style={{ padding: "10px 8px" }}
              sm={size?.sm ?? 12}
              md={12}
              key={name}
            >
              <p>
                <b>{label}</b>: {data[name]}
              </p>
            </Col>
          ))}
          {data && (
            <Col style={{ padding: "10px 8px" }} sm={12} md={12}>
              <hr />
              <p>
                <b>Tahrirlangan vaqti:</b> {formattedDateTime}
              </p>
            </Col>
          )}

          <Col sm={12} style={{ textAlign: "right" }}>
            <Button
              onClick={() => navigate("/edit")}
              color="primary"
              className="btn"
            >
              Tahrirlash
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
}
