import React from "react";
import { useRouteData } from "remix";

export function loader() {
  return fetch("https://api.github.com/users/cassidoo");
}

export default function Hello() {
  let data = useRouteData();
  return (
    <div>
      <p>Hello, outlet component, from /cassidoo!</p>
      <p>{data.bio}</p>
    </div>
  );
}
