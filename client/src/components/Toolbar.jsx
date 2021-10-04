import React from "react";
import canvasState from "../store/canvasState";
import toolsState from "../store/toolsState";
import "../styles/toolbar.scss";
import Brush from "../tools/Brush";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Rect from "../tools/Rect";
import Line from "../tools/Line";

const Toolsbar = () => {
  const changeColor = (e) => {
    toolsState.setStrokeColor(e.target.value);
    toolsState.setFillColor(e.target.value);
  };

  const download = () => {
    const dataurl = canvasState.canvas.toDataURL();
    const a = document.createElement("a");
    a.href = dataurl;
    a.download = canvasState.sessionId + ".jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() =>
          toolsState.setTool(
            new Brush(canvasState.canvas, canvasState.socket, canvasState.id)
          )
        }
      ></button>
      <button
        className="toolbar__btn rect"
        onClick={() =>
          toolsState.setTool(
            new Rect(canvasState.canvas, canvasState.socket, canvasState.id)
          )
        }
      ></button>
      <button
        className="toolbar__btn circle"
        onClick={() => toolsState.setTool(new Circle(canvasState.canvas))}
      ></button>
      <button
        className="toolbar__btn eraser"
        onClick={() => toolsState.setTool(new Eraser(canvasState.canvas))}
      ></button>
      <button
        className="toolbar__btn line"
        onClick={() => toolsState.setTool(new Line(canvasState.canvas))}
      ></button>
      <input
        onChange={(e) => changeColor(e)}
        style={{ marginLeft: 10 }}
        type="color"
      />
      <button
        className="toolbar__btn undo"
        onClick={() => canvasState.undo()}
      ></button>
      <button
        className="toolbar__btn redo"
        onClick={() => canvasState.redo()}
      ></button>
      <button className="toolbar__btn save" onClick={() => download()}></button>
    </div>
  );
};

export default Toolsbar;
