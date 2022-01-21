import React, { Fragment } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import {useMutation} from "@apollo/client"
import {REGISTER} from "../../../gql/user"
import "./RegisterForm.scss";

function RegisterForm(props) {
  const { setShowLogin } = props;
  const [register] = useMutation(REGISTER)

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Name is obligatory"),
        username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "No spaces").required("Usename is required"),
        email: Yup.string().email("Email is invalid").required("Email is required"),
        password: Yup.string().required("Password required").oneOf([Yup.ref("repeatPassword")], "Passwords do NOT match"),
        repeatPassword:Yup.string().required("Password required").oneOf([Yup.ref("password")], "Passwords do NOT match")
    }),
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.repeatPassword;

        await register({
          variables: {
            input: newUser,
          },
        });
        toast.success("User registered successfully");
        setShowLogin(true);
      } catch (error) {
        toast.error(error.message)
        console.log(error)
        
      }
    },
  });

  return (
    <Fragment>
      <h2 className="register-form-title">
        Sign up to see your friends' pictures and videos.
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Name and last name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          type="text"
          placeholder="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />
        <Form.Input
          type="password"
          placeholder="Password again"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword && true}
        />
        <Button type="submit" className="btn-submit">
          Sign Up
        </Button>
        <Button type="button" onClick={formik.handleReset}>
            Reset form
        </Button>
      </Form>
    </Fragment>
  );
}

export default RegisterForm;
