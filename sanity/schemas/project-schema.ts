const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectTitle',
      title: 'ProjectTitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imageLink',
      title: 'ImageLink',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'projectLink',
      title: 'ProjectLink',
      type: 'url',
    },
  ],
};

export default project;
