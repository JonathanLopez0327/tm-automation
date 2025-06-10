import BaseService from "../base.service";
import dotenv from "dotenv";
import fs from "fs";
import { AxiosResponse } from "axios";
import { AllureUtils } from "../../utils/allure-utils";
dotenv.config();

export class EntitySearchService extends BaseService {
    private readonly baseUrl: string;
    private readonly endpoint: string;
    private readonly dataTest: any;

    constructor() {
        super();
        this.baseUrl = process.env.SERVER_URL ?? '';
        this.endpoint = process.env.BULK_ENTITY_SEARCH ?? '';

        const dataFile = fs.readFileSync("data-test/business-person-search.json", "utf-8");
        this.dataTest = JSON.parse(dataFile)[0];
    }

    /**
     * This function send post request starts a bulk entity search for businesses and persons.
     * @returns JSON response from the server after starting a bulk entity search
     * @author Jonathan Lopez
     */
    async doBusinessAndPersonSearch(): Promise<AxiosResponse> {
        console.log(`Starting bulk entity search with data: ${JSON.stringify(this.dataTest)}`);
        const params = this.dataTest;
        let response: AxiosResponse = await this.postRequest(this.baseUrl, this.endpoint, params);
        await AllureUtils.step(`Configure and send POST request`, async () => { }, params);
        return response;
    }

}