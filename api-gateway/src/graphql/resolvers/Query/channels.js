import ChannelsService from "#root/adapters/ChannelsService";

const channelsResolver = async () => {
    return await ChannelsService.fetchAllChannels()
};

export const channelsResolverById = async (obj, args, context) => {
    return await ChannelsService.fetchById(args.id);
};

export default channelsResolver;