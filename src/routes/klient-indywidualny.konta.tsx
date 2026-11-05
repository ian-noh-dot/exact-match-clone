import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/klient-indywidualny/konta")({
  component: KontaLayout,
});

function KontaLayout() {
  return <Outlet />;
}
