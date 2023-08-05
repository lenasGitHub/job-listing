import axios from 'axios';
import { objectToUrlParams } from '../utils/share';

export const fetchJobs = async (pages: number, query: string, uuid: string = '') => {
  const data: { page: number; limit: number, itemQuery?: string, language_profile_uuid?: string } = {
    page: pages,
    limit: 24
  }

  if(query.length != 0) data['itemQuery'] = query;
  if(uuid) data['language_profile_uuid'] = uuid;

  const paramsString = objectToUrlParams(data);

  const config = {
    headers:{
      'accept-account': '961c06eb-7e25-406c-87d5-d0742e09d96c',
      'accept-company': '900a776e-a060-422e-a5e3-979ef669f16b'
    }
  };
  const response = await axios.get(`https://devapi-indexer.elevatustesting.xyz/api/v1/jobs?${paramsString}`, config);
  return response.data;
};


export const getJobDetails = async (slug: string | undefined) => {
  const config = {
    headers:{
      'accept-account': '961c06eb-7e25-406c-87d5-d0742e09d96c',
      'accept-company': '900a776e-a060-422e-a5e3-979ef669f16b'
    }
  };
  const response = await axios.get(`https://devapi-indexer.elevatustesting.xyz/api/v1/jobs/uri?uri=${slug}`, config);
  return response.data;
};