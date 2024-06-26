import { Outlet } from "react-router-dom";

import { Header } from "../components/shared/header";
import { Footer } from "../components/shared/footer";

export function RootRoute() {
  return (
    <>
      <Header />

      <main className="mx-4">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
