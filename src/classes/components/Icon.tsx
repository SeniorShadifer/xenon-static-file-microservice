import React from "react";

import "./Icon.css";

interface IconProperties {
  children?: React.ReactNode;
}

export default class Icon extends React.Component<IconProperties> {
  render(): React.ReactNode {
    return <div className="icon">{this.props.children}</div>;
  }
}
