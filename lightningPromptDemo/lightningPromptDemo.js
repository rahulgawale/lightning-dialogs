import {LightningElement} from "lwc";
import LightningPrompt from "lightning/prompt";
import LightningAlert from "lightning/alert";
export default class LightningPromptDemo extends LightningElement {
	handlePromptClick() {
		LightningPrompt.open({
			message: "this is the prompt message",
			//theme defaults to "default"
			label: "Please Respond", // this is the header text
			defaultValue: "initial input value", //this is optional
		}).then((value) => {
			if (value) {
				// do something with the value
				this.handleSuccessAlertClick(value);
			} else {
				this.handleErrorAlertClick();
			}
		});
	}

	async handleSuccessAlertClick(value) {
		await LightningAlert.open({
			message: "You entered:" + value,
			theme: "success",
			label: "Success!",
		});
	}

	async handleErrorAlertClick() {
		await LightningAlert.open({
			message: "You entered nothing!",
			theme: "error",
			label: "Error!",
		});
	}
}
