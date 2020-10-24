// import React, { Dispatch, SetStateAction, useState } from "react";
// import FormLabel from "@material-ui/core/FormLabel";
// import TextField from "@material-ui/core/TextField";
// import FormControl from "@material-ui/core/FormControl";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import { useHistory } from "react-router-dom";
// import { FormikProps, withFormik } from "formik";
// import * as Yup from "yup";

// interface FormValue {
//     email: string;
// }
// interface MyFormProps {
//     email?: string,
//     setSubmit : Dispatch<SetStateAction<boolean>>
// }

// const InnerFormpassword = (props: FormikProps<FormValue>) => {
//   const {
//     touched,
//     errors,
//     isSubmitting,
//     values,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//   } = props;
//   return (
//     <div>
//       <h1>Forget your password</h1>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <TextField
//             id="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             helperText={touched.email ? errors.email : ""}
//             error={touched.email && Boolean(errors.email)}
//             name="email"
//             value={values.email}
//             placeholder="Enter your Email"
//             type="email"
//             margin="dense"
//             variant="outlined"
//           />
//         </FormControl>
//         <br />
//         <button disabled={isSubmitting} type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// const ForgetPasswordFormik = withFormik<MyFormProps, FormValue>({
//   mapPropsToValues: (props) => {
//     return {
//       email: props.email || "",
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string().required("Required").email("Invalid email Address"),
//   }),
//   handleSubmit: (values, { props }) => {
//     alert(JSON.stringify(values));
//     props.setSubmit(true)
//   },
// })(InnerFormpassword);

// const CheckEmail = () => {
//     return (
//     <div>
//         <h1>Please check your email also check your trash and spam</h1>
//     </div>)
// }

// const Forgetpassword = () => {
//   const [issubmit, setSubmit] = useState<boolean>(false);
//   const history = useHistory();
//   const routeBack = () => {
//     if (issubmit) {
//       return history.push("/");
//     } else {
//       return history.goBack();
//     }
//   };

//   return (
//     <div>
//       <button onClick={routeBack}>
//         <ArrowBackIosIcon htmlColor="" fontSize="large" />
//       </button>
//       {issubmit ? <CheckEmail /> : <ForgetPasswordFormik setSubmit={setSubmit}/>}   
//     </div>
//   );
// };
// export default Forgetpassword

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

interface FormValue {
    email: string;
}
interface MyFormProps {
    email?: string,
    setSubmit: Dispatch<SetStateAction<boolean>>
}

const InnerFormpassword = (props: FormikProps<FormValue>) => {
    const history = useHistory();
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
            <Row style={{ textAlign: "left" }}>
                <Col>
                    <Button onClick={() => history.push("/signin")} variant="" ><ArrowBackIosIcon htmlColor="white" fontSize="large" /></Button>
                </Col>
            </Row>
            <Row style={{ color: "white" }} noGutters={true}>
                <Col style={{ padding: "0 20%" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Forgot your password?</h1>
                    <br /><br /><br />
                    <h1 style={{ fontSize: "2rem", float: "left" }}>Email</h1>
                    <br /><br /><br />
                    <form onSubmit={handleSubmit}>
                        <FormControl component="fieldset" style={{ float: "left", backgroundColor: "white" }}>
                            <TextField
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.email ? errors.email : ""}
                                error={touched.email && Boolean(errors.email)}
                                name="email"
                                value={values.email}
                                placeholder="Enter your Email"
                                type="email"
                                style={{ width: "450px" }}
                            />
                        </FormControl>
                        <br /><br /><br /><br />
                        <Button variant="light" size="lg" style={{ float: "left", backgroundColor: "white", color: "#F55E61" }} disabled={isSubmitting} type="submit" >Send</Button>
                    </form>
                </Col>
            </Row>
        </div>
    );
}

const ForgetPasswordFormik = withFormik<MyFormProps, FormValue>({
    mapPropsToValues: (props) => {
        return {
            email: props.email || "",
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Required").email("Invalid email Address"),
    }),
    handleSubmit: (values, { props }) => {
        alert(JSON.stringify(values));
        props.setSubmit(true)
    },
})(InnerFormpassword);

const CheckEmail = () => {
    const history = useHistory();
    return (
        <div style={{ padding: "2% 4%" }}>
            <Row style={{ textAlign: "left" }}>
                <Col>
                    <Button onClick={() => history.push("/")} variant="" ><ArrowBackIosIcon htmlColor="white" fontSize="large" /></Button>
                </Col>
            </Row>
            <Row style={{ color: "white"}} noGutters={true}>
                <Col style={{ padding: "15% 20%" }}>
                    <h1 style={{ fontSize: "4rem"}}>Please check your E-mail</h1>
                    <br />
                    <h1 style={{ fontSize: "2.5rem", fontWeight:100}}>also check your trash and spam!</h1>
                </Col>
            </Row>
        </div>)
}

const Forgetpassword = () => {
    const [issubmit, setSubmit] = useState<boolean>(false);
    const history = useHistory();
    const routeBack = () => {
        if (issubmit) {
            return history.push("/");
        } else {
            return history.goBack();
        }
    };

    return (
        <div>
            {issubmit ? <CheckEmail /> : <ForgetPasswordFormik setSubmit={setSubmit} />}
        </div>
    );
};
export default Forgetpassword
