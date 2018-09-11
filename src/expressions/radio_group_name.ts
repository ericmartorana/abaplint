import {regex as reg, Reuse, IRunnable} from "../combi";

export class RadioGroupName extends Reuse {
  public get_runnable(): IRunnable {
    return reg(/^[\w\d%]+$/);
  }
}