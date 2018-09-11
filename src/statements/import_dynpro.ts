import {Statement} from "./statement";
import {str, seq, IRunnable} from "../combi";
import {Target, Source} from "../expressions";

export class ImportDynpro extends Statement {

  public static get_matcher(): IRunnable {
    return seq(str("IMPORT DYNPRO"),
               new Target(),
               new Target(),
               new Target(),
               new Target(),
               str("ID"),
               new Source());
  }

}