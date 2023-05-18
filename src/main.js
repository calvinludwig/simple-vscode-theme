import { generateVscodeTheme } from "./vscode.js";
import colors from "./colors.js";
import fs from "fs";
import { generateWeztermTheme } from "./wezterm.js";

const variants = [
	{
		name: "Slate",
		grayVariant: colors.Slate,
	},
	{
		name: "Gray",
		grayVariant: colors.Gray,
	},
	{
		name: "Zinc",
		grayVariant: colors.Zinc,
	},
	{
		name: "Neutral",
		grayVariant: colors.Neutral,
	},
	{
		name: "Stone",
		grayVariant: colors.Stone,
	},
]
const themes = []
variants.forEach(variant => {
	[false, true].forEach(isDark => {
		const name = `Simplest ${variant.name} ${isDark ? "Dark" : "Light"}`;
		const vscodeContent = JSON.stringify(generateVscodeTheme(name, variant.grayVariant, isDark), null, 2);
		fs.writeFileSync(`./themes/${name}.json`, vscodeContent);
		themes.push({
			label: name,
			uiTheme: isDark ? "vs-dark" : "vs",
			path: `./themes/${name}.json`,
		});

		const weztermContent = generateWeztermTheme(variant.grayVariant, isDark);
		fs.writeFileSync(`./extra/wezterm/${name.replace(/\s/g, '')}.lua`, weztermContent);
	})
})
console.log(JSON.stringify(themes));
