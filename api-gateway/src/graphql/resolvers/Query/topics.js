import ChannelsService from "#root/adapters/ChannelsService";

const topicsResolver = async () => {
    return await ChannelsService.fetchAllTopics()
};

export default topicsResolver;