import "./Feedbacktable.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  padding: theme.spacing(1),
  textAlign: "center",
  overflow: "hidden",
  color: theme.palette.text.secondary,
}));

const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  overflow: "hidden",
  backgroundColor: "green",
}));
const Item4 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  overflow: "hidden",
  backgroundColor: "gold",
}));

const Feedbacktable = () => {
  const [values, setvalues] = useState([]);

  useEffect(() => {
    setvalues(Object.values(localStorage));
  }, []);

  // console.log(values);

  return (
    <div className="Feedbacktable">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item3>Customer Detail</Item3>
          </Grid>
          <Grid item xs={4}>
            <Item4>Reviews</Item4>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Item3>Name</Item3>
          </Grid>
          <Grid item xs={4}>
            <Item3>Email</Item3>
          </Grid>
          <Grid item xs={2}>
            <Item3>Phone</Item3>
          </Grid>
          <Grid item xs={1}>
            <Item4>Service </Item4>
          </Grid>
          <Grid item xs={1}>
            <Item4>Beverage </Item4>
          </Grid>
          <Grid item xs={1}>
            <Item4>clean</Item4>
          </Grid>
          <Grid item xs={1}>
            <Item4>Overall</Item4>
          </Grid>
        </Grid>

        <br></br>
        <br></br>
        {values.map((data) => {
          let spliter = data.split(",");
          return (
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Item>{spliter[0]}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>{spliter[1]}</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>{spliter[2]}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>{spliter[3].length > 0 ? spliter[3] : "NA"}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>{spliter[4].length > 0 ? spliter[4] : "NA"}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>{spliter[5].length > 0 ? spliter[5] : "NA"}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>{spliter[6].length > 0 ? spliter[6] : "NA"}</Item>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </div>
  );
};

export default Feedbacktable;
