import { LiveReload } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import "../app/styles/index.css";

import { Links } from "@remix-run/react";
import stylesUrl from "./styles/index.css";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        Hello world
        <LiveReload />
        <Outlet />
      </body>
    </html>
  );
}
