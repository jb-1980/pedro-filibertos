import combos from "./combo-items.json" assert { type: "json" }
import leftItems from "./left-menu-items.json" assert { type: "json" }
import rightItems from "./right-menu-items.json" assert { type: "json" }
import fs from "fs"

const PRICE_INCREASE = 1.15

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

fs.writeFileSync("./combos.json", JSON.stringify(_combos, null, 2))
fs.writeFileSync(
  "./left-menu-items.json",
  JSON.stringify(left_menuitems, null, 2)
)
fs.writeFileSync(
  "./right-menu-items.json",
  JSON.stringify(right_menuitems, null, 2)
)
