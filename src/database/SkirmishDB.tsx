import Dexie from "dexie";
import Item from "../data/Item";
import Power from "../data/Power";
import Race from "../data/Race";
import RandomTable from "../data/RandomTable";
import Skill from "../data/Skill";
import Spell from "../data/Spell";
import Talent from "../data/Talent";
import Tradition from "../data/Tradition";

export class SkirmishDB extends Dexie {
  randomTables: Dexie.Table<RandomTable, number>; // number = type of the primkey
  talents: Dexie.Table<Talent, number>;
  races: Dexie.Table<Race, number>;
  spells: Dexie.Table<Spell, number>;
  powers: Dexie.Table<Power, number>;
  skills: Dexie.Table<Skill, number>;
  items: Dexie.Table<Item, number>;
  traditions: Dexie.Table<Tradition, number>;

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
    this.version(4).stores({
      talents:
        "++id, name, isFlaw, cost, prerequisite, effect, type, stress, ticks",
      races: "++id, name, hp, abilityModifier, size, stamina, talents, flaws",
      randomTables: "++id, name, rows, header",
      spells:
        "++id, name, source, castTime, rite, duration, durationText, range, school, effect, damage, mastery, resist, drain, masteryDrain",
    });
    this.version(5).stores({
      talents:
        "++id, name, isFlaw, cost, prerequisite, effect, type, stress, ticks",
      races: "++id, name, hp, abilityModifier, size, stamina, talents, flaws",
      randomTables: "++id, name, rows, header",
      spells:
        "++id, name, source, castTime, rite, duration, durationText, range, school, effect, damage, mastery, resist, drain, masteryDrain",
      powers:
        "++id, name, source, isAdept, path, cost, prerequisite, effect, type, stress, ticks",
    });
    this.version(6).stores({
      talents:
        "++id, name, isFlaw, cost, prerequisite, effect, type, stress, ticks",
      races: "++id, name, hp, abilityModifier, size, stamina, talents, flaws",
      randomTables: "++id, name, rows, header",
      spells:
        "++id, name, source, castTime, rite, duration, durationText, range, school, effect, damage, mastery, resist, drain, masteryDrain",
      powers:
        "++id, name, source, isAdept, path, cost, prerequisite, effect, type, stress, ticks",
      skills:
        "++id, name, source, details, die, bonus, mod, disadvantage, advantage",
    });
    this.version(7).stores({
      talents:
        "++id, name, isFlaw, cost, prerequisite, effect, type, stress, ticks",
      races: "++id, name, hp, abilityModifier, size, stamina, talents, flaws",
      randomTables: "++id, name, rows, header",
      spells:
        "++id, name, source, castTime, rite, duration, durationText, range, school, effect, damage, mastery, resist, drain, masteryDrain",
      powers:
        "++id, name, source, isAdept, path, cost, prerequisite, effect, type, stress, ticks",
      skills:
        "++id, name, source, details, die, bonus, mod, disadvantage, advantage",
      items: "++id, name, description, quality",
      traditions: "++id, name, isPath, availablleSpellSources, powers",
    });

    this.talents = this.table("talents");
    this.spells = this.table("spells");
    this.races = this.table("races");
    this.powers = this.table("powers");
    this.skills = this.table("skills");
    this.items = this.table("items");
    this.traditions = this.table("traditions");
    this.randomTables = this.table("randomTables");
  }
}
