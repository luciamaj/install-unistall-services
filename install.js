var Service = require('node-windows').Service;

// Create a new service object

let hello = 'helloworld.js';
let server = 'C:\\xampp562\\htdocs\\servers\\monitoraggio-periferica-server-computer\\periferica.js';

var svc = new Service({
  name:'Hello server',
  description: 'The nodejs.org example web server.',
  script: require('path').join(server),
  env:{
    name: "NODE_ENV",
    value: "production"
  }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!\nVisit http://127.0.0.1:4000 to see it in action.');
});

// Install the script as a service.
svc.install();
