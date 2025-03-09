import type { ExperienceResponse } from '~/types/types';

if (
  import.meta.env['MICROCMS_API_URL'] === undefined ||
  import.meta.env['MICROCMS_API_KEY'] === undefined
) {
  throw new Error('Please set environment variables: MICROCMS_API_URL and MICROCMS_API_KEY');
}

const microcmsUrl = import.meta.env['MICROCMS_API_URL'];
const microcmsApiKey = import.meta.env['MICROCMS_API_KEY'];
const microcmsApiPrefix = '/api/v1';

const apiHeaders = new Headers();
apiHeaders.append('X-MICROCMS-API-KEY', microcmsApiKey);

export const getExperiences = async () => {
  const url = `${microcmsUrl}${microcmsApiPrefix}/experiences`;
  const response = await fetch(url, {
    headers: apiHeaders,
  });
  const responseJson: ExperienceResponse = await response.json();
  return responseJson.contents.sort(
    (a, b) => new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()
  );
};
