import loadable from "@loadable/component";
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = loadable(() => import("./pages/Home/Home"));
const useStyles = makeStyles((theme) =>
  createStyles({
    appcontainer: {
      height: "100%",
      minHeight: "100vh",
      backgroundColor:
        theme.palette.type === "dark" ? theme.palette.grey[900] : "",
    },
  })
);

const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.appcontainer}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
