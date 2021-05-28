/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable import/extensions */

import { DevelopmentApi, StagingApi, ProductionApi } from './endpoints';

export const setEnvironment = () => {
  switch (process.env.REACT_APP_ENV) {
    case 'development':
      return {
        Api: {
          Url: DevelopmentApi,
          Routes: {
            albums: 'albums',
            photos: 'photos',
          },
        },
      };
    case 'staging':
      return {
        Api: {
          Url: StagingApi,
          Routes: {
            albums: 'albums',
            photos: 'photos',
          },
        },
      };
    case 'production':
      return {
        Api: {
          Url: ProductionApi,
          Routes: {
            albums: 'albums',
            photos: 'photos',
          },
        },
      };

    default:
      return {
        Api: {
          Url: `caiu no default? vai url de homologação ${StagingApi}`,
          Routes: {
            albums: 'albums',
            photos: 'photos',
          },
        },
      };
  }
};
