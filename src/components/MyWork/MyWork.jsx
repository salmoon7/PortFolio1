import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";
function MyWork() {
  return (
    <div id="work" className="my-work">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showMore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" style={{ width: 15, height: 10 }} />
      </div>
    </div>
  );
}

export default MyWork;
