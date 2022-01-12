import { AppBar, Toolbar, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  appbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "64px",
    // alignItems: "center",
  },
  typography: {
    color: "white",
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.typography}>Statistics</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
