import React from "react";
import { useState } from "react";
import "/src/styles/App.css";
import PerformanceCard from "./Performance";
import ImgProfile from "/src/assets/image-jeremy.png";
import Card from "./card.jsx";
import info from "/data.json";
import WorkImg from "/src/assets/icon-work.svg";
import playImg from "/src/assets/icon-play.svg";
import StudyImg from "/src/assets/icon-study.svg";
import ExerciseImg from "/src/assets/icon-exercise.svg";
import socialImg from "/src/assets/icon-social.svg";
import SelfImg from "/src/assets/icon-self-care.svg";

function App() {
  /*Work State */
  const [workTime, setWorkTime] = useState(info[0].timeframes.daily.current);
  const [workPrevious, setWorkPrevious] = useState(
    info[0].timeframes.daily.previous
  );
  /*play State */
  const [playTime, setplayTime] = useState(info[1].timeframes.daily.current);
  const [playPrevious, setplayPrevious] = useState(
    info[1].timeframes.daily.previous
  );
  /*Study State */
  const [studyTime, setStudyTime] = useState(info[2].timeframes.daily.current);
  const [studyPrevious, setStudyPrevious] = useState(
    info[2].timeframes.daily.previous
  );
  /*Exercise State */
  const [exerciseTime, setExerciseTime] = useState(
    info[3].timeframes.daily.current
  );
  const [exercisePrevious, setExercisePrevious] = useState(
    info[3].timeframes.daily.previous
  );
  /*Social State */
  const [socialTime, setSocialTime] = useState(
    info[4].timeframes.daily.current
  );
  const [socialPrevious, setSocialPrevious] = useState(
    info[4].timeframes.daily.previous
  );
  /*Self State */
  const [selfTime, setSelfTime] = useState(info[5].timeframes.daily.current);
  const [selfPrevious, setSelfPrevious] = useState(
    info[5].timeframes.daily.previous
  );

  function clickeado(tab) {
    /*Work State */
    setWorkTime(info[0].timeframes[tab].current);
    setWorkPrevious(info[0].timeframes[tab].previous);
    /*play State */
    setplayTime(info[1].timeframes[tab].current);
    setplayPrevious(info[1].timeframes[tab].previous);
    /*Study State */
    setStudyTime(info[2].timeframes[tab].current);
    setStudyPrevious(info[2].timeframes[tab].previous);
    /*Exercise State */
    setExerciseTime(info[3].timeframes[tab].current);
    setExercisePrevious(info[3].timeframes[tab].previous);
    /*Social State */
    setSocialTime(info[4].timeframes[tab].current);
    setSocialPrevious(info[4].timeframes[tab].previous);
    /*Self State */
    setSelfTime(info[5].timeframes[tab].current);
    setSelfPrevious(info[5].timeframes[tab].previous);
  }
  /*Aply Animation */
  function animation() {
    document.querySelectorAll("#main-card-container").forEach((item) => {
      item.classList.add("fadeInAnimation");
    });
    setTimeout(() => {
      document.querySelectorAll("#main-card-container").forEach((item) => {
        item.classList.remove("fadeInAnimation");
      });
    }, 1000);
  }
  return (
    <>
      <section>
        <div className="card_profile">
          <PerformanceCard
            ImgProfile={ImgProfile}
            name={"Jeremy"}
            lastName={"Robson"}
            button={clickeado}
            animation={animation}
          />
        </div>
        <div className="utilities">
          <Card
            cardImg={WorkImg}
            action="Work"
            time={workTime}
            previous={workPrevious}
          />
          <Card
            cardImg={playImg}
            action="Play"
            time={playTime}
            previous={playPrevious}
          />
          <Card
            cardImg={StudyImg}
            action="Study"
            time={studyTime}
            previous={studyPrevious}
          />
          <Card
            cardImg={ExerciseImg}
            action="Exercise"
            time={exerciseTime}
            previous={exercisePrevious}
          />
          <Card
            cardImg={socialImg}
            action="Social"
            time={socialTime}
            previous={socialPrevious}
          />
          <Card
            cardImg={SelfImg}
            action="Self Care"
            time={selfTime}
            previous={selfPrevious}
          />
        </div>
      </section>
    </>
  );
}

export default App;
