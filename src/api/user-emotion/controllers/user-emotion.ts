export default {
  async findByUser(ctx) {
    try {
      const userId = ctx.params.userId;

      const emotions = await strapi.entityService.findMany('api::emotion.emotion', {
        filters: {
          user: {
            id: userId,
          },
        },
        populate: '*',
      });

      ctx.body = { emotions };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching emotions', details: err };
    }
  },
};