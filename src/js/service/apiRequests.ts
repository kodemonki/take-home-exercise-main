import config, { routes } from "../config";

export const getMedia = async () => {
  const { baseApiUrl, apiVersion, apiPaginationLimit } = config;
  const res = await fetch(`${baseApiUrl}/${apiVersion}/${routes.media}/paginate?page=1&limit=10`);
  return await res.json();
};
