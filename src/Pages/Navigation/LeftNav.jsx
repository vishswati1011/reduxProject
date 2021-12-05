import React, { useState } from "react";
import Activity from "./Activity";
import Admin from "../../Component/Admin/Admin";
import "../../Css/LeftNav.css";
// import AddRiskModal from "../../Component/AddRiskModal";
export default function LeftNav({
  isSetting,
  isWorkflow,
  isWorkspace,
  isGroup,
  isRole,
  isUser,
  myDashboard,
  myTask,
  myRisk,
  myReport,
  isRiskTemplate,
}) {
  const [challengeModal, setChallengeModal] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <AddRiskModal
        show={show}
        setShow={setShow}
        // challengeModal={challengeModal}
        // setChallengeModal={setChallengeModal}
      /> */}
      <div className="LeftNav">
        {/* <div className="LeftNav__button" style={{ textAlign: "center" }}>
          <p className="LeftNav__buttonHeading">Post a challenge</p>
        </div> */}

        <button
          className="LeftNav__button btn-outline"
          onClick={() => setShow(true)}
          type="button"
          style={{ marginTop: "20px" }}
        >
          <p className="LeftNav__buttonHeading">+ Add Risk</p>
        </button>

        <Activity
          myDashboard={myDashboard}
          myRisk={myRisk}
          myTask={myTask}
          myReport={myReport}
        />

        <Admin
          isRole={isRole}
          isUser={isUser}
          isGroup={isGroup}
          isWorkspace={isWorkspace}
          isWorkflow={isWorkflow}
          isRiskTemplate={isRiskTemplate}
          isSetting={isSetting}
        />
      </div>
    </>
  );
}
