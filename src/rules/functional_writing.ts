import {Issue} from "../issue";
import {ABAPRule} from "./abap_rule";
import {ParsedFile} from "../files";

export class FunctionalWritingConf {
  public enabled: boolean = true;
}

export class FunctionalWriting extends ABAPRule {

  private conf = new FunctionalWritingConf();

  public getKey(): string {
    return "functional_writing";
  }

  public getDescription(): string {
    return "Use functional writing style";
  }

  public getConfig() {
    return this.conf;
  }

  public setConfig(conf: FunctionalWritingConf) {
    this.conf = conf;
  }

  public runParsed(file: ParsedFile) {
    let issues: Array<Issue> = [];

    for (let statement of file.getStatements()) {
      let code = statement.concatTokens().toUpperCase();
      if (this.startsWith(code, "CALL METHOD ")) {
        if (/\)[=-]>/.test(code) === true
            || /[=-]>\(/.test(code) === true
            || this.startsWith(code, "CALL METHOD (")) {
          continue;
        }
        let issue = new Issue(this, file, 1, statement.getStart());
        issues.push(issue);
      }
    }

    return issues;
  }

  private startsWith(str: string, value: string): boolean {
    return str.substr(0, value.length) === value;
  }

}