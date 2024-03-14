import React, { useState, useEffect } from "react";
import Questions from "./components/Questions";
import { MyContext } from "./MyContext";

const App = () => {
  
  const [score, setScore] = useState([]);
  const [avgScore, setAvgScore] = useState(0);


  useEffect(() => {
    const scr = score.reduce((curr, item, index) => {
      return curr += item
    }, 0);
    setAvgScore((scr/(5*score.length))*100)
  }, [score])
  

    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <div className="scoreDiv">
              <span className="score">Current Score: {(score[score.length-1]/5)*100 ? (score[score.length-1]/5)*100 : 0}</span>
              <span className="score">Average Score: {avgScore ? avgScore.toFixed(2) : 0}</span>
            </div>
          <MyContext.Provider value={{ score, setScore, avgScore, setAvgScore }}>
            <Questions />
          </MyContext.Provider>
          </div>
        </main>
      </div>
    );
}

export default App;
