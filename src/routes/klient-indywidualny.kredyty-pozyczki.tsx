import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/klient-indywidualny/kredyty-pozyczki")({
  component: KredytyPozyczkiLayout,
});

function KredytyPozyczkiLayout() {
  return <Outlet />;
}
