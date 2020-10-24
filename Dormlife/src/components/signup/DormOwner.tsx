/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState,useEffect} from "react";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Termservice from "./Termservice";
import { idenRegExp, phoneRegExp } from "./constant";
import { useHistory } from "react-router-dom";
import {Navbar,Nav,Row,Col,Button } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import authService from "../../services/auth.service"

const styles = createStyles({
  black: {
    color: "black",
  },
  button: {
    marginRight: "10px",
  },
  navCenter: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    overflow: "visible",
    height: "0",
    left: "0%",
    color: "white",
  },
  textField: {
    width: "350px",
  },
  formLabel: {
    textAlign: "left",
    fontSize: "1.5rem",
    color: "black",
  },
  row: {
    marginBottom: "3%",
  },
});

interface FormValue {
  name : string,
  lastName : string,
  phone : string,
  password : string,
  confirmPassword : string,
  gender : string,
  acceptTerm : boolean,
  email : string,
  natID : string
}
interface MyFormProps {
  name? : string,
  lastName? : string,
  phone? : string,
  password? : string,
  confirmPassword? : string,
  gender? : string,
  acceptTerm? : boolean,
  email? : string  
  natID? : string
}
interface Style {
  classes? : any
}

function DormOwner(props: FormikProps<FormValue> & Style) {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  const history = useHistory();
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div>
      <Navbar style={{ padding: "1%" }} bg="danger">
        <Nav className="text-center">
          <Button variant="" onClick={() => history.goBack()}>
            <ArrowBackIosIcon htmlColor="white" fontSize="large" />
          </Button>
          <h1 className={classes.navCenter}>Sign up for Dorm Owner</h1>
        </Nav>
      </Navbar>
      <form style={{ margin: "3% 20%" }} onSubmit={handleSubmit}>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.name && Boolean(errors.name)}
                className={classes.formLabel}
              >
                Name
              </FormLabel>
              <TextField
                id="name"
                placeholder="Enter your Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.lastName && Boolean(errors.lastName)}
                className={classes.formLabel}
              >
                Lastname
              </FormLabel>
              <TextField
                id="lastName"
                placeholder="Enter your LastName"
                value={values.lastName}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.lastName ? errors.lastName : ""}
                error={touched.lastName && Boolean(errors.lastName)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.phone && Boolean(errors.phone)}
                className={classes.formLabel}
              >
                Phone number
              </FormLabel>
              <TextField
                id="phone"
                placeholder="Enter your Phone number"
                value={values.phone}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.phone ? errors.phone : ""}
                error={touched.phone && Boolean(errors.phone)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.email && Boolean(errors.email)}
                className={classes.formLabel}
              >
                Email
              </FormLabel>
              <TextField
                id="email"
                className={classes.textField}
                placeholder="Enter your Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.natID && Boolean(errors.natID)}
                className={classes.formLabel}
              >
              Identification number
              </FormLabel>
              <TextField
                id="natID"
                placeholder="Enter your Identification number"
                value={values.natID}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.natID ? errors.natID : ""}
                error={touched.natID && Boolean(errors.natID)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.password && Boolean(errors.password)}
                className={classes.formLabel}
              >
                Password
              </FormLabel>
              <TextField
                id="password"
                placeholder="Enter your password"
                type="password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                className={classes.formLabel}
              >
                Confirm Password
              </FormLabel>
              <TextField
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                className={classes.textField}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.confirmPassword ? errors.confirmPassword : ""
                }
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row  noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel className={classes.formLabel}>Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="secondary" />}
                    label="Female"
                  />{" "}
                  <FormControlLabel
                    value="male"
                    control={<Radio color="secondary" />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
            <Checkbox
              style={{paddingLeft:"0"}}
              checked={values.acceptTerm}
              onChange={handleChange}
              onBlur={handleBlur}
              name="acceptTerm"
              color="secondary"
            />
            <FormLabel style={{fontSize:"0.7rem"}} className={classes.black}>
              I have to read and agree to 
            </FormLabel>{" "}
            <a style={{fontSize:"0.7rem",textDecoration:"underline",color:"#0066cc"}}
              onClick={() => {
                setShow(true);
              }}
            >
              Term service and policy
            </a>
            <Termservice show={show} handleClose={handleClose} />
            <FormHelperText error={true}>
              {touched.acceptTerm ? errors.acceptTerm : ""}
            </FormHelperText>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <Button
                className={classes.button}
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </Button>
              <Button
                className={classes.button}
                variant="danger"
                onClick={handleReset}
              >
                CLEAR
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </form>
    </div>
  );
}
const DormOwnerForm = withFormik<MyFormProps,FormValue>({
  mapPropsToValues: props => {
    return {
      name: props.name || "",
      lastName: props.lastName || "",
      email: props.email || "",
      password: props.password || "",
      confirmPassword: props.confirmPassword || "",
      gender: props.gender || "male",
      acceptTerm: props.acceptTerm || false,
      phone: props.phone || "",
      natID: props.natID || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match"),
    acceptTerm: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    gender: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Required"),
    natID: Yup.string().required("Required")
      .matches(idenRegExp,"Invalid IdenNumber")
  }),

  handleSubmit: (values, { resetForm }) => {
    const { name, lastName, email, password, phone, gender , natID } = values;
    const form = {
      name,
      lastName,
      email,
      password,
      phone,
      gender,
      natID
    };
    authService.RegisterDormOwner(form)
    resetForm();
  },
})(DormOwner);

export default withStyles(styles)(DormOwnerForm);
