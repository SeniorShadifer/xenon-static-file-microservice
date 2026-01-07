import React from "react";

import "./Container.css";

interface ContainerProperties {
  children?: React.ReactNode;

  wrap?: boolean;

  fullscreen_x?: boolean;
  fullscreen_y?: boolean;

  center_x?: boolean;
  center_y?: boolean;
}

export default class Container extends React.Component<ContainerProperties> {
  render(): React.ReactNode {
    return (
      <div
        className={`container 
        ${this.props.center_x ? "center_x" : ""} 
        ${this.props.center_y ? "center_y" : ""} 
        ${this.props.fullscreen_x ? "fullscreen_x" : ""}
        ${this.props.fullscreen_y ? "fullscreen_y" : ""}
        
        ${this.props.wrap ? "wrap" : ""}
        `}
      >
        {this.props.children}
      </div>
    );
  }
}
