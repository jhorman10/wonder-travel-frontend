import data from '../database/schedule.json';

const axios = {
  get: async (url) => {
    const response = {
      data,
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 500);
    });
  },
};

export default axios;
