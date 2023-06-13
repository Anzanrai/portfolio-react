// import { , groq } from 'next-sanity';
import { createClient, ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'lr56dwy0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-11',
};

export const client = createClient(config);

export function getProjects() {
  console.log('From async function.');
  client
    .fetch('*[_type == "project"]')
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => console.log(error));
}
