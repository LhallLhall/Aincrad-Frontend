import React from "react";

export default function ControlButtons(props) {
    const StartButton = (
      <div className="btn btn-one btn-start text_color mb-0"
          onClick={props.handleStart}>
        <p className='text_color mb-0'>Start</p>
      </div>
    );
    const ActiveButtons = (
      <div className="btn-grp mb-0">
        <div className="btn btn-two text_color" 
            onClick={props.handleReset}>
            <p className='text_color mb-0'>Reset</p>
        </div>
        <div className="btn btn-one text_color" 
             onClick={props.handlePauseResume}>
              <p className='text_color mb-0'>{props.isPaused ? "Resume" : "Pause"}</p>
        </div>
      </div>
    );
    
    return (
      <div className="Control-Buttons">
        <div>{props.active ? ActiveButtons : StartButton}</div>
      </div>
    );
  }