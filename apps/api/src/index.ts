import { createServer } from "./server";
import { log } from "@repo/logger";

const port = process.env.API_PORT || 4001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
