const Server = require('./Server/server.js');
const app = new Server();

// ^C on the commandline will end the process
process.on('SIGINT', () => {
  console.log('Received SIGINT');
  process.exit(1);
});

// Docker will send SIGTERM to stop the container
process.once('SIGTERM', () => {
  console.log('Received SIGTERM');
  process.exit(1);
});
