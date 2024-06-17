import dotenv from 'dotenv';
dotenv.config();

import Luzmo from '@luzmo/nodejs-sdk';

const client = new Luzmo({
  api_key: process.env.LUZMO_API_KEY,
  api_token: process.env.LUZMO_API_TOKEN,
  //   host: 'https://api.luzmo.com',
  host: 'https://api.us.luzmo.com',
});

const getToken = async () => {
  console.log('process.env.LUZMO_API_KEY: ', process.env.LUZMO_API_KEY);
  console.log('process.env.LUZMO_API_TOKEN: ', process.env.LUZMO_API_TOKEN);

  try {
    const result = await client.create('authorization', {
      type: 'embed',
      username: 'paulie-dev-reactions',
      expiry: '2024-06-30T12:00:00.000Z',
      inactivity_interval: 600,
      name: 'Paul Scanlon',
      email: 'pauliescanlon@gmail.com',
      suborganization: null,
      access: {
        dashboards: [
          {
            id: 'd9b84695-814c-4b96-ab3f-87f4415f8252',
            rights: 'use',
          },
        ],
        datasets: [
          {
            id: 'd102d419-55fa-4690-a78e-79e6ae9db769',
            rights: 'use',
          },
        ],
      },
    });

    const token = await result;
    console.log(token);
  } catch (error) {
    console.error(error);
  }
};

getToken();
