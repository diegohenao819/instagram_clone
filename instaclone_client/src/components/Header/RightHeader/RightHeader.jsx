import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./RightHeader.scss";
import useAuth from "../../../hooks/useAuth";
import ImageNotFound from "../../../assets/png/avatar.png";
export default function RightHeader() {
  const {auth} = useAuth();
 

  return (
    <>
      <div className="right-header">
        <Link to="/">
          <Icon name="home" />
        </Link>
        <Icon name="plus" />
        <Link to={`/${auth.username}`} >
          <Image src={ImageNotFound} avatar />
        </Link>
      </div>
    </>
  );
}
