import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'lr56dwy0',
  dataset: 'production',
  title: 'Personal Website',
  apiVersion: '2023-06-11',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
