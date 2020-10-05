import {
    executeCommand,
	registerCommand,
	registerOverride,
	addEnum
} from "ez:command";

import {
	send
} from "ez:formui";

registerCommand("clean", "소지품을 정리합니다", 0);
addEnum("all", ["all"]);
registerOverride("clean", [{type: "enum", name: "all", optional: false, enum: "all"}], function () {
	if (this.player) {
		send(this.player, {
			"type": "form",
			"title": "경고",
			"content": "§l현재 소지중인 아이템이 모두 사라집니다 괜찮겠습니까?",
			"buttons": [
				{
					"text": "§a§l네"
				},
				{
					"text": "§c§l아니요"
				}
			]
		}, data => {
			if (data == null) return;
			let playerName = this.player.name
			if (data == 0) executeCommand("clear \"" + playerName + "\"");
			if (data == 0) executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§a청소되었습니다\"}]}");
			if (data == 1) executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§c청소를 취소하셨습니다\"}]}");


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
			executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§a청소되었습니다\"}]}");
  }
});
registerCommand("청소", "소지품을 정리합니다", 0);
registerOverride("청소", [{type: "enum", name: "all", optional: false, enum: "all"}], function () {
	if (this.player) {
		send(this.player, {
			"type": "form",
			"title": "경고",
			"content": "§l현재 소지중인 아이템이 모두 사라집니다 괜찮겠습니까?",
			"buttons": [
				{
					"text": "§a§l네"
				},
				{
					"text": "§c§l아니요"
				}
			]
		}, data => {
			if (data == null) return;
			let playerName = this.player.name
			if (data == 0) executeCommand("clear \"" + playerName + "\"");
			if (data == 0) executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§a청소되었습니다\"}]}");
			if (data == 1) executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§c청소를 취소하셨습니다\"}]}");


		}
	);
    return null
  }
  throw ["error, this command can only be used in game!", "/clean"]
});
registerOverride("청소", [{type: "enum", name: "onhand", optional: false, enum: "onhand"}], function () {
	if (this.player) {
			let playerName = this.player.name
			executeCommand("replaceitem entity \"" + playerName + "\" slot.weapon.mainhand 0 air");
			executeCommand("tellraw \"" + playerName + "\" {\"rawtext\":[{\"text\":\"§a청소되었습니다\"}]}");
  }
});

console.log("clean-API(ko).js loaded");
