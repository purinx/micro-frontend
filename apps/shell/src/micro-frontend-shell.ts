import { constructRoutes, constructApplications, constructLayoutEngine } from 'single-spa-layout';
import { registerApplication, start } from 'single-spa';

const routes = constructRoutes(document.querySelector('#single-spa-layout'), {
  loaders: {
    dashboard: '<h1>Loading Dashboard</h1>',
    menu: '<h1>Loading Menu</h1>',
    auth: '<h1>Loading Auth</h1>',
  },
  errors: {
    dashboard: '<h1>Failed to load Dashboard</h1>',
    menu: '<h1>Filed to load Menu</h1>',
    auth: '<h1>Failed to load Auth</h1>',
  },
  props: {},
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication);

layoutEngine.activate();
start();
