import config, { routes }  from "../config";

export const getSchedule = () => {
  return fetch(`${config.baseApiUrl}/${routes.schedule}/`).then((res) => res.json());
};

export const getTrains = () => {
  return fetch(`${config.baseApiUrl}/${routes.trains}/`).then((res) => res.json());
};
