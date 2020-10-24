import React from "react";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button} from "react-bootstrap";
import {
  withStyles,
  createStyles,
  FormLabel,
  InputLabel,
  TextField,
  FormGroup,
  MenuItem,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Select,
  Checkbox
} from "@material-ui/core";

const styles = createStyles({
  formControl: {
    minWidth: 120,
    margin: "1%",
    marginTop: "-5px",
  },
  formSpace: {
    margin: "1%",
  },
});

interface FormValue {
  dormName? : string,
  price? : number,
  distance? : number,
  maxPerson? : number,
  rating? : number,
  roomSize? : number,
  roomType : string,
  gender : string,
  convenienceStore? : boolean,
  kitchen? : boolean,
  laundry? : boolean,
  parking? : boolean,
  pet? : boolean,
  internet? : boolean,
  smoking? : boolean,
  fitness? : boolean,
  pool? : boolean,
  cooking? : boolean,
  restRoom? : boolean,
}
interface MyFormProps {
  dormName? : string,
  price? : number,
  distance? : number,
  maxPerson? : number,
  rating? : number,
  roomSize? : number,
  roomType? : string,
  gender? : string,
  convenienceStore? : boolean,
  kitchen? : boolean,
  laundry? : boolean,
  parking? : boolean,
  pet? : boolean,
  internet? : boolean,
  smoking? : boolean,
  fitness? : boolean,
  pool? : boolean,
  cooking? : boolean,
  restRoom? : boolean,
  show : boolean,
  handleClose : () => void
  sendBack : (data : string) => void
}
interface Style {
  classes? : any
}
interface Control {
  show? : boolean,
  handleClose : () => void
}

function SearchList(props: FormikProps<FormValue> & Style & Control) {
  const { show, handleClose } = props;
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
    <Modal onHide={handleClose} show={show} size="xl">
      <form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Search Filter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <TextField
            onChange={handleChange}
            value={values.dormName}
            className={classes.formSpace}
            id="dormName"
            label="DormName"
            margin="dense"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={values.distance}
            className={classes.formSpace}
            id="distance"
            label="Distance(KM)"
            margin="dense"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={values.maxPerson}
            className={classes.formSpace}
            id="maxPerson"
            label="Max Person"
            margin="dense"
            variant="outlined"
          />
          <TextField
            className={classes.formSpace}
            onChange={handleChange}
            value={values.price}
            id="price"
            label="Price"
            margin="dense"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={values.rating}
            className={classes.formSpace}
            id="rating"
            label="Rating"
            margin="dense"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={values.roomSize}
            className={classes.formSpace}
            id="roomSize"
            label="RoomSize"
            margin="dense"
            variant="outlined"
          />
          <FormControl className={classes.formControl}>
            <InputLabel>RoomType</InputLabel>
            <Select
              value={values.roomType}
              onChange={handleChange("roomType")}
              onBlur={handleBlur("roomType")}
              id="roomType"
              error={touched.roomType && Boolean(errors.roomType)}
            >
              <MenuItem value="หอพัก">หอพัก</MenuItem>
              <MenuItem value="อพาร์ตเมนต์">อพาร์ตเมนต์</MenuItem>
              <MenuItem value="คอนโด">คอนโด</MenuItem>
              <MenuItem value="แฟลต">แฟลต</MenuItem>
              <MenuItem value="แรือนแรม">เรือนแรม(hostel)</MenuItem>
              <MenuItem value="บ้านพัก">บ้านพัก</MenuItem>
            </Select>
            <FormHelperText error={true}>
              {touched.roomType ? errors.roomType : ""}
            </FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Gender</InputLabel>
            <Select
              value={values.gender}
              onChange={handleChange("gender")}
              onBlur={handleBlur("gender")}
              id="gender"
              error={touched.gender && Boolean(errors.gender)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormHelperText error={true}>
              {touched.gender ? errors.gender : ""}
            </FormHelperText>
          </FormControl>
          <br />
          <FormGroup>
            <FormLabel style={{ color: "black" }}>Utilities</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.convenienceStore}
                  name="convenienceStore"
                  color="primary"
                />
              }
              label="Convenience Store"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.kitchen}
                  name="kitchen"
                  color="primary"
                />
              }
              label="Kitchen"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.laundry}
                  name="laundry"
                  color="primary"
                />
              }
              label="Laundry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.parking}
                  name="parking"
                  color="primary"
                />
              }
              label="Parking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.pet}
                  name="pet"
                  color="primary"
                />
              }
              label="Pet"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.internet}
                  name="internet"
                  color="primary"
                />
              }
              label="Internet"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.smoking}
                  name="smoking"
                  color="primary"
                />
              }
              label="Smoking Area"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.fitness}
                  name="fitness"
                  color="primary"
                />
              }
              label="Fitness"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.pool}
                  name="pool"
                  color="primary"
                />
              }
              label="Pool"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.cooking}
                  name="cooking"
                  color="primary"
                />
              }
              label="Cooking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  value={values.restRoom}
                  name="restRoom"
                  color="primary"
                />
              }
              label="ห้องน้ำรวม"
            />
          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleReset}>
            Clear
          </Button>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="outline-primary"
          >
            Search
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
const SearchFilter = withFormik<MyFormProps,FormValue>({
  mapPropsToValues: props => {
    return {
      dormName: props.dormName || "",
      price: props.price,
      distance: props.distance,
      maxPerson: props.maxPerson,
      rating: props.rating,
      gender: props.gender || "",
      roomSize: props.roomSize,
      roomType: props.roomType || "",
      convenienceStore: props.convenienceStore || false,
      kitchen: props.kitchen || false,
      laundry: props.laundry || false,
      parking: props.parking || false,
      pet: props.pet || false,
      internet: props.internet || false,
      smoking: props.smoking || false,
      fitness: props.fitness || false,
      pool: props.pool || false,
      cooking: props.cooking || false,
      restRoom: props.restRoom || false,
    };
  },
  validationSchema: Yup.object().shape({
    gender: Yup.string().required("Select your gender"),
    roomType: Yup.string().required("Select Room Type"),
    // pet : Yup.boolean().oneOf([true],"Hello")
  }),

  handleSubmit: (values, { resetForm , props }) => {
    props.sendBack(JSON.stringify(values));
    alert(JSON.stringify(values));
    props.handleClose();
    
    resetForm();
  },
})(SearchList);
export default withStyles(styles)(SearchFilter);
