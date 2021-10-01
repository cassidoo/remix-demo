import React from "react";
import { useRouteData } from "remix";

export function meta({ data, params }) {
  return {
    title: `Team Member: ${params.member}`,
    description: `${data.bio}`,
  };
}

export function loader({ params }) {
  return fetch(`https://api.github.com/users/${params.member}`);
}

export default function TeamMember() {
  let user = useRouteData();

  return (
    <div>
      <h3>{user.name}</h3>
      <img alt="user avatar" src={user.avatar_url} height="50" />
      <p>{user.bio}</p>
      <dl>
        <dt>Company</dt>
        <dd>{user.company}</dd>
        <dt>Location</dt>
        <dd>{user.location}</dd>
      </dl>
    </div>
  );
}
