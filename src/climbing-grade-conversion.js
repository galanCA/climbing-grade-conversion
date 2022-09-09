import {fontScale, verminScale, yosemiteScale, frenchScale} from './conversion-table.js'

function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
};

export function fromIRCRA(grade, scale) {
	switch(scale.toLowerCase()) {
		case "vermin":
			return getKeyByValue(verminScale, grade);
		
		case "font":
			return getKeyByValue(fontScale, grade);
		
		case "yds":
		case "yosemite":
			return getKeyByValue(yosemiteScale, grade);

		case "french":
		case "sport":
			return getKeyByValue(frenchScale, grade)
		case "british":
		case "ewbank":
		case "australia":
		case "uiaa":
		case "":
		default:
			return "The scale is not supported"
	}

}

export function toIRCRA(grade, scale) {
    switch (scale.toLowerCase()) {
		case "vermin":
			return verminScale[grade.toUpperCase()] || "No a grade in vermin scale";
		
		case "font":
			return fontScale[grade.toUpperCase()] || "No a grade in font scale"
		
		case "yds":
		case "yosemite":
			return yosemiteScale[grade.toLowerCase()] || "No a grade in yosemite scale";

		case "french":
		case "sport":
			return frenchScale[grade.toLowerCase()] || "No a grade in yosemite scale"

		case "british":
		case "ewbank":
		case "australia":
		case "uiaa":
		case "":
		default:
			return "The scale is not supported"
	}
}
