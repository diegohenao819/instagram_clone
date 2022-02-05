import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";

export default function LayoutBasic(props) {
  const { children } = props;
  console.log(props.children.type);
  return (
    <Fragment>
      <Header></Header>
      <Container className="layout-basic">{children}</Container>
    </Fragment>
  );
}
