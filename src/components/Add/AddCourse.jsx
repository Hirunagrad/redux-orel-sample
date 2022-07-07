import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../../contants/action-type";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(course);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !category || !price) {
      return toast.warning("Please filled alled feilds!");
    }
    console.log("datasss", data);
    dispatch({ type: ActionTypes.ADD_COURSE, payload: data });
    toast.success("Student Added Successfully!!");
    navigate("/");
  };

  const data = {
    id: course[course.length - 1].id + 1,
    name,
    category,
    price,
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          container
          mt={5}
          justifyContent="center"
          alignItems="center"
          md={12}
        >
          <Typography variant="h4">Add Course</Typography>
        </Grid>
        <Grid
          item
          mt={5}
          container
          justifyContent="center"
          alignItems="center"
          md={12}
        >
          <TextField
            id="outlined-name"
            label="name"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "30%" }}
          />
        </Grid>
        <Grid item mt={5} container justifyContent="center" alignItems="center">
          <TextField
            id="outlined-name"
            label="category"
            onChange={(e) => setCategory(e.target.value)}
            sx={{ width: "30%" }}
          />
        </Grid>

        <Grid item mt={5} container justifyContent="center" alignItems="center">
          <TextField
            id="outlined-name"
            label="price"
            onChange={(e) => setPrice(e.target.value)}
            sx={{ width: "30%" }}
          />
        </Grid>
        <Grid item mt={5} container justifyContent="center" alignItems="center">
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ width: "30%" }}
          >
            Add Course
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddCourse;
