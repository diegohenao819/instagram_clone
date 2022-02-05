import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";
import "./Profile.scss";

export default function Profile(props) {
    
  const { username } = props;
 
  const {data, loading, error} = useQuery(GET_USER, {
    variables: {username}
  });

  console.log(data);
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}
