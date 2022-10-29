import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";
import "systemjs-babel";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    dashboard: "<h1>Loading Dashboard</h1>",
    menu: "<h1>Loading Menu</h1>",
  },
  errors: {
    dashboard: "<h1>Failed to load Dashboard</h1>",
    menu: "<h1>Filed to load Menu</h1>",
  },
  props: {},
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});
// Delay starting the layout engine until the styleguide CSS is loaded
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

// Activate the layout engine once the styleguide CSS is loaded
layoutEngine.activate();
start();
