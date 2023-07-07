import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import InputController from '../../Components/InputController';
import useData from './hooks/useData';
import './style.css';
import { useMutation, useQuery } from '@tanstack/react-query';
import { request } from '../../service';

export default function ControllerInfo() {
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
    mutate,
    isLoading,
  } = useData();

  // const { data, isLoading } = useQuery(
  //   ['BIR'],
  //   () => request.get('https://jsonplaceholder.typicode.com/todos'),
  //   {
  //     select: (dat) => {
  //       return dat?.data;
  //     },
  //     onSuccess: (res) => {
  //       return res;
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //     },
  //   }
  // );

  return (
    <form onSubmit={handleSubmit(clickHandle)} className="form">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Row>
          {main.map(
            ({ type, name, placeholder, size, rules, label, ...props }) => (
              <Col
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
                style={{ padding: '10px 8px' }}
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
          <Col sm={12} style={{ textAlign: 'right' }}>
            <Button type="submit" color="success" className="btn">
              Yuborish
            </Button>
          </Col>
        </Row>
      )}
    </form>
  );
}
