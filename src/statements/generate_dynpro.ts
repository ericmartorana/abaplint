import {Statement} from "./statement";
import {str, seq, IRunnable} from "../combi";
import {Target, Source} from "../expressions";

export class GenerateDynpro extends Statement {

  public static get_matcher(): IRunnable {
    let ret = seq(str("GENERATE DYNPRO"),
                  new Source(),
                  new Source(),
                  new Source(),
                  new Source(),
                  str("ID"),
                  new Source(),
                  str("MESSAGE"),
                  new Target(),
                  str("LINE"),
                  new Target(),
                  str("WORD"),
                  new Target());

    return ret;
  }

}