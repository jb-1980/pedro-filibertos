import { combos } from "./src/combo/combos.js"
import { menuitems as leftitems } from "./src/leftmenu/menuitems.js"
import { menuitems as rightitems } from "./src/rightmenu/menuitems.js"
import fs from "fs"

fs.writeFileSync(
  "./assets/data/left-menu-items.json",
  JSON.stringify(leftitems, null, 2)
)
fs.writeFileSync(
  "./assets/data/right-menu-items.json",
  JSON.stringify(rightitems, null, 2)
)
fs.writeFileSync(
  "./assets/data/combo-items.json",
  JSON.stringify(combos, null, 2)
)
