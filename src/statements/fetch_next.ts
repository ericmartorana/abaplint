import {Statement} from "./statement";
import {str, seq, alt, opt, IRunnable} from "../combi";
import {Target, Source} from "../expressions";

export class FetchNext extends Statement {

  public static get_matcher(): IRunnable {
    let size = seq(str("PACKAGE SIZE"), new Source());

    let table = seq(alt(str("INTO"), str("APPENDING")),
                    opt(str("CORRESPONDING FIELDS OF")),
                    str("TABLE"),
                    new Target());

    let record = seq(str("INTO"),
                     opt(str("CORRESPONDING FIELDS OF")),
                     new Target());

    let ret = seq(str("FETCH NEXT CURSOR"),
                  new Source(),
                  alt(record, table),
                  opt(size));

    return ret;
  }

}