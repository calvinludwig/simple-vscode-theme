import { generator } from "./generator.js";
import { tw } from "./tw.js";
import fs from "fs";

const variants = [
	{
		name: "Slate",
		grayVariant: tw.Slate,
	},
	{
		name: "Gray",
		grayVariant: tw.Gray,
	},
	{
		name: "Zinc",
		grayVariant: tw.Zinc,
	},
	{
		name: "Neutral",
		grayVariant: tw.Neutral,
	},
	{
		name: "Stone",
		grayVariant: tw.Stone,
	},
]
const themes = []
variants.forEach(variant => {
	[false, true].forEach(isDark => {
		const name = `Simplest ${variant.name} ${isDark ? "Dark" : "Light"}`;
		const content = JSON.stringify(generator(name, variant.grayVariant, isDark), null, 4);
		fs.writeFileSync(`./themes/${name}.json`, content);
		themes.push({
			label: name,
			uiTheme: isDark ? "vs-dark" : "vs",
			path: `./themes/${name}.json`,
		});
	})
})
console.log(JSON.stringify(themes));
