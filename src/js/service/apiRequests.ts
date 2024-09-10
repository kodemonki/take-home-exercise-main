import config, { routes } from "../config";

export const getMedia = async (
  page: number,
  genre: string,
  year: string,
  filter: string,
  mediaType: string
) => {
  const { baseApiUrl, apiVersion, apiPaginationLimit } = config;
  const url = `${baseApiUrl}/${apiVersion}/${routes.media}/paginate?page=${page}&limit=${config.apiPaginationLimit}&filter=${filter}&year=${year}&genre=${genre}&mediaType=${mediaType}`;
  const res = await fetch(url);
  return await res.json();
};

