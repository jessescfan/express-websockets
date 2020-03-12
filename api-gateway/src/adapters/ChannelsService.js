import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const CHANNELS_SERVICE_URI = accessEnv("CHANNELS_SERVICE_URI");

export default class ChannelsService {

    static async createChannel({name, createdBy}) {
        const body = await got.post(`${CHANNELS_SERVICE_URI}/channels`, {
            json: {name, createdBy}
        }).json();

        return body;
    }

    static async fetchAllChannels() {
        const body = await got.get(`${CHANNELS_SERVICE_URI}/channels`).json();

        return body;
    }

    static async createTopic({name, createdBy, channelId}) {
        const body = await got.post(`${CHANNELS_SERVICE_URI}/topics`, {
            json: {name, createdBy, channelId}
        }).json();

        return body;
    }

    static async fetchAllTopics() {
        const body = await got.get(`${CHANNELS_SERVICE_URI}/topics`).json();

        return body;
    }

}