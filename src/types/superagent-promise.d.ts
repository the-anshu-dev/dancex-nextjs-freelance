declare module "superagent-promise" {
  import * as superagent from "superagent";
  export default function superagentPromise(
    agent: typeof superagent,
    PromiseConstructor: PromiseConstructor,
  ): typeof superagent;
}
