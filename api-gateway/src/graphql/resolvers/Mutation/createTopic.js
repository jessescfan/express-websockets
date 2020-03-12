import ChannelsService from "#root/adapters/ChannelsService";

 const createTopicResolver = async (obj, {name, createdBy, channelId}, context) => {
  return await ChannelsService.createTopic({ name, createdBy, channelId});
 };

export default createTopicResolver;