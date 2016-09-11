'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        name: 'Bryan Brophy',
        email: 'brybrophy@gmail.com',
        bio: 'The man with the plan.',
        avatar_url: 'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/8/1/d/9/highres_19053241.jpeg', // eslint-disable-line max-len
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
