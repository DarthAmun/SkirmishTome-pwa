import Dexie from "dexie";
import Race from "../data/Race";
import RandomTable from "../data/RandomTable";
import Talent from "../data/Talent";

export class MyAppDatabase extends Dexie {
  randomTables: Dexie.Table<RandomTable, number>; // number = type of the primkey
  talents: Dexie.Table<Talent, number>;
  races: Dexie.Table<Race, number>;

  constructor() {
    super("SkirmishTomeDB");
    this.version(1).stores({
      talents: "++id, name, isFlaw, cost, prerequisite, effect, type, stress",
      randomTables: "++id, name, rows, header, filename",
    });
    this.version(2).stores({
      talents: "++id, name, isFlaw, cost, prerequisite, effect, type, stress",
      races: "++id, name, hp, abilityModifier, talents, flaws",
      randomTables: "++id, name, rows, header, filename",
    });

    this.talents = this.table("talents");
    this.races = this.table("races");
    this.randomTables = this.table("randomTables");
  }
}
