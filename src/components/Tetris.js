import React, { useState } from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';



const Tetris = ({ callback }) => {
  const [dropTime, setDropTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage();

  console.log('re-render');

  return (
    <StyledTetrisWrapper>
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
            <StartButton />
          </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
};

export default Tetris;