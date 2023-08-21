import React from "react";
import { Button, Col, Row } from "reactstrap";
import InputController from "../../Components/InputController";
import useData from "./hooks/useData";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../service";
import { useLocation, useNavigate } from "react-router-dom";

export default function ControllerInfo() {
  const navigate = useNavigate();
  const {
    infos,
    handleSubmit,
    control,
    main,
    xisobRaqam,
    umumiyYerTashkilot,
    clickHandle,
    umumiyYerIjara,
    asosiy,
    smeta,
    xodimlar,
    vakant,
    loyiha,
    oylik,
    daromad,
    reset,
    isLoading,
  } = useData();

  const { pathname } = useLocation();

  useQuery(
    ["BIR"],
    () => request.get("/organisation/get/" + localStorage.getItem("statStir")),
    {
      select: (dat) => {
        return dat?.data;
      },
      onSuccess: (res) => {
        if (res.completed == true && !pathname?.includes("/edit")) {
          navigate("/status");
        }
        const date = res?.tashkil_yili.split(".");
        console.log(date);
        reset({
          ...res,
          tashkil_yili: res?.tashkil_yili?.includes("-")
            ? res?.tashkil_yili
            : `${date[2]}-${date[1]}-${date[0]}`,
          tashkilot_raxbari_nomeri:
            res?.tashkilot_raxbari_nomeri?.length > 8
              ? res?.tashkilot_raxbari_nomeri
              : `998${res.tel_raqami}`,
        });
        return res;
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <form onSubmit={handleSubmit(clickHandle)} className="form">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Row>
          {main.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Xisob raqamlar</h4>
          </Col>

          {xisobRaqam.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Tashkilot tomonidan foydalanilayotgan yer maydoni</h4>
          </Col>

          {umumiyYerTashkilot.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Ijaraga berilgan yer maydoni</h4>
          </Col>

          {umumiyYerIjara.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Asosiy vositalar</h4>
          </Col>

          {asosiy.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}

          <Col sm={12}>
            <hr />
            <h4>Smeta bo'yicha 2023-yil uchun ajratilgan mablag'</h4>
          </Col>

          {smeta.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Faoliyat yuritayotgan xodimlar soni</h4>
          </Col>

          {xodimlar.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}

          <Col sm={12}>
            <hr />
            <h4>Vakant ish o'rinlar soni</h4>
          </Col>

          {vakant.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Loyihalar</h4>
          </Col>

          {loyiha.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>O'rtacha oylik ish xaqqi</h4>
          </Col>

          {oylik.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Daromadlar bo'yicha</h4>
          </Col>

          {daromad.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12}>
            <hr />
            <h4>Byudjetdan tashqari xisob raqamiga kelib tushgan mablag'</h4>
          </Col>

          {infos.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: "10px 8px" }}
                sm={size?.sm ?? 12}
                md={size?.md ?? 12}
                xl={size?.xl ?? 12}
                key={name}
              >
                <InputController
                  label={label}
                  name={name}
                  type={type}
                  {...props}
                  placeholder={placeholder}
                  control={control}
                  rules={rules}
                />
              </Col>
            )
          )}
          <Col sm={12} style={{ textAlign: "right" }}>
            <Button type="submit" color="success" className="btn">
              Yuborish
            </Button>
          </Col>
        </Row>
      )}
    </form>
  );
}
