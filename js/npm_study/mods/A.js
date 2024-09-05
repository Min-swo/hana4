// mods/A.js
import { b } from "./B.js";
import defC, { c } from "./C.js";

// 이 위치 OK! (ModuleTable 선등록)
export const afn = () => console.log("a.afn!!");

const DEPTH = " → ";
console.log("🚀  A.DEPTH:", DEPTH);

b();
c();
defC();
//export const afn = () => console.log('a.afn!!'); // TDZ Error (uninitialize)
