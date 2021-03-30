import Dexie from "dexie";
import Race from "../data/Race";
import RandomTable from "../data/RandomTable";
import Spell from "../data/Spell";
import Talent from "../data/Talent";

export class MyAppDatabase extends Dexie {
  randomTables: Dexie.Table<RandomTable, number>; // number = type of the primkey
  talents: Dexie.Table<Talent, number>;
  races: Dexie.Table<Race, number>;
  spells: Dexie.Table<Spell, number>;

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
    this.version(3).stores({
      talents: "++id, name, isFlaw, cost, prerequisite, effect, type, stress",
      races: "++id, name, hp, abilityModifier, talents, flaws",
      randomTables: "++id, name, rows, header",
      spells:
        "++id, name, source, castTime, rite, duration, durationText, range, school, effect, damage, mastery,resist, drain",
    });

    this.talents = this.table("talents");
    this.spells = this.table("spells");
    this.races = this.table("races");
    this.randomTables = this.table("randomTables");
  }
}
