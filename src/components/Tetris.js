import React, { useState } from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';
import { createStage } from '../gameHelpers';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';



const Tetris = ({ callback }) => {
  const [dropTime, setDropTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log('re-render');

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  }

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  }

  const dropPlayer = () => {
    drop();
  }


  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
          <aside>
            {gameOver ? 
              (<Display gameOver={gameOver} text="Game Over" />)
              : ( <div>
                  <Display text="Score" />
                  <Display text="Rows" />
                  <Display text="Level" />
                </div>
              )
            }
            <StartButton callback={startGame} />
          </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
};

export default Tetris;