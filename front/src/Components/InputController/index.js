import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, Label } from 'reactstrap';
import './index.css';

export default function InputController({ control, rules, name, ...props }) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, formState: { errors } }) => (
          <>
            <Label for={name} className="labelInfo">
              {props.label}
            </Label>
            <Input {...field} {...props} invalid={errors[name] ? true : false}>
              {props?.data &&
                props?.data?.map((item, index) => (
                  <option value={item?.value} key={index}>
                    {item?.label}
                  </option>
                ))}
            </Input>
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => <p>{message}</p>}
            />
          </>
        )}
      />
    </>
  );
}
