import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useRouteData } from "remix";
import styles from "../styles/team.css";
// import styles2 from "../styles/team.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    // { rel: "stylesheet", href: styles2 },
  ];
}

export function loader() {
  // you can point to whatever org you want, ofc
  return fetch("https://api.github.com/orgs/reacttraining/members");
}

export default function Team() {
  let data = useRouteData();

  return (
    <div>
      <h2>Team</h2>
      <p>This is a wrapper of sorts!</p>
      <ul>
        {data.map((member) => (
          <li key={member.id}>
            <Link to={member.login}>{member.login}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
