import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Activity.css";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
}));

export default function Activity({ myDashboard, myRisk, myTask, myReport }) {
  const userData = useSelector((store) => store.userRoot);
  const { user } = userData;
  const classes = useStyles();
  const [myProfileInfo, setMyProfileInfo] = useState();
  const history = useNavigate();
  // const fetchUserProfileInfo = async () => {
  // let myprofile = await axios.get(`${urlHelper}/user/profile`);
  // setMyProfileInfo(myprofile.data.result);
  // };
  const [activeLinkMyDashboard, setActiveLinkMyDashboard] = useState(false);
  const [activeLinkMyRisk, setActiveLinkMyRisk] = useState(false);
  const [activeLinkMyTask, setActiveLinkMyTask] = useState(false);
  const [activeLinkMyReport, setActiveLinkMyReport] = useState(false);

  useEffect(() => {
    // fetchUserProfileInfo();
  }, []);
  return (
    <div>
      <p className="Activity__header">Activity</p>
      <div
        onClick={() => {
          history.push("/riskboard");
          setActiveLinkMyDashboard(true);
          setActiveLinkMyRisk(false);
          setActiveLinkMyTask(false);
          setActiveLinkMyReport(false);
        }}
        className="Activity__row"
      >
        <svg
          className="Activity__icons"
          width="20"
          height="15"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.5V3H9V1.5H12ZM4.5 1.5V6H1.5V1.5H4.5ZM12 7.5V12H9V7.5H12ZM4.5 10.5V12H1.5V10.5H4.5ZM13.5 0H7.5V4.5H13.5V0ZM6 0H0V7.5H6V0ZM13.5 6H7.5V13.5H13.5V6ZM6 9H0V13.5H6V9Z"
            fill="#60626E"
          />
        </svg>

        <p
          style={{ cursor: "pointer" }}
          className={`${
            myDashboard === true
              ? "active__navlink Activity__rowText"
              : "Activity__rowText"
          }  `}
        >
          My Dashboard
        </p>
      </div>
      <div
        onClick={() => {
          history.push("/riskboard");
          setActiveLinkMyDashboard(false);
          setActiveLinkMyRisk(true);
          setActiveLinkMyTask(false);
          setActiveLinkMyReport(false);
        }}
        className="Activity__row"
      >
        <svg
          width="21"
          height="26"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0H1.66667C0.75 0 0.00833333 0.75 0.00833333 1.66667L0 16.6667L3.33333 13.3333H15C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667V1.66667C16.6667 0.75 15.9167 0 15 0ZM15 11.6667H2.64167L2.15 12.1583L1.66667 12.6417V1.66667H15V11.6667ZM7.5 8.33333H9.16667V10H7.5V8.33333ZM7.5 3.33333H9.16667V6.66667H7.5V3.33333Z"
            fill="#60626E"
          />
        </svg>

        <p
          style={{ cursor: "pointer" }}
          className={`${
            myRisk === true
              ? "active__navlink Activity__rowText"
              : "Activity__rowText"
          }  `}
        >
          My Risks
        </p>
      </div>
      <Link to="/task">
        <div
          onClick={() => {
            history.push("/task");
            setActiveLinkMyDashboard(false);
            setActiveLinkMyRisk(false);
            setActiveLinkMyTask(true);
            setActiveLinkMyReport(false);
          }}
          className="Activity__row"
        >
          <svg
            className="Activity__icons"
            width="20"
            height="20"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H15C15.9167 15 16.6667 14.25 16.6667 13.3333V1.66667C16.6667 0.75 15.9167 0 15 0ZM15 13.3333H1.66667V1.66667H15V13.3333Z"
              fill="#60626E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.508 6.18333L13.3247 5L10.683 7.64167L9.50801 6.45833L8.33301 7.63333L10.683 10L14.508 6.18333Z"
              fill="#60626E"
            />
            <path
              d="M6.66667 3.33325H2.5V4.99992H6.66667V3.33325Z"
              fill="#60626E"
            />
            <path
              d="M6.66667 6.66675H2.5V8.33342H6.66667V6.66675Z"
              fill="#60626E"
            />
            <path d="M6.66667 10H2.5V11.6667H6.66667V10Z" fill="#60626E" />
          </svg>

          <p
            className={`${
              myTask === true
                ? "active__navlink Activity__rowText"
                : "Activity__rowText"
            }  `}
            style={{ cursor: "pointer" }}
          >
            My Tasks
          </p>
        </div>
      </Link>
      <div
        onClick={() => {
          history.push("/task");
          setActiveLinkMyDashboard(false);
          setActiveLinkMyRisk(false);
          setActiveLinkMyTask(false);
          setActiveLinkMyReport(true);
        }}
        className="Activity__row"
      >
        <svg
          className="Activity__icons"
          width="20"
          height="20"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33333 11.6667H10V13.3333H3.33333V11.6667ZM3.33333 8.33333H10V10H3.33333V8.33333ZM8.33333 0H1.66667C0.75 0 0 0.75 0 1.66667V15C0 15.9167 0.741666 16.6667 1.65833 16.6667H11.6667C12.5833 16.6667 13.3333 15.9167 13.3333 15V5L8.33333 0ZM11.6667 15H1.66667V1.66667H7.5V5.83333H11.6667V15Z"
            fill="#60626E"
          />
        </svg>

        <p
          className={`${
            myReport === true
              ? "active__navlink Activity__rowText"
              : "Activity__rowText"
          }  `}
          style={{ cursor: "pointer" }}
        >
          My Reports
        </p>
      </div>
    </div>
  );
}
