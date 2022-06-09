import {LightningElement} from "lwc";
import LightningAlert from "lightning/alert";
export default class LightningAlertDemo extends LightningElement {
	async handleErrorAlertClick() {
		await LightningAlert.open({
			message: "Add your error message here!",
			theme: "error",
			label: "Error!",
		});
	}

	async handleSuccessAlertClick() {
		await LightningAlert.open({
			message: "Add your error message here!",
			theme: "success", // a red theme intended for error states
			label: "Success!", // this is the header text
		});
	}

	async handleWarningAlertClick() {
		await LightningAlert.open({
			message: "Add your error message here!",
			theme: "warning", // a red theme intended for error states
			label: "Warning!", // this is the header text
		});
	}
}
