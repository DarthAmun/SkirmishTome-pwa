import Dexie from "dexie";
import Spell from "../data/Spell";

export class MyAppDatabase extends Dexie {
  spells: Dexie.Table<Spell, number>;

  constructor() {
    super("SkirmishTomeDB");
    this.version(1).stores({
      spells:
        "++id, name, classes, sources, level, school, time, range, components, duration, ritual, text, pic",
    });
   
    this.spells = this.table("spells");
  }
}
