import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "ULINE.",
  "ULINE /(80).",
];

statementType(tests, "ULINE", Statements.Uline);