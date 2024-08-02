import React, { useState, useEffect } from "react";
import "../styles.css";
import Swal from "sweetalert2";

function Game() {
  const [snake, setSnake] = useState([{ x: 5, y: 10 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [gameOver, setGameOver] = useState(false);
  const boardSize = 20;

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= boardSize ||
      head.y >= boardSize
    ) {
      setGameOver(true);
      return;
    }

    for (let segment of newSnake) {
      if (head.x === segment.x && head.y === segment.y) {
        setGameOver(true);
        return;
      }
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      });
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const changeDirection = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setDirection({ x: 0, y: -1 });
        break;
      case "ArrowDown":
        setDirection({ x: 0, y: 1 });
        break;
      case "ArrowRight":
        setDirection({ x: 1, y: 0 });
        break;
      case "ArrowLeft":
        setDirection({ x: -1, y: 0 });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        moveSnake();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  useEffect(() => {
    window.addEventListener("keydown", changeDirection);
    return () => window.removeEventListener("keydown", changeDirection);
  }, []);

  useEffect(() => {
    if (gameOver) {
      Swal.fire({
        title: "Game over.",
        text: "Click OK to restart the game",
        width: 600,
        padding: "3em",
      }).then(() => {
        resetGame();
      });
    }
  }, [gameOver]);

  const renderCell = (row, col) => {
    const isSnake = snake.some(
      (segment) => segment.x === col && segment.y === row
    );
    const isFood = food.x === col && food.y === row;
    return (
      <div
        key={`${row}-${col}`}
        className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
      />
    );
  };

  const createBoard = () => {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        board.push(renderCell(i, j));
      }
    }
    return board;
  };

  const resetGame = () => {
    setSnake([{ x: 5, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    setFood({ x: 10, y: 10 });
    setGameOver(false);
  };

  return (
    <>
      <div className="game-board">{createBoard()}</div>
    </>
  );
}

export default Game;
