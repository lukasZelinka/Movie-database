import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import { connect } from "react-redux";
import { setInputValue, loadMovies, refreshPage } from "../actions/index";
import { Link } from "react-router-dom";

//  styled
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchAppBar({
  inputValue,
  setInputValue,
  loadMovies,
  refreshPage,
  showSearch,
}) {
  //  drawer
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  //  input
  const onSubmit = (e) => {
    e.preventDefault();
    refreshPage();
    loadMovies();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Box
                    sx={{
                      width: 250,
                    }}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    <List className="black">
                      {["Movies", "Favourites"].map((text, index) => {
                        if (text === "Movies") {
                          return (
                            <Link to="/" key={index}>
                              <ListItem button>
                                <ListItemIcon>
                                  <VideocamRoundedIcon
                                    sx={{ color: "#1976d2" }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </Link>
                          );
                        } else {
                          return (
                            <Link to="/favourites" key={index}>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarPurple500SharpIcon
                                    sx={{ color: "#FFD700" }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </Link>
                          );
                        }
                      })}
                    </List>
                  </Box>
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MOVIE DATABASE
          </Typography>
          {showSearch && (
            <form onSubmit={onSubmit}>
              <Search>
                <IconButton type="submit" aria-label="search">
                  <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
                <StyledInputBase
                  placeholder="Search movie…"
                  inputProps={{ "aria-label": "search" }}
                  name="inputValue"
                  value={inputValue || ""}
                  onChange={(e) => setInputValue(e.target.value)}
                  sx={{
                    width: { xs: "60%", sm: "100%" },
                    // fontSize: { xs: "70%", sm: "100%" },
                  }}
                />
              </Search>
            </form>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  inputValue: state.moviesReducer.inputValue,
  showSearch: state.searchReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setInputValue: (newValue) => dispatch(setInputValue(newValue)),
    loadMovies: () => dispatch(loadMovies()),
    refreshPage: () => dispatch(refreshPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);
