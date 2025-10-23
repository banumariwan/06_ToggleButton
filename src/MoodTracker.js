import React, { useState } from "react";

function MoodTracker() {
  const [moods, setMoods] = useState({
    happy: 0,
    sad: 0,
    angry: 0,
    cool: 0,
  });

  const [lastMood, setLastMood] = useState("");

  const handleMoodClick = (mood) => {
    setMoods((prev) => ({
      ...prev,
      [mood]: prev[mood] + 1,
    }));
    setLastMood(mood);
  };

  const handleReset = () => {
    setMoods({ happy: 0, sad: 0, angry: 0, cool: 0 });
    setLastMood("");
  };

  return (
    <div style={styles.container}>
      <h2>Emoji Mood Tracker</h2>
      <div style={styles.buttons}>
        <button style={styles.btn} onClick={() => handleMoodClick("happy")}>😊</button>
        <button style={styles.btn} onClick={() => handleMoodClick("sad")}>😢</button>
        <button style={styles.btn} onClick={() => handleMoodClick("angry")}>😡</button>
        <button style={styles.btn} onClick={() => handleMoodClick("cool")}>😎</button>
      </div>

      <div style={styles.summary}>
        <h3>Mood Summary</h3>
        <p>😊 Happy: {moods.happy}</p>
        <p>😢 Sad: {moods.sad}</p>
        <p>😡 Angry: {moods.angry}</p>
        <p>😎 Cool: {moods.cool}</p>
      </div>

      <h3 style={{ color: "purple" }}>
        {lastMood
          ? `You’re feeling ${lastMood.toUpperCase()}!`
          : "Click a mood to begin!"}
      </h3>

      <button style={styles.resetBtn} onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  buttons: {
    margin: "20px 0",
  },
  btn: {
    margin: "5px",
    fontSize: "24px",
    padding: "10px 15px",
    cursor: "pointer",
  },
  summary: {
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    display: "inline-block",
    padding: "15px 25px",
    marginBottom: "10px",
  },
  resetBtn: {
    background: "#ff6666",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default MoodTracker;
