import ChannelsService from "#root/adapters/ChannelsService";

 const createChannelResolver = async (obj, {name, createdBy}, context) => {
  return await ChannelsService.createChannel({ name, createdBy});
 };

export default createChannelResolver;