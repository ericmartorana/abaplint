import {Statement} from "./statement";
import {str, seq, alt, per, opt, plus, IRunnable} from "../combi";
import {Target, Source} from "../expressions";

export class SyntaxCheck extends Statement {

  public static get_matcher(): IRunnable {
    let program = seq(str("PROGRAM"), new Source());
    let offset = seq(str("OFFSET"), new Target());
    let frame = seq(str("FRAME ENTRY"), new Target());
    let include = seq(str("INCLUDE"), new Target());
    let trace = seq(str("TRACE-TABLE"), new Target());
    let line = seq(str("LINE"), new Target());
    let word = seq(str("WORD"), new Target());
    let messageId = seq(str("MESSAGE-ID"), new Target());
    let message = seq(str("MESSAGE"), new Target());
    let id = seq(str("ID"), new Source(), str("TABLE"), new Target());
    let replacing = seq(str("REPLACING"), new Target());
    let directory = seq(str("DIRECTORY ENTRY"), new Source());
    let dump = seq(str("SHORTDUMP-ID"), new Source());

    let syntax = seq(opt(str("PROGRAM")),
                     new Source(),
                     per(message,
                         line,
                         word,
                         offset,
                         program,
                         replacing,
                         directory,
                         frame,
                         include,
                         messageId,
                         trace,
                         dump,
                         plus(id)));

    let dynpro = seq(str("DYNPRO"),
                     new Source(),
                     new Source(),
                     new Source(),
                     new Source(),
                     per(message, line, word, offset, messageId));

    return seq(str("SYNTAX-CHECK FOR"), alt(syntax, dynpro));
  }

}