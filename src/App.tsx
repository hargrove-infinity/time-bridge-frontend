import { Fragment } from "react";
import { Toaster } from "sonner";
import { Router, ThemeSwitcher } from "@/components";

export const App = () => (
  <Fragment>
    <Toaster />
    <div className="flex items-center justify-center min-h-screen">
      <ThemeSwitcher />
      <Router />
    </div>
  </Fragment>
);
