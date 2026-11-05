import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/klient-indywidualny/bankowosc-elektroniczna")({
  component: BankowoscLayout,
});

function BankowoscLayout() {
  return <Outlet />;
}
