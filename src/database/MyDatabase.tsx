import Dexie from "dexie";
import RandomTable from "../data/RandomTable";
import Talent from "../data/Talent";

export class MyAppDatabase extends Dexie {
  randomTables: Dexie.Table<RandomTable, number>; // number = type of the primkey
  talents: Dexie.Table<Talent, number>;

  constructor() {
    super("SkirmishTomeDB");
    this.version(1).stores({
      talents: "++id, name, isFlaw, cost, prerequisite, effect, type, stress",
      randomTables: "++id, name, rows, header, filename",
    });
   
    this.talents = this.table("talents");
    this.randomTables = this.table("randomTables");
  }
}
