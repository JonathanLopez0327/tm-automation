import { test, expect } from "@playwright/test";
import { EntitySearchService } from "../services/entity-search/entity-search-service";
import { AllureUtils } from "../utils/allure-utils";
import { AxiosResponse } from "axios";

test.describe("Entity Search Service Tests", () => {
    test('Should start a bulk entity search', async () => {
        const entitySearchService = new EntitySearchService();
        const response: AxiosResponse = await entitySearchService.doBusinessAndPersonSearch();

        await AllureUtils.step(`Validate if the response is not null`, async () => {
            console.log(`Validating response: ${JSON.stringify(response.data, null, 2)}`);
            expect(response.data).not.toBeNull();
        }, response.data);

        await AllureUtils.step(`Validate if the response status is equal to 200`, async () => {
            console.log(`Validating reponse status: ${response.status}`);
            expect(response.status).toBe(200);
        }, response.status);
    })
});