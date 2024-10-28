import React from "react";
import { VercelTabBar } from "./components/vercel-tab-bar";
import { CalTabBar } from "./components/cal-tab-bar";

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <VercelTabBar />
      <CalTabBar />
    </div>
  );
}
