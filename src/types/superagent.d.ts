declare module "superagent" {
  import { SuperAgentStatic, Request } from "superagent";

  const superagent: SuperAgentStatic<Request>;

  export = superagent;
}
