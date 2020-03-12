import ChannelsService from "#root/adapters/ChannelsService";

const channelsResolver = async () => {
    return await ChannelsService.fetchAllChannels()
};

export default channelsResolver;