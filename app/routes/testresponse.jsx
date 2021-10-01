import React from "react";
import { useRouteData } from "remix";

export function meta() {
  return {
    title: "Weeee",
    description: "Hooray",
  };
}

export function loader() {
  return new Response(JSON.stringify({ teapot: true }), {
    status: 418,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "max-age=3600",
    },
  });
}

export default function Testaronioni() {
  let data = useRouteData();
  console.log(data);

  return (
    <div>
      <h1>TEST RESPONSE</h1>
      {JSON.stringify(data)}
    </div>
  );
}
