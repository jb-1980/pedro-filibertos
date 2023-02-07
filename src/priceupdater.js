import { combos } from "./combo/combos-2022.js"
import { menuitems as leftItems } from "./leftmenu/menuitems-2022.js"
import { menuitems as rightItems } from "./rightmenu/menuitems-2022.js"
import fs from "fs"

const PRICE_INCREASE = 1.1

const _combos = combos.map((combo) => {
  const price = Number(combo.price.replace("$", "")) * PRICE_INCREASE
  return {
    ...combo,
    price: "$" + price.toFixed(2),
  }
})

const left_menuitems = Object.entries(leftItems).reduce(
  (acc, [name, values]) => {
    const items = values.items.map((i) => {
      const price = Number(i.price.replace("$", "")) * PRICE_INCREASE

      return { ...i, price: "$" + price.toFixed(2) }
    })

    acc[name] = { ...values, items }
    return acc
  },
  {}
)

const right_menuitems = rightItems.map((section) => {
  const items = section.items.map((i) => {
    const price = Number(i.price.replace("$", "")) * PRICE_INCREASE

    return { ...i, price: "$" + price.toFixed(2) }
  })
  return {
    ...section,
    items,
  }
})

const combosString = "export const combos = " + JSON.stringify(_combos, null, 2)
const lString =
  "export const menuitems = " + JSON.stringify(left_menuitems, null, 2)
const rString =
  "export const menuitems = " + JSON.stringify(right_menuitems, null, 2)

fs.writeFileSync("./src/combo/combos.js", combosString)
fs.writeFileSync("./src/rightmenu/menuitems.js", rString)
fs.writeFileSync("./src/leftmenu/menuitems.js", lString)
