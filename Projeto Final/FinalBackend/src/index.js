import app from "./config/server.js";
import { envs } from "./helpers/utils.js";

app.listen(envs.PORT, "0.0.0.0", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
