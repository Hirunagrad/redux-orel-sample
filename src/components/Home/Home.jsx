import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../contants/action-type";
import { toast } from "react-toastify";

function Home() {
  const course = useSelector((state) => state.course);
  console.log(course);
  const dispatch = useDispatch();

  const deleteCourse = (id) => {
    dispatch({ type: ActionTypes.DELETE_COURSE, payload: id });
    toast.success("Course Deleted Successfully!!");
    console.log(id);
  };

  return (
    <div>
      <Grid container p={10}>
        <Grid item container display={"flex"} justifyContent="end" mb={3}>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button variant="contained">Add Course</Button>
          </Link>
        </Grid>
        <Grid item md={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Course Name</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {course.map((value) => (
                  <TableRow
                    key={""}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{value.name}</TableCell>
                    <TableCell align="left">{value.category}</TableCell>
                    <TableCell align="left">{value.price}</TableCell>
                    <TableCell align="left">
                      <Link
                        to={`/edit/${value.id}`}
                        style={{ textDecoration: "none", marginRight: "10px" }}
                      >
                        <Button
                          style={{ backgroundColor: "#ff9100" }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </Link>

                      <Button
                        style={{ backgroundColor: "#a31545" }}
                        variant="contained"
                        onClick={() => deleteCourse(value.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
