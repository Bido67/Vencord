/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
/* eslint-disable indent */
import definePlugin from "@utils/types";

export default definePlugin({
	name: "Condtional theme",
	description: "Adds conditional themeing to vencord",
	authors: [
		{
			id: 598208193772126259n,
			name: "Lily",
		},
	],
	patches: [],
	// Delete these two below if you are only using code patches
	start() {
		var isInstalledAttrib = document.createAttribute("contiditionalplugininstalled");
		isInstalledAttrib.value = "true";
		document.body.attributes.setNamedItem(isInstalledAttrib);
		var isclientattrib = document.createAttribute("native");
		isclientattrib.value = "false";
		var releaseChannelattrib = document.createAttribute("releasechannel");
		try {
			var releaseChannel = DiscordNative.app.getReleaseChannel();
			// Edit to attribue instead of class, upcoming feature for my theme
			releaseChannelattrib.value = releaseChannel;
			// Compat for my unupdated theme
			document.body.classList.add(releaseChannel);
			isclientattrib.value = "true"; // because its using the Release channel function, its native discord client :3
			console.log("Added using Release Channel Function");
		} catch (err) {
		}
		document.body.attributes.setNamedItem(releaseChannelattrib);
		document.body.attributes.setNamedItem(isclientattrib);
		document.body.classList.add("anyclient");
		// Add event listener for touch / mouse / pen input
		var devFreeze = document.createAttribute("devfreeze");
		devFreeze.value = "false";
		document.body.attributes.setNamedItem(devFreeze);
		document.body.addEventListener("pointerdown", event => {
			var uwu = document.body.attributes.getNamedItem("devfreeze");
			if (uwu?.value !== "false") {
				var myshit = document.createAttribute("inputType");
				myshit.value = event.pointerType;
				document.body.attributes.setNamedItem(myshit);
			}
		});
	},
	stop() {

	},
});
