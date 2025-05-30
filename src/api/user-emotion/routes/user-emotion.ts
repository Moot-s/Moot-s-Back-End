
export default {
  routes: [
    {
      method: 'GET',
      path: '/user-emotion/:userId',
      handler: 'user-emotion.findByUser',
      config: {
        policies: [],
        auth: {
          scope: ['public'],
        },
      },
    }
  ]
}