import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import "./style.css";
import useAuth from "./Hooks/useAuth";

export default function Auth() {
  const { sendData, isLoading } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [changeIcon, setChangeIcon] = useState(true);
  function clickIcon() {
    setChangeIcon((prev) => !prev);
  }

  return (
    <div className="formgroup">
      <Form onSubmit={handleSubmit(sendData)}>
        <h3>Kirish</h3>
        <FormGroup>
          <Label>Username</Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="username"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                type="text"
                placeholder="Loginni kiriting"
                className={
                  errors?.hasOwnProperty("username") ? "errorBorder" : ""
                }
              />
            )}
          />
          {errors?.hasOwnProperty("username") && (
            <p className="errors">Loginni kiriting</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Parol</Label>
          <div className="passIcon">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="password"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                  type={changeIcon ? "password" : "text"}
                  placeholder="Parolni kiriting"
                  className={
                    errors?.hasOwnProperty("password") ? "errorBorder" : ""
                  }
                />
              )}
            />
            {changeIcon ? (
              <AiFillEye onClick={clickIcon} />
            ) : (
              <AiFillEyeInvisible onClick={clickIcon} />
            )}
          </div>
          {errors?.hasOwnProperty("password") && (
            <p className="errors">Parolni kiriting</p>
          )}
        </FormGroup>
        <Button disabled={isLoading} color="success">
          Yuborish
        </Button>
      </Form>
    </div>
  );
}
