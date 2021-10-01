import { useRouteData } from "remix";

import stylesUrl from "../styles/index.css";
import styles from "../styles/team.css";
import styles2 from "../styles/foam.css";

export function meta() {
  return {
    title: "Stream on, losers!",
    description: "This is a Remix demo hahahahaha",
  };
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: styles2 },
  ];
}

export function loader() {
  return { message: "this is awesome 😎" };
}

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix, nerds!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
