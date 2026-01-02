import React from "react";

import "./Container.css";
import setPageTitle from "../functions/setPageTitle";

interface ContainerProperties {
  children?: React.ReactNode;

  fullscreen_x?: boolean;
  fullscreen_y?: boolean;

  center_x?: boolean;
  center_y?: boolean;
}

export default class Container extends React.Component<ContainerProperties> {
  render(): React.ReactNode {
    setPageTitle("Home");

    return (
      <div
        className={`container 
        ${this.props.center_x ? "center_x" : ""} 
        ${this.props.center_y ? "center_y" : ""} 
        ${this.props.fullscreen_x ? "fullscreen_x" : ""}
        ${this.props.fullscreen_y ? "fullscreen_y" : ""}
        `}
      >
        {this.props.children}
      </div>
    );
  }
}
