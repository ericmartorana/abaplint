import {Statement} from "./statement";
import {str, seq, opt, IRunnable} from "../combi";
import {Source} from "../expressions";

export class CallScreen extends Statement {

  public static get_matcher(): IRunnable {
    let starting = seq(str("STARTING AT"), new Source(), new Source());
    let ending = seq(str("ENDING AT"), new Source(), new Source());

    let call = seq(str("CALL SCREEN"), new Source(), opt(seq(starting, opt(ending))));

    return call;
  }

}