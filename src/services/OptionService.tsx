import { reciveAll, reciveAllPromise, saveNew } from "./DatabaseService";
import { IndexableType } from "dexie";
import Talent, { isTalent } from "../data/Talent";

export const scanImportFileTest = async (
  json: any,
  fileName: string,
  callback: () => void
) => {
  let promList: Promise<any>[] = [];

  if (!Array.isArray(json)) {
    json = [json];
  }

  json.forEach((obj: any) => {
    if (isTalent(obj)) {
      promList.push(saveNew("talents", obj as Talent, fileName));
    }
  });
  await Promise.all(promList);
  callback();
};

// const scanForFormatErrors = (obj: any) => {
//   const itemFormatErrors = findItemFromattError(obj);
//   let itemFailCount: number = 0;
//   for (const value of Object.entries(itemFormatErrors)) {
//     if (!value[1]) itemFailCount++;
//   }
//   const gearFormatErrors = findGearFormattError(obj);
//   let gearFailCount: number = 0;
//   for (const value of Object.entries(gearFormatErrors)) {
//     if (!value[1]) gearFailCount++;
//   }
//   const spellFormatErrors = findSpellFormattError(obj);
//   let spellFailCount: number = 0;
//   for (const value of Object.entries(spellFormatErrors)) {
//     if (!value[1]) spellFailCount++;
//   }
//   const monsterFormatErrors = findMonsterFormattError(obj);
//   let monsterFailCount: number = 0;
//   for (const value of Object.entries(monsterFormatErrors)) {
//     if (!value[1]) monsterFailCount++;
//   }
//   const raceFormatErrors = findRaceFormattError(obj);
//   let raceFailCount: number = 0;
//   for (const value of Object.entries(raceFormatErrors)) {
//     if (!value[1]) raceFailCount++;
//   }
//   const subraceFormatErrors = findSubraceFormattError(obj);
//   let subraceFailCount: number = 0;
//   for (const value of Object.entries(subraceFormatErrors)) {
//     if (!value[1]) subraceFailCount++;
//   }
//   const classFormatErrors = findClassFormattError(obj);
//   let classFailCount: number = 0;
//   for (const value of Object.entries(classFormatErrors)) {
//     if (!value[1]) classFailCount++;
//   }
//   const subclassFormatErrors = formattSubclassFromattError(obj);
//   let subclassFailCount: number = 0;
//   for (const value of Object.entries(subclassFormatErrors)) {
//     if (!value[1]) subclassFailCount++;
//   }
//   const selectionFormatErrors = findSelectionFormattError(obj);
//   let selectionFailCount: number = 0;
//   for (const value of Object.entries(selectionFormatErrors)) {
//     if (!value[1]) selectionFailCount++;
//   }

//   let errors: any[] = [];
//   if (
//     itemFailCount <= gearFailCount &&
//     itemFailCount <= spellFailCount &&
//     itemFailCount <= raceFailCount &&
//     itemFailCount <= subraceFailCount &&
//     itemFailCount <= classFailCount &&
//     itemFailCount <= subclassFailCount &&
//     itemFailCount <= selectionFailCount &&
//     itemFailCount <= monsterFailCount
//   ) {
//     errors.push({ item: itemFormatErrors });
//   }
//   if (
//     gearFailCount <= itemFailCount &&
//     gearFailCount <= spellFailCount &&
//     gearFailCount <= raceFailCount &&
//     gearFailCount <= subraceFailCount &&
//     gearFailCount <= classFailCount &&
//     gearFailCount <= subclassFailCount &&
//     gearFailCount <= selectionFailCount &&
//     gearFailCount <= monsterFailCount
//   ) {
//     errors.push({ gear: gearFormatErrors });
//   }
//   if (
//     spellFailCount <= itemFailCount &&
//     spellFailCount <= gearFailCount &&
//     spellFailCount <= raceFailCount &&
//     spellFailCount <= subraceFailCount &&
//     spellFailCount <= classFailCount &&
//     spellFailCount <= subclassFailCount &&
//     spellFailCount <= selectionFailCount &&
//     spellFailCount <= monsterFailCount
//   ) {
//     errors.push({ spell: spellFormatErrors });
//   }
//   if (
//     monsterFailCount <= itemFailCount &&
//     monsterFailCount <= gearFailCount &&
//     monsterFailCount <= raceFailCount &&
//     monsterFailCount <= subraceFailCount &&
//     monsterFailCount <= classFailCount &&
//     monsterFailCount <= subclassFailCount &&
//     monsterFailCount <= selectionFailCount &&
//     monsterFailCount <= spellFailCount
//   ) {
//     errors.push({ monster: monsterFormatErrors });
//   }
//   if (
//     raceFailCount <= itemFailCount &&
//     raceFailCount <= gearFailCount &&
//     raceFailCount <= monsterFailCount &&
//     raceFailCount <= subraceFailCount &&
//     raceFailCount <= classFailCount &&
//     raceFailCount <= subclassFailCount &&
//     raceFailCount <= selectionFailCount &&
//     raceFailCount <= spellFailCount
//   ) {
//     errors.push({ race: raceFormatErrors });
//   }
//   if (
//     subraceFailCount <= itemFailCount &&
//     subraceFailCount <= gearFailCount &&
//     subraceFailCount <= monsterFailCount &&
//     subraceFailCount <= raceFailCount &&
//     subraceFailCount <= classFailCount &&
//     subraceFailCount <= subclassFailCount &&
//     subraceFailCount <= selectionFailCount &&
//     subraceFailCount <= spellFailCount
//   ) {
//     errors.push({ subrace: subraceFormatErrors });
//   }
//   if (
//     classFailCount <= itemFailCount &&
//     classFailCount <= gearFailCount &&
//     classFailCount <= monsterFailCount &&
//     classFailCount <= raceFailCount &&
//     classFailCount <= subraceFailCount &&
//     classFailCount <= subclassFailCount &&
//     classFailCount <= selectionFailCount &&
//     classFailCount <= spellFailCount
//   ) {
//     errors.push({ class: classFormatErrors });
//   }
//   if (
//     subclassFailCount <= itemFailCount &&
//     subclassFailCount <= gearFailCount &&
//     subclassFailCount <= monsterFailCount &&
//     subclassFailCount <= raceFailCount &&
//     subclassFailCount <= subraceFailCount &&
//     subclassFailCount <= classFailCount &&
//     subclassFailCount <= selectionFailCount &&
//     subclassFailCount <= spellFailCount
//   ) {
//     errors.push({ subclass: subclassFormatErrors });
//   }
//   if (
//     selectionFailCount <= itemFailCount &&
//     selectionFailCount <= gearFailCount &&
//     selectionFailCount <= monsterFailCount &&
//     selectionFailCount <= raceFailCount &&
//     selectionFailCount <= subraceFailCount &&
//     selectionFailCount <= classFailCount &&
//     selectionFailCount <= subclassFailCount &&
//     selectionFailCount <= spellFailCount
//   ) {
//     errors.push({ selection: selectionFormatErrors });
//   }
//   return JSON.stringify({ failedObject: obj, Errors: errors }, null, 2);
// };

export const exportAllFromTable = (tableName: string, filename: string) => {
  reciveAll(tableName, (all: IndexableType[]) => {
    let entity = { [tableName]: all };
    let contentType = "application/json;charset=utf-8;";
    var a = document.createElement("a");
    a.download = filename;
    a.href =
      "data:" + contentType + "," + encodeURIComponent(JSON.stringify(entity));
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};

export const exportAll = async (filename: string) => {
  const spells = await reciveAllPromise("spells");
  const powers = await reciveAllPromise("powers");
  const talents = await reciveAllPromise("talents");
  const races = await reciveAllPromise("races");

  let all: any = {
    spells: spells,
    powers: powers,
    talents: talents,
    races: races,
  };

  let contentType = "application/json;charset=utf-8;";

  var a = document.createElement("a");
  a.download = filename;
  a.href =
    "data:" + contentType + "," + encodeURIComponent(JSON.stringify(all));
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
