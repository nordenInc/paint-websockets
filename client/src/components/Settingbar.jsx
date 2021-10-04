import React from "react";
import toolsState from "../store/toolsState";
import "../styles/toolbar.scss";

const Settingbar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Line width</label>
      <input
        onChange={(e) => toolsState.setLineWidth(e.target.value)}
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        defaultValue={1}
        max={50}
      />
      <label htmlFor="stroke-color">Stroke color</label>
      <input
        id="stroke-color"
        type="color"
        onChange={(e) => toolsState.setStrokeColor(e.target.value)}
      />
    </div>
  );
};

export default Settingbar;
