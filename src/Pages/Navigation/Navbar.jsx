import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import {  Menu, MenuItem } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
//.....................Icons.....................

import { useSelector, useDispatch } from "react-redux";
// import Loogo from "../../PNG/RiskDeployerLogo.png";
import "../../Css/Navbar.css";
import LeftNav from "./LeftNav";
import Activity from "./Activity";
import Admin from "../../Component/Admin/Admin";
import { useNavigate ,useParams} from "react-router-dom";
import { useEffect } from "react";
const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontSize: "1.5rem",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: "80px",
    backgroundColor: "#4675e7",
  },
  menuButton: {
    fontSize: theme.spacing(12),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    top: "20px",
    width: drawerWidth,
    [theme.breakpoints.up("xs")]: {
      top: "0px",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },

  inputRoot: {
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  largeAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

function Navvbar(
  props,
  {
    isDashBoard,
    isSetting,
    isWorkflow,
    isWorkspace,
    isGroup,
    isRole,
    isUser,
    myDashboard,
    myRisk,
    myTask,
    myReport,
    isRiskTemplate,
  }
) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  console.log(isDashBoard);
  console.log(props.isDashBoard);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [newData, setNewData] = useState([]);
  const [myProfileInfo, setMyProfileInfo] = useState();
  const navigate = useNavigate();

  const { window } = props;
  const fetchUserProfileInfo = async () => {
  };
  const userData = useSelector((store) => store.userRoot);
  const mydata = useParams();
  console.log("MYDATAPRAM", mydata);
  const { user, logoMain } = userData;
  console.log("MYUSER", user);
  const [logoutModal, setLogoutModal] = useState(false);
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);

  const fetchLiveFeedData = async () => {
  };

  console.log("NEWDATA", newData);
  console.log("MyUSER", user);
  let uname=[]
  uname=localStorage.getItem('uName')?localStorage.getItem('uName').split(' '):'';
  useEffect(() => {
    fetchUserProfileInfo();
    fetchLiveFeedData();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickSearch = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseSearch = () => {
    setAnchorE2(null);
  };

  console.log("LOGOMAIN", logoMain);

  const handleSearchModalOpen = (e) => {
    console.log("component mount");
    let search = document.getElementById("searchDiv");
    search.style.display = "block";
  };
  const handleSearchModalClose = (e) => {
    console.log("component unmount");

    setTimeout(() => {
      let search = document.getElementById("searchDiv");
      search.style.display = "none";
    }, 200);
  };

  const [ideaModal, setIdeaModal] = useState(false);
  const [activeHome, setActiveHome] = useState(false);
  const [activeDash, setActiveDash] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [workflows, setWorkflows] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  let cancelToken;
  const onType = async (e) => {
    const search = e.target.value;
  };

  console.log(ideaModal);
  const [mobileSearch, setMobileSearch] = useState(false);
  const drawer = (
    <div style={{ backgroundColor: "#363740", color: "#A4A6B3", flex: 1 }}>
      <div className={classes.toolbar} />
      {/* <Divider /> */}
      <div className="drawer__logo">
        <img
          style={{ cursor: "pointer" }}
          className="NavBar__imageForDrawer"
          src={Loogo}
          alt="logo"
          onClick={() => navigate.push("/")}
        />
      </div>
      <Activity />
      <Admin />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <></>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const logout = () => {
    localStorage.clear();
    navigate.push('/')
    navigate.go(0)
  };

  return (
    <>
      <div>
        {/* for mobile screens */}
        <div className="mobileNavbar">
          <div className="mobileNavbar__main">
            <div className="mobileNavbar__left">
              <svg
                onClick={handleDrawerToggle}
                style={{ marginLeft: "20px", cursor: "pointer" }}
                width="23"
                height="15"
                viewBox="0 0 23 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.2632L0 12.3158C0 12.6921 0.546429 13 1.21429 13L15.7857 13C16.4536 13 17 12.6921 17 12.3158V10.2632C17 9.88684 16.4536 9.57895 15.7857 9.57895H1.21429C0.546429 9.57895 0 9.88684 0 10.2632ZM0 0.68421L0 2.73684C0 3.11316 0.546429 3.42105 1.21429 3.42105L15.7857 3.42105C16.4536 3.42105 17 3.11316 17 2.73684V0.68421C17 0.307894 16.4536 0 15.7857 0L1.21429 0C0.546429 0 0 0.307894 0 0.68421ZM0 5.47368L0 7.52632C0 7.90263 0.546429 8.21053 1.21429 8.21053H15.7857C16.4536 8.21053 17 7.90263 17 7.52632V5.47368C17 5.09737 16.4536 4.78947 15.7857 4.78947L1.21429 4.78947C0.546429 4.78947 0 5.09737 0 5.47368Z"
                  fill="#C5C7CD"
                />
              </svg>
            </div>
            <div className="mobileNavbar__middle">
              <p className="mobileNavbar__headerText">
                {props.myDashboard ? "Dashboard" : null}
                {props.myRisk ? "Risk" : null}
                {props.myTask ? "Task" : null}
                {props.myReport ? "Report" : null}
                {props.isUser ? "Employees" : null}
                {props.isGroup ? "Groups" : null}
                {props.isRole ? "Role" : null}
                {props.isWorkspace ? "Workspace" : null}
                {props.isRiskTemplate ? "Risk Template" : null}
                {props.isWorkflow ? "Workflow" : null}
                {props.isSetting ? "Settings" : null}
                {props.isHome ? "Home" : null}
                {props.isProfile ? "Profile" : null}
              </p>
            </div>
            <div className="mobileNavbar__right">
              <svg
                className="mobile__searchIcon"
                onClick={() => setMobileSearch(!mobileSearch)}
                style={{ marginRight: "30px" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7204 9.43396H10.0429L9.80274 9.2024C10.6432 8.2247 11.1492 6.9554 11.1492 5.57461C11.1492 2.49571 8.65352 0 5.57461 0C2.49571 0 0 2.49571 0 5.57461C0 8.65352 2.49571 11.1492 5.57461 11.1492C6.9554 11.1492 8.2247 10.6432 9.2024 9.80274L9.43396 10.0429V10.7204L13.7221 15L15 13.7221L10.7204 9.43396ZM5.57461 9.43396C3.43911 9.43396 1.71527 7.71012 1.71527 5.57461C1.71527 3.43911 3.43911 1.71527 5.57461 1.71527C7.71012 1.71527 9.43396 3.43911 9.43396 5.57461C9.43396 7.71012 7.71012 9.43396 5.57461 9.43396Z"
                  fill="#C5C7CD"
                />
              </svg>

              {mobileSearch ? (
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onFocus={handleSearchModalOpen}
                  onBlur={handleSearchModalClose}
                  onChange={onType}
                  inputProps={{ "aria-label": "search" }}
                />
              ) : (
                <></>
              )}
              <svg
                style={{ marginRight: "10px" }}
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14H5.00096C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125V1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1V1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216Z"
                  fill="#C5C7CD"
                />
              </svg>
              <Avatar
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className="NavBar__Avatar"
                src="https://www.google.com/search?q=logoimage&sxsrf=ALeKk01khybQ4Re2qlnyOR6rKgY6TRVFag:1623569609813&tbm=isch&source=iu&ictx=1&fir=lJ26uWyQ8Q6yuM%252C4t65gVuPUoxTXM%252C_&vet=1&usg=AI4_-kR8b-8E7fvdwLb3n7d08vRASLE0JA&sa=X&ved=2ahUKEwiu6PCOjJTxAhU44nMBHV1xChcQ9QF6BAgLEAE#imgrc=lJ26uWyQ8Q6yuM"
              />
            </div>
          </div>
        </div>
        {/* for mobile screens end */}
        {/* for normal screens */}
        <div className="NavBar">
          <img
            style={{ cursor: "pointer" }}
            className="NavBar__image"
            src={Loogo}
            alt="logo"
            onClick={() => navigate.push("/")}
          />
          <div className="NavBar__header">
          </div>
          <div className="NavBar__right">
            <div className={`${classes.search} NavBar__rightComponents`}>
              <div className={classes.searchIcon}>
                <svg
                  className="mobile__searchIcon"
                  onClick={() => setMobileSearch(!mobileSearch)}
                  style={{ marginRight: "30px" }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7204 9.43396H10.0429L9.80274 9.2024C10.6432 8.2247 11.1492 6.9554 11.1492 5.57461C11.1492 2.49571 8.65352 0 5.57461 0C2.49571 0 0 2.49571 0 5.57461C0 8.65352 2.49571 11.1492 5.57461 11.1492C6.9554 11.1492 8.2247 10.6432 9.2024 9.80274L9.43396 10.0429V10.7204L13.7221 15L15 13.7221L10.7204 9.43396ZM5.57461 9.43396C3.43911 9.43396 1.71527 7.71012 1.71527 5.57461C1.71527 3.43911 3.43911 1.71527 5.57461 1.71527C7.71012 1.71527 9.43396 3.43911 9.43396 5.57461C9.43396 7.71012 7.71012 9.43396 5.57461 9.43396Z"
                    fill="#C5C7CD"
                  />
                </svg>
                {/* <SearchIcon style={{ color: "white" }} /> */}
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onFocus={handleSearchModalOpen}
                onBlur={handleSearchModalClose}
                onChange={onType}
                inputProps={{ "aria-label": "search" }}
              />
              <div id="searchDiv" className="searchResult__div">
                {challenges.length == 0 &&
                ideas.length == 0 &&
                workspaces.length == 0 &&
                workflows.length == 0 ? (
                  <>
                    <p
                      style={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        textAlign: "center",
                      }}
                    >
                      Nothing to show
                    </p>
                  </>
                ) : (
                  <>
                    {challenges.length != 0 ? (
                      <>
                        {challenges.map((challenge) => (
                          <div className="search__row">
                            <p
                              onClick={() => navigate.push("/challenges")}
                              style={{
                                cursor: "pointer",
                                marginTop: "10px",
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              {challenge?.title}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}

                    {ideas.length != 0 ? (
                      <>
                        {ideas.map((challenge) => (
                          <div className="search__row">
                            <p
                              onClick={() => navigate.push("/ideas")}
                              style={{
                                cursor: "pointer",
                                marginTop: "10px",
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              {challenge?.title}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}

                    {workflows.length != 0 ? (
                      <>
                        {workflows.map((challenge) => (
                          <div className="search__row">
                            <p
                              onClick={() => navigate.push("/workFlow")}
                              style={{
                                cursor: "pointer",
                                marginTop: "10px",
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              {challenge?.workflowName}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}

                    {workspaces.length != 0 ? (
                      <>
                        {workspaces.map((challenge) => (
                          <div className="search__row">
                            <p
                              onClick={() => navigate.push("/workspace")}
                              style={{
                                cursor: "pointer",
                                marginTop: "10px",
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              {challenge?.title}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            </div>
            <div>
              <svg
                className="mobile__searchIcon"
                onClick={() => setMobileSearch(!mobileSearch)}
                style={{ marginRight: "30px" }}
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14H5.00096C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125V1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1V1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216Z"
                  fill="#C5C7CD"
                />
              </svg>
            </div>

            <div className="navvbar__line">
              <span></span>
            </div>

            <div className="NavBar__rightComponents">
            </div>

            <p className="navvbar__rightComponentsAvatarName">{uname[0]?uname[0].charAt(0).toUpperCase():''}{uname[1]?uname[1].charAt(0).toUpperCase():''}</p>

            <Avatar
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className="NavBar__Avatar"
              src="https://www.google.com/search?q=logoimage&sxsrf=ALeKk01khybQ4Re2qlnyOR6rKgY6TRVFag:1623569609813&tbm=isch&source=iu&ictx=1&fir=lJ26uWyQ8Q6yuM%252C4t65gVuPUoxTXM%252C_&vet=1&usg=AI4_-kR8b-8E7fvdwLb3n7d08vRASLE0JA&sa=X&ved=2ahUKEwiu6PCOjJTxAhU44nMBHV1xChcQ9QF6BAgLEAE#imgrc=lJ26uWyQ8Q6yuM"
            />
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navigate.push("/profile");
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setUpdatePasswordModal(true);
            }}
          >
            Reset Password
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            Logout
          </MenuItem>
        </Menu>

        {props.isDashBoard ? (
          <></>
        ) : (
          <LeftNav
            isSetting={isSetting}
            isWorkflow={isWorkflow}
            isWorkspace={isWorkspace}
            isGroup={isGroup}
            isRole={isRole}
            isUser={isUser}
            isRiskTemplate={isRiskTemplate}
            myDashboard={myDashboard}
            myRisk={myRisk}
            myTask={myTask}
            myReport={myReport}
            style={{ marginTop: "9.88vh" }}
          />
        )}
      </div>

      {/* drawer start */}
      <Drawer
        container={container}
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
      {/* drawer end */}
    </>
  );
}
export default Navvbar;
