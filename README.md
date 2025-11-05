# Emmz-Chest-UI
A more advanced version of the Herobrine Chest UI with less limitability and easier use.

https://github.com/Herobrine643928/Chest-UI/blob/main/README.md

*Does not include the Furnace UI or inventory.*

##

<img width="525" height="350" alt="image" src="https://github.com/user-attachments/assets/c3cf3d2a-1655-43e3-b805-cf61a8edee44" />
<img width="524" height="568" alt="image" src="https://github.com/user-attachments/assets/47be0272-3a68-4e3d-9afe-0c2886751b7e" />

## New Features
-Colorable stack text display

-More sizes

-3 extra functions

-Ease of use variables

## Differences <!>
-Furnace UI completely removed

-Default export

-Stack amount may need to be changed from 1 to 0 for some patterns

## Usage

Import:
```js
import ChestFormData from './chestui/forms.js' // No brackets
```
Create a new chest ui base. Supports sizes up to 81 plus 108 and 162. Title can be set with the constructor in the second field. Border size can be set in the third field (optional, only affects the border slots variable)
```js
const defaultUi = new ChestFormData()
```
```js
const ui = new ChestFormData(63, "63 slot ui")
```
Add buttons
```js
ui.button(10, "slot 10", [], "apple", 10) // index, hover text, subtext, texture, stack text
```
```js
ui.button({x: 4, y: 6}, "x 4 y 6", "", "g/lime", "+", 0, false, "a") // coordinates, hover text, subtext, texture, stack text, durability, enchanted, color
```
Button Example 1 

<img width="219" height="87" alt="image" src="https://github.com/user-attachments/assets/fe709b83-7969-48aa-ad36-6db0c39ec90d" />

Button Example 2

<img width="73" height="74" alt="image" src="https://github.com/user-attachments/assets/0326bb28-ac76-4153-92b3-69ac1edc132f" />

### Changed parameters
- Slot: Can use either a number or a set of coordinates. ( Anchored from top right, {x: 3, y: 4} )
- Texure: The `minecraft:` namespace is assumed. Numbers are accepted and will show aux values. Use `i/ b/ g/ t/` for texture path shortcuts (see at bottom).
- Stack Amount: Shows 6 bytes of characters. Input a number to show from -99 to 999, excluding 0. Use a string to show any simple characters. Use `[]` brackets around a string when using complicated characters that use more than 1 byte each (fill extra space on right side with spaces).
- Color: Applies a color code (§) to the stack text. Only accepts 1 character.

## New Functions
### .border
Fills a border around the chest ui and updates the border slots variable. Uses data similar to .pattern. Customization thickness
```js
ui.border({ itemName: "border item", texture: "g/gray" }, 1) // data, thickness
```
### .fill
Fills slots consecutively from 1 index to another when given a number. Fills a bound if given coordinates.
```js
ui.fill(1, 2, { texture: "g/blue" }) // from, to, data
```
```js
ui.fill({ x: 1, y: 1 }, { x: 3, y: 5 }, { texture: "t/ui/background_image" })
```
### .default
Sets default data to use in functions.

Affects `.pattern` (uses default for "x" in the pattern), `.border`, `.fill`,

```js
ui.default({ itemName: "...", texture: "b/barrier" })
ui.border() // uses default
```
## Variables
`borderSlots`: An array of all slots considered part of the border. By default this includes all slots touching the edge.

`centerSlots`: An array containing all slots not part of the border.

`center`: The center slot. Defaults to upper center for uneven centers.

`upperCenter`: The upper center slot of an uneven ui.

`lowerCenter`: The lower center slot of an uneven ui.

`bottom`: The start index of the bottom row of slots.

## Extra
UI sizes can be toggled in `_global_variables.json`

### Texture Path Shortcuts

-`i/` = `textures/items/`

-`b/` = `textures/blocks/`

-`g/` = `textures/blocks/glass_` shows regular glass if no color is specified

-`t/` = `textures/`

# Credits

Made by **EmmAndEmmz**

## Original Pack Credits
Original pack created by [LeGend077](https://github.com/LeGend077).

Maintained by [Herobrine64](https://discord.com/users/330740982117302283) & [LeGend077](https://discord.com/users/695712100072292482).

Pattern function created by [Aex66](https://github.com/Aex66).


.

.

.
# 162 UI
<img width="525" height="1052" alt="image" src="https://github.com/user-attachments/assets/e5e76e01-32b9-423c-bcaa-c8f8af151e9d" />
