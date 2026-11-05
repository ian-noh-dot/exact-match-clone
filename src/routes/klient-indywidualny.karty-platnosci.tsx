import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/klient-indywidualny/karty-platnosci")({
  component: KartyPlatnosciLayout,
});

function KartyPlatnosciLayout() {
  return <Outlet />;
}
