import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/aktualnosci")({
  component: AktualnosciLayout,
});

function AktualnosciLayout() {
  return <Outlet />;
}
