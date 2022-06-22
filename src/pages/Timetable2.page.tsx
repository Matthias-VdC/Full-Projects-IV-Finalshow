import React, { useEffect, useState } from "react";
import imgFrame from "../assets/tv.png";
import TimetableItem from "../components/TimetableItem";
import Tetris from "react-tetris";
import BackArrow from "../components/BackArrow";
import { useNavigate } from "react-router-dom";

type inter = {
  HeldPiece: any;
  Gameboard: any;
  PieceQueue: any;
  points: any;
  linesCleared: any;
  state: any;
  controller: any;
};

function useKeyPress(targetKey: string): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }: any): void {
    if (key === targetKey) {
      setKeyPressed(!keyPressed);
    }
  }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}

export default function Timetable2() {
  const easterEgg: boolean = useKeyPress("8");
  const time = new Date();
  useEffect(() => {}, []);
  const navigate = useNavigate();
  const timetableData = [
    {
      time: "19:00",
      title: "intro",
      description:
        "Een kort overzicht van de verschillende onderdelen van de live show.",
    },
    {
      time: "19:01",
      title: "WEB & APP",
      description: "Voorstelling van de categorie WEB & APP.",
    },
    {
      time: "19:06",
      title: "SMART TECHNOLOGY",
      description: "Voorstelling van de categorie SMART TECHNOLOGY.",
    },
    {
      time: "19:11",
      title: "Spel 1: spill your guts",
      description: "Een kort spel waarin docenten het tegen elkaar opnemen.",
    },
    {
      time: "19:17",
      title: "MOTION",
      description: "Voorstelling van de categorie MOTION.",
    },
    {
      time: "19:22",
      title: "EXTENDED REALITY",
      description: "Voorstelling van de categorie EXTENDED REALITY.",
    },
    {
      time: "19:27",
      title: "Spel 2: spill your guts",
      description: "Een kort spel waarin docenten het tegen elkaar opnemen.",
    },
    {
      time: "19:32",
      title: "UITREIKING HOOFDPRIJS",
      description: "Uitreiking van de hoofdprijs",
    },
    {
      time: "19:35",
      title: "UITREIKING YOUNG POTENTIAL",
      description: "Uitreiking van de prijs voor young potential.",
    },
    {
      time: "19:38",
      title: "Outro",
      description: "",
    },
  ];

  return (
    <div id="teletext-container">
      {!easterEgg ? (
        <div id="teletext">
          <p id="hint-text" className="teletext pink-text">
            Press '8' for a surprise!
          </p>
          <p
            className="teletext red-text"
            id="back-arrow"
            onClick={() => navigate(-1)}
          >
            ← go back
          </p>
          <div className="teletext-subtitle">
            <p className="teletext">
              EhB → Anderlecht, BXL → Fri 24 Jun &nbsp;
            </p>
            <p className="yellow-text teletext">
              {time.toTimeString().substring(0, 8)}
            </p>
          </div>
          <div className="teletext-title">
            <svg viewBox="0 0 77.91 51.94">
              <polygon
                fill="red"
                points="51.94 36.36 57.14 36.36 57.14 31.17 62.33 31.17 62.33 25.97 67.53 25.97 67.53 20.78 72.72 20.78 72.72 15.58 67.53 15.58 67.53 10.39 62.33 10.39 62.33 5.19 57.14 5.19 57.14 0 51.94 0 46.75 0 41.55 0 36.36 0 31.17 0 25.97 0 20.78 0 20.78 5.19 15.58 5.19 15.58 10.39 10.39 10.39 10.39 15.58 5.19 15.58 5.19 20.78 5.19 25.97 5.19 31.17 0 31.17 0 36.36 0 41.55 5.19 41.55 5.19 46.75 5.19 51.94 10.39 51.94 15.58 51.94 20.78 51.94 25.97 51.94 25.97 46.75 20.78 46.75 20.78 41.55 20.78 36.36 20.78 31.17 20.78 25.97 20.78 20.78 25.97 20.78 25.97 15.58 31.17 15.58 36.36 15.58 41.55 15.58 46.75 15.58 46.75 20.78 41.55 20.78 41.55 25.97 36.36 25.97 36.36 31.17 36.36 36.36 41.55 36.36 41.55 41.55 46.75 41.55 51.94 41.55 51.94 36.36"
              />
              <polygon
                fill="red"
                points="72.72 41.55 67.53 41.55 62.33 41.55 57.14 41.55 57.14 46.75 51.94 46.75 51.94 51.94 57.14 51.94 62.33 51.94 67.53 51.94 72.72 51.94 77.91 51.94 77.91 46.75 77.91 41.55 72.72 41.55"
              />
            </svg>
            <div className="teletext double-height">
              <span className="cyan-text">
                &#xe054;&#xe049;&#xe04d;&#xe045;&#xe054;&#xe041;&#xe042;&#xe04c;&#xe045;
              </span>
              <span className="cyan-text">
                &#xe154;&#xe149;&#xe14d;&#xe145;&#xe154;&#xe141;&#xe142;&#xe14c;&#xe145;
              </span>
            </div>
          </div>
          <div className="timetable-container">
            {timetableData.map((item, i) => {
              return (
                <TimetableItem
                  time={item.time}
                  title={item.title}
                  desc={item.description}
                  key={i}
                />
              );
            })}
          </div>
          <div className="timetable-footer teletext">
            <svg viewBox="0 0 77.91 51.94">
              <polygon
                fill="red"
                points="51.94 36.36 57.14 36.36 57.14 31.17 62.33 31.17 62.33 25.97 67.53 25.97 67.53 20.78 72.72 20.78 72.72 15.58 67.53 15.58 67.53 10.39 62.33 10.39 62.33 5.19 57.14 5.19 57.14 0 51.94 0 46.75 0 41.55 0 36.36 0 31.17 0 25.97 0 20.78 0 20.78 5.19 15.58 5.19 15.58 10.39 10.39 10.39 10.39 15.58 5.19 15.58 5.19 20.78 5.19 25.97 5.19 31.17 0 31.17 0 36.36 0 41.55 5.19 41.55 5.19 46.75 5.19 51.94 10.39 51.94 15.58 51.94 20.78 51.94 25.97 51.94 25.97 46.75 20.78 46.75 20.78 41.55 20.78 36.36 20.78 31.17 20.78 25.97 20.78 20.78 25.97 20.78 25.97 15.58 31.17 15.58 36.36 15.58 41.55 15.58 46.75 15.58 46.75 20.78 41.55 20.78 41.55 25.97 36.36 25.97 36.36 31.17 36.36 36.36 41.55 36.36 41.55 41.55 46.75 41.55 51.94 41.55 51.94 36.36"
              />
              <polygon
                fill="red"
                points="72.72 41.55 67.53 41.55 62.33 41.55 57.14 41.55 57.14 46.75 51.94 46.75 51.94 51.94 57.14 51.94 62.33 51.94 67.53 51.94 72.72 51.94 77.91 51.94 77.91 46.75 77.91 41.55 72.72 41.55"
              />
            </svg>
            <p className="teletext">Erasmus Hogeschool Brussel</p>
            <p className="teletext">2022</p>
          </div>
        </div>
      ) : (
        <div className="tetris-container">
          <Tetris
            keyboardControls={{
              // Default values shown here. These will be used if no
              // `keyboardControls` prop is provided.
              down: "MOVE_DOWN",
              left: "MOVE_LEFT",
              right: "MOVE_RIGHT",
              space: "HARD_DROP",
              z: "FLIP_COUNTERCLOCKWISE",
              x: "FLIP_CLOCKWISE",
              up: "FLIP_CLOCKWISE",
              p: "TOGGLE_PAUSE",
              c: "HOLD",
              shift: "HOLD",
            }}
          >
            {({
              HeldPiece,
              Gameboard,
              PieceQueue,
              points,
              linesCleared,
              state,
              controller,
            }: inter) => (
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="teletext">Points: {points}</p>
                  <p className="teletext">Lines Cleared: {linesCleared}</p>
                </div>
                <Gameboard />
                {state === "LOST" && (
                  <div>
                    <p className="teletext red-text">Game Over</p>
                  </div>
                )}
              </div>
            )}
          </Tetris>
        </div>
      )}

      <div className="tv-overlay-container">
        <img src={imgFrame} alt="" />
      </div>
      <div className="black-bg"></div>
    </div>
  );
}
