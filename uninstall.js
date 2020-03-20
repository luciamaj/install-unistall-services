var Service = require('node-windows').Service;

let hello = 'helloworld.js';
let server = 'C:\\xampp562\\htdocs\\servers\\monitoraggio-periferica-server-computer\\periferica.js';

// Create a new service object
var svc = new Service({
  name:'Server hello!',
  script: require('path').join(hello)
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();