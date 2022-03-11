import IEntity from "../data/IEntity";
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
import { saveNewFromList } from "./DatabaseService";

export const scanImportedSpellCsv = (csv: Array<any>, filename: string) => {
  let listOfSpells: Array<Spell> = [];
  console.log("Raw", csv);
  csv.slice(1).forEach((row: Array<string>) => {
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
      "",
      row[28],
      row[31],
      0,
      +row[29],
      SpellScalingEffect.find(row[14]),
      SpellTarget.find(row[3]),
      SpellAoeRadius.find(row[9]),
      [
        SpellDamage.find(row[13]),
        SpellDamage.find(row[14]),
        SpellDamage.find(row[15]),
      ],
      SpellDirectEffects.NONE,
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
      row[6]?.toLowerCase() === "yes" ? true : false
    );
    newSpell.drain = Spell.calcDrain(newSpell);
    listOfSpells.push(newSpell);
  });
  console.log("Processed Spells", listOfSpells);
  saveInDB("spells", listOfSpells, filename);
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
