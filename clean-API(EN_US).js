import {
    executeCommand,
	registerCommand,
	registerOverride,
	addEnum
} from "ez:command";

import {
	send
} from "ez:formui";

registerCommand("clean", "Organize your belongings", 0);
addEnum("all", ["all"]);
registerOverride("clean", [{type: "enum", name: "all", optional: false, enum: "all"}], function () {
	if (this.player) {
		send(this.player, {
			"type": "form",
			"title": "WARNING",
			"content": "§lAll items currently in possession will disappear. Are you okay?",
			"buttons": [
				{
					"text": "§a§lYES"
				},
				{
					"text": "§c§lNO"
				}
			]
		}, data => {
			if (data == null) return;
			let playerName = this.player.name
			if (data == 0) executeCommand("clear \"" + playerName + "\"");
			if (data == 0) executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§aCleaned\"}]}");
			if (data == 1) executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§cYou canceled cleaning\"}]}");


		}
	);
    return null
  }
  throw ["error, this command can only be used in game!", "/clean"]
});
addEnum("onhand", ["onhand"]);
registerOverride("clean", [{type: "enum", name: "onhand", optional: false, enum: "onhand"}], function () {
	if (this.player) {
			let playerName = this.player.name
			executeCommand("replaceitem entity \"" + playerName + "\" slot.weapon.mainhand 0 air");
			executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§aCleaned\"}]}");
  }
});

console.log("clean-API(en).js loaded");