import React from "react";

import "./Title.css";

interface TitleProperties {
  children?: string | React.ReactNode;
}

export default class Title extends React.Component<TitleProperties> {
  render() {
    return <h1 className="header">{this.props.children}</h1>;
  }
}
