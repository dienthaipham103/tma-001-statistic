import { Grid } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Chart from "./components/Chart";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Form />
          </Grid>
          <Grid item xs={12} md={10}>
            <Chart />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
