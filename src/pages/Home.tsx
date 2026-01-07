import React from "react";

import Container from "../classes/components/Container";
import PageTitle from "../classes/components/PageTitle";
import Title from "../classes/components/Title";
import Text from "../classes/components/Text";
import Icon from "../classes/components/Icon";

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <>
          <PageTitle title="Home"></PageTitle>
        </>
        <Container center_y fullscreen_x wrap>
          <Icon>
            <i className="bi bi-brilliance"></i>
          </Icon>
          <Title>Hello, world!</Title>
          <Text>
            Welcome to "Xenon" - open-source, free and secure web-service for
            I2P.
          </Text>
        </Container>
      </>
    );
  }
}
