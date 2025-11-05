import { Player, RawMessage } from "@minecraft/server";
import { ActionFormResponse } from "@minecraft/server-ui";

/**
 * @typedef {Object} buttonData
 * @property {string | rawMessage} itemName
 * @property {(string | RawMessage)[]} itemDesc
 * @property {number | string | string[]} stackSize 1 index
 * @property {boolean} enchanted
 * @property {number} durability
 * @property {string | number} texture
 * @property {string} color 1 character
 */

declare class ChestFormData {
	/**
	 * @param size The size of the chest to display as.
	 * @param title Sets the title of the ui. Identical to the `.title` function.
	 * @param borderThickness Determines which slots are considered part of the border. Automatically updates with `.border`
	 * 
	 * -EMMZ: This is my pack now
	 * 
	 */
	constructor(size?: 'small' | 'single' | 'large' | 'double' | 5 | 9 | 18 | 27 | 36 | 45 | 54 | 63 | 72 | 81 | 108 | 162, title: string, borderThickness?: number);
	/**
	 * @remarks The number of slots in the chest ui.
	 */
	public slotCount: number;
	/**
	 * @remarks An array with all slots considered part of the border of the chest ui.
	 */
	public borderSlots: array;
	/**
	 * @remarks An array with all slots not part of the border of the chest ui.
	 */
	public centerSlots: array;
	/**
	 * @remarks The index of the center slot. Defaults to upper center if there is no exact center.
	 */
	public center: number;
	/**
	 * @remarks The index of the upper center slot if the ui has no exact center.
	 */
	public upperCenter: number;
	/**
	 * @remarks The index of the lower center slot if the ui has no exact center.
	 */
	public lowerCenter: number;
	/**
	 * @remarks The starting index of the bottom row.
	 */
	public bottom: number;
	/**
	 * @remarks This builder method sets the title for the chest ui.
	 * @param text The title text for the chest ui.
	 */
	title(text: string | RawMessage): ChestFormData;
	/**
	 * @remarks Adds a button to this chest ui with an icon from a resource pack.
	 * @param slot The location of the slot. Accepts a basic number or `xy` coordinates.
	 * @param itemName The hover text to display.
	 * @param itemDesc The slot lore to display.
	 * @param texture The texture string. Accepts typeids, paths, and aux values. Shortcuts when using a path string:
	 * 
	 * - `i/` = `textures/items/`
	 * - `b/` = `textures/blocks/`
	 * - `g/` = `textures/blocks/glass_`
	 * - `t/` = `textures/`
	 * 
	 * @param stackAmount Originally a number used as stack size, now supports showing 6 bytes of characters. Use numbers to show any 3 digit number other than 0, use a string to show any 6 or shorter basic character string, and use a single item array for manual control of the 6 bytes shown.
	 * @param durability Durability for the item. Default=0. Clamped between 1 & 99.
	 * @param enchanted If the item is enchanted or not. Items starting with `i/` can be enchanted if the texture name matches the typeID. TypeIDs are put through a map which converts them to aux, some of those are just enchanted by default so this can be used to get around that.
	 * @param color Applies a color code to the stack text. Only accepts 1 character
	 */
	button(slot: number, itemName?: string | RawMessage, itemDesc?: (string | RawMessage)[], texture?: string, stackAmount?: number, durability?: number, enchanted?: boolean, color?: string): ChestFormData;
	/**
	* @remarks Fills slots based off of strings and a key, with the first slot being the cordinate that the pattern starts at.
	* @param pattern The pattern to use, with characters not defined in key being left empty.
	* @param key The data to display for each character in the pattern.
	* @example
	* gui.pattern([
				'xxxxxxxxx',
				'x_______x',
				'x___s___x',
				'x_______x',
				'xxxxxxxxx'
		], {
			x:  { itemName: '', itemDesc: [], enchanted: false, stackAmount: 0, texture: 'b/glass_gray' },
			s:  { itemName: 'Sword', itemDesc: [], enchanted: true, stackAmount: 999, texture: 'diamond_sword'},
		})
	*/
	pattern(pattern: string[], key: { [key: string]: buttonData }): ChestFormData;
	/**
	 * @remarks Fills slots to create a border and updates the ui `borderSlots` and `centerSlots` accordingly.
	 * @param data The data to use for border slots.
	 * @param thickness The thickness of the border.
	 */
	border(data: buttonData, thickness: number)
	/**
	 * @remarks Fills from and index to another, or from 1 set of coordinates to another in a bounds.
	 * @param from The starting index or coordinate.
	 * @param to The ending index or coordinate.
	 * @param data The data to fill
	 */
	fill(from: number | object, to: number | object, data: buttonData)
	/**
	 * @remarks Sets default data to use when data is not specified in other functions
	 * @param data The button data used.
	 */
	default(data: buttonData)
	/**
	  * @remarks
	  * Creates and shows this modal popup form. Returns
	  * asynchronously when the player confirms or cancels the
	  * dialog.
	  *
	  * This function can't be called in read-only mode.
	  *
	  * @param player
	  * Player to show this dialog to.
	 */
	show(player: Player): Promise<ActionFormResponse>;
}

export default ChestFormData;
