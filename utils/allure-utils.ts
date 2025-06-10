import * as allure from "allure-js-commons";

export class AllureUtils {
    /**
     * It creates a step in Allure report with the given title and executes the action.
     * @param title describbes the step in the Allure report
     * @param action a function that contains the action to be executed
     * @param payload json object that contains the payload to be sent in the step
     * @author Jonathan Lopez
     */
    static async step(title, action, context?: any) {
        await allure.step(title, async () => {
            if (context) {
                allure.attachment("Attachment", JSON.stringify(context, null, 2), "application/json");
            }
            await action();
        });
    }
}

