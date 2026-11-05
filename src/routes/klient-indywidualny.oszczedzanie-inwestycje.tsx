import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/klient-indywidualny/oszczedzanie-inwestycje")({
  component: OszczedzanieLayout,
});

function OszczedzanieLayout() {
  return <Outlet />;
}
