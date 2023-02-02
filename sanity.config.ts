import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import StudioNavbar from "./components/StudioNavbar";
import { schemaTypes } from "./schemas";

import { theme as _theme } from "./theme";
const theme = _theme as import("sanity").StudioTheme;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Foodsi_Studio",
  title: "Foodsi_studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme,
});
