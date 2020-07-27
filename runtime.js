const runtime = require('noflo-nodejs');
// This function returns a Promise that resolves when the NoFlo runtime has started up
startRuntime(graphPath, options = {}) {
  // Configure noflo-nodejs. Options here map roughly to the standard command-line arguments
  const settings = {
    id: '9f1432b1-a259-454a-bb67-e9d91525cc63', // Set an unique UUID for your application instance
    label: 'My cool app',
    baseDir: __dirname,
    host: 'localhost',
    port: 3569,
    ...options,
  };
  return runtime(graphPath, settings);
}
