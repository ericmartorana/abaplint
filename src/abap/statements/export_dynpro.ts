import {Statement} from "./statement";
import {verNot, str, seq, IRunnable} from "../combi";
import {Source} from "../expressions";
import {Version} from "../../version";

export class ExportDynpro extends Statement {

  public static get_matcher(): IRunnable {
    let ret = seq(str("EXPORT DYNPRO"),
                  new Source(),
                  new Source(),
                  new Source(),
                  new Source(),
                  str("ID"),
                  new Source());

    return verNot(Version.Cloud, ret);
  }

}