import SettingsModules from "@/components/modules/Settings";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile settings | Fu - Dever",
};

function Settings() {
  return <SettingsModules />;
}

export default Settings;
