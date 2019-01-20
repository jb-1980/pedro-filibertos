import json

with open("./combo/combos.js", "r") as f:
    combo_string = f.read()

with open("./leftmenu/menuitems.js", "r") as f:
    left_string = f.read()

with open("./rightmenu/menuitems.js", "r") as f:
    right_string = f.read()

combo_json_string = combo_string.replace("export const combos = ", "")
combos = json.loads(combo_json_string)
