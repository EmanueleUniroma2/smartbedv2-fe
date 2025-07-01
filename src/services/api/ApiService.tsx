import { ReadingController } from "./controllers/ReadingController";
import { RoleController } from "./controllers/RoleController";
import { SensorController } from "./controllers/SensorController";
import { SessionController } from "./controllers/SessionController";
import { UserController } from "./controllers/UserController";

const ApiService = {
  SessionController,
  ReadingController,
  UserController,
  SensorController,
  RoleController,
};

export default ApiService;
