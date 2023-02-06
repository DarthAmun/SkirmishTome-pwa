import IEntity from "../data/IEntity";
import Power from "../data/Power";
import Race from "../data/Race";
import Spell from "../data/Spell";
import {
  SpellSource,
  SpellRite,
  SpellDuration,
  SpellRange,
  SpellSchool,
  SpellTarget,
  SpellDrainType,
  SpellLevel,
  SpellCastTime,
  SpellDamage,
  SpellScalingEffect,
  SpellAoeRadius,
  SpellDirectEffects,
  SpellProjectileType,
  SpellProjectileNumber,
  SpellDamageType,
  SpellTargetingType,
  SpellLosRange,
  SpellSize,
  SpellPureDamage,
  SpellHp,
} from "../data/SpellValues";
import Talent from "../data/Talent";
import { saveNewFromList } from "./DatabaseService";

export const scanImportedSpellCsv = (csv: Array<any>, filename: string) => {
  let listOfSpells: Array<Spell> = [];
  console.log("Raw", csv);
  csv.slice(1).forEach((row: Array<string>) => {
    if (row.length > 1) {
      let newSpell = new Spell(
        0,
        row[0],
        SpellSource.find(row[1]),
        SpellCastTime.find(row[24]),
        SpellRite.find(row[4]),
        SpellDuration.find(row[23]),
        "",
        SpellRange.find(row[7]),
        SpellSchool.find(row[25]),
        row[27],
        row[28],
        row[31],
        0,
        +row[29],
        SpellScalingEffect.find(row[12]),
        SpellTarget.find(row[3]),
        SpellAoeRadius.find(row[9]),
        [
          SpellDamage.find(row[13]),
          SpellDamage.find(row[14]),
          SpellDamage.find(row[15]),
        ],
        SpellDirectEffects.find(row[19]),
        SpellLevel.find(row[2]),
        SpellProjectileType.find(row[10]),
        SpellProjectileNumber.find(row[11]),
        SpellDamageType.find(row[17]),
        SpellTargetingType.find(row[16]),
        SpellLosRange.find(row[8]),
        SpellDrainType.find(row[22]),
        SpellPureDamage.find(row[18]),
        SpellSize.find(row[21]),
        SpellHp.find(row[20]),
        row[30]?.toLowerCase() === "yes" ? true : false,
        row[6]?.toLowerCase() === "yes" ? true : false,
        row[5]?.toLowerCase() === "yes" ? true : false
      );
      listOfSpells.push(Spell.calcDrain(newSpell));
    }
  });
  console.log("Processed Spells", listOfSpells);
  saveInDB("spells", listOfSpells, filename);
};

export const scanImportedRaceCsv = (csv: Array<any>, filename: string) => {
  let listOfRaces: Array<Race> = [];
  console.log("Raw", csv);
  csv.slice(1).forEach((row: Array<string>) => {
    if (row.length > 1) {
      const talents = row[6].split(",").map((t) => t.trim());
      const flaws = row[7].split(",").map((t) => t.trim());
      let newRace = new Race(
        0,
        row[0],
        +row[1],
        +row[9],
        row[4],
        row[3],
        +row[2],
        talents,
        flaws,
        row[5],
        +row[8]
      );
      listOfRaces.push(newRace);
    }
  });
  console.log("Processed Races", listOfRaces);
  saveInDB("races", listOfRaces, filename);
};

export const scanImportedTalentCsv = (csv: Array<any>, filename: string) => {
  let listOfTalents: Array<Talent> = [];
  console.log("Raw", csv);
  csv.slice(1).forEach((row: Array<string>) => {
    if (row.length > 1) {
      let newTalent = new Talent(
        0,
        row[0],
        row[9],
        row[2] === "Flaw",
        row[2] === "Flaw" ? +row[4] : +row[3],
        row[5],
        row[6],
        row[7],
        row[8]
      );
      listOfTalents.push(newTalent);
    }
  });
  console.log("Processed Talents", listOfTalents);
  saveInDB("talents", listOfTalents, filename);
};

export const scanImportedPowerCsv = (csv: Array<any>, filename: string) => {
  let listOfPowers: Array<Power> = [];
  console.log("Raw", csv);
  csv.slice(1).forEach((row: Array<string>) => {
    if (row.length > 1) {
      let newPower = new Power(
        0,
        row[0],
        row[8] === "-",
        row[7],
        +row[2],
        row[3],
        row[4],
        row[5] === "Active",
        row[9],
        row[6]
      );
      listOfPowers.push(newPower);
    }
  });
  console.log("Processed Powers", listOfPowers);
  saveInDB("powers", listOfPowers, filename);
};

export const saveInDB = async (
  tablename: string,
  listOfIEntity: Array<IEntity>,
  filename: string
) => {
  let listOfNew = [...listOfIEntity];
  await saveNewFromList(tablename, listOfNew, filename);
  console.log("Done saving");
};

// export const parseRowEntry = (entry: string): number => {
//   return parseInt(
//     entry.replaceAll("€", "").trim().replaceAll(".", "").replaceAll(",", "")
//   );
// };

// export const updateListsWith = (bookeeEntryJson: BookeeEntry[]) => {
//   bookeeEntryJson.forEach((entry: BookeeEntry) => {
//     reciveAllByAttributes(
//       "[dateDay+dateMonth+dateYear]",
//       [[entry.dateDay, entry.dateMonth, entry.dateYear]],
//       (data: any[]) => {
//         let isPresent = false;
//         data.forEach((dat: any) => {
//           const compDat = { ...dat };
//           delete compDat["id"];
//           if (JSON.stringify(compDat) === JSON.stringify(entry))
//             isPresent = true;
//         });
//         if (!isPresent) {
//           console.log(
//             `New Entry on ${
//               (entry.dateDay, entry.dateMonth, entry.dateYear)
//             } will be saved.`
//           );
//           saveNew(entry);
//         }
//       }
//     );
//   });
// };
