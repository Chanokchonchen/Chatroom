import React, { useEffect } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { useHistory, useParams } from "react-router-dom";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import logowhite from "../pic/Logo_White.png"

interface FormValue {
  password: string,
  confirmPassword: string
}
interface MyFormProps {
  password?: string,
  confirmPassword?: string
  handleSubmit: (form: FormValue) => void
}

const InnerFormRepassword = (props: FormikProps<FormValue>) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F55E61"
  }, [])
  const {
    touched,
    errors,
    isSubmitting,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div style={{ padding: "2% 4%" }}>
      <Row style={{ color: "white" }} noGutters={true}>
        <Col lg={7} style={{ padding: "7% 5%",textAlign: "left"}}>
          <FormLabel error={
                touched.password && Boolean(errors.password)
              }
              style={{ fontSize: "2rem", color: "white" }}>
                New Password
          </FormLabel>
          <br /><br />
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" style={{ float: "left", backgroundColor: "white" }}>
              <TextField
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={values.password}
                placeholder="Enter your new password"
                type="password"
                style={{ width: "450px" }}
              />
            </FormControl>
            <br /><br /><br /><br />
            <FormLabel error={
                touched.password && Boolean(errors.password)
              }
              style={{ fontSize: "2rem", color: "white" }}>
                New Password
            </FormLabel>
            <br /><br />
            <FormControl component="fieldset" style={{ float: "left", backgroundColor: "white" }}>
              <TextField
                id="confirmPassword"
                placeholder="Confirm your new password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.confirmPassword ? errors.confirmPassword : ""
                }
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                style={{ width: "450px" }}
              />
            </FormControl>
            <br /><br /><br /><br /><br /><br /><br />
            <Button variant="light" size="lg" style={{ float: "left", backgroundColor: "white", color: "#F55E61", width:"120px" }} disabled={isSubmitting} type="submit" >Submit</Button>
          </form>
        </Col>
        <Col lg={5}>
          <br /><br /><br /><br /><br /><br />
          <img src={logowhite} style ={{width:"350px", height:"350px"}}/>
        </Col>
      </Row>
    </div>
  );
}

const RepasswordFormik = withFormik<MyFormProps, FormValue>({
  mapPropsToValues: props => {
    return {
      password: props.password || "",
      confirmPassword: props.confirmPassword || ""
    }
  },
  handleSubmit: (values, { props }) => {
    alert(JSON.stringify(values))
    props.handleSubmit(values)
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required("Required")
      .min(8, "Password must contain at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match"),
  })

})(InnerFormRepassword);

const Repassword = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const handleSubmit = (form: FormValue) => {
    console.log(form)
    console.log(id)
    history.replace("/")
  }
  return (<div>
    <RepasswordFormik handleSubmit={handleSubmit} />
  </div>)
}

export default Repassword;