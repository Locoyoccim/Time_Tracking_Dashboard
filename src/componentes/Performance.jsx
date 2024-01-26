import React from "react";
import { useState } from "react";
import "/src/styles/performance.css";

function Performance({ ImgProfile, name, lastName, button, animation }) {
  function activateTab(tabClass) {
    const tabs = [".daily", ".weekly", ".monthly"];

    tabs.forEach((tab) => {
      const element = document.querySelector(tab);
      if (tab === tabClass) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  function activeDaily() {
    activateTab(".daily");
  }

  function activeWeekly() {
    activateTab(".weekly");
  }

  function activeMonthly() {
    activateTab(".monthly");
  }

  return (
    <>
      <div id="main_profile_container">
        <div className="profile_container">
          <div className="img_container">
            <img src={ImgProfile} alt="Profile_img" />
          </div>
          <div className="about_user">
            <p className="report">Report for</p>
            <div className="names">
              <p className="name">{name}</p>
              <p className="lastname"> {lastName}</p>
            </div>
          </div>
        </div>
        <div className="timing-container">
          <button
            className="daily active"
            onClick={() => {
              activeDaily();
              button("daily");
              animation();
            }}
          >
            Daily
          </button>
          <button
            className="weekly "
            onClick={() => {
              activeWeekly();
              button("weekly");
              animation();
            }}
          >
            Weekly
          </button>
          <button
            className="monthly "
            onClick={() => {
              activeMonthly();
              button("monthly");
              animation();
            }}
          >
            Month
          </button>
        </div>
      </div>
    </>
  );
}

export default Performance;
