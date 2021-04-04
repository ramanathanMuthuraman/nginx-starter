const shell = require("shelljs");
require("dotenv").config();
if (shell.exec(`nginx  -c ${process.env.NGINX_CONFIG_PATH}`).code !== 0) {
  shell.echo("Nginx failed to start");
  shell.exit(1);
}
