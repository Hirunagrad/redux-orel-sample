import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { ActionTypes } from "../../contants/action-type";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EditCourse() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const currentCourse = course.find((course) => course.id === parseInt(id));
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !category || !price) {
    //   return toast.warning("Please filled alled feilds!");
    // }
    // console.log("datasss", data);
    // dispatch({ type: ActionTypes.ADD_COURSE, payload: data });
    // toast.success("Student Added Successfully!!");
    // navigate("/");

    const data = {
      id: parseInt(id),
      name,
      category,
      price,
    };

    dispatch({ type: ActionTypes.EDIT_COURSE, payload: data });
    toast.success("Course Updated Successfully!!");
    navigate("/");
  };

  useEffect(() => {
    if (currentCourse) {
      setName(currentCourse.name);
      setCategory(currentCourse.category);
      setPrice(currentCourse.price);
    }
  }, []);

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
          <Typography variant="h4">Edit Course {id}</Typography>
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
            value={name}
          />
        </Grid>
        <Grid item mt={5} container justifyContent="center" alignItems="center">
          <TextField
            id="outlined-name"
            label="category"
            onChange={(e) => setCategory(e.target.value)}
            sx={{ width: "30%" }}
            value={category}
          />
        </Grid>

        <Grid item mt={5} container justifyContent="center" alignItems="center">
          <TextField
            id="outlined-name"
            label="price"
            onChange={(e) => setPrice(e.target.value)}
            sx={{ width: "30%" }}
            value={price}
          />
        </Grid>
        <Grid item mt={5} container justifyContent="center" alignItems="center">
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ width: "30%" }}
          >
            Edit Course
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default EditCourse;
