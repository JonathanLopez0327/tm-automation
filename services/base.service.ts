import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv";
dotenv.config();

// This class es base class for making HTTP requests to a server.
export default class BaseService {

    /**
     * This method performs a GET request to the specified endpoint of the server.
     * @param baseUrl BASE URL of the server
     * @param endpoint PATH or ENDPOINT to the resource
     * @param params Parameters to be sent with the request
     * @param timeout Timeout for the request in milliseconds
     * @author Jonathan Lopez
     * @returns JSON response from the server
     */
    async getRequest(baseUrl: string, endpoint: string, params: any = null, timeout: number = 10000) {
        const url = `${baseUrl}${endpoint}`;

        const config: AxiosRequestConfig = {
            headers : { Authorization: `x-api-key ${process.env.BULK_TOKEN}` },
            params: params ?? {},
            timeout,
        };

        try {
            const response = await axios.get(url, config);
            return response;
        } catch (error) {
            throw new Error(`GET request failed: ${error}`);
        }
    }

    /**
     * 
     * @param baseUrl BASE URL of the server
     * @param endpoint endpoint to which the POST request is made
     * @param body request body to be sent in the POST request
     * @param timeout timeout for the request in milliseconds
     * @returns json response from the server
     * @author Jonathan Lopez
     */
    async postRequest(baseUrl: string, endpoint: string, body: any = {}, timeout: number = 10000) {
        const url = `${baseUrl}${endpoint}`;

        try {
            const response = await axios.post(url, body, {
                headers: { 'Content-Type': 'application/json', 'x-api-key': `${process.env.BULK_TOKEN}` },
                timeout,
            });
            return response;
        } catch (error) {
            throw new Error(`POST request failed: ${error}`);
        }
    }

}