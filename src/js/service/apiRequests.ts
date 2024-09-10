import config, { routes } from "../config";

export const getMedia = async (page: number) => {
  const { baseApiUrl, apiVersion, apiPaginationLimit } = config;
  const res = await fetch(
    `${baseApiUrl}/${apiVersion}/${routes.media}/paginate?page=${page}&limit=10`
  );
  return await res.json();
};
