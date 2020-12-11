export default{
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "Name",
      title: "Project Title",
      type:"string",
      description: "Name of Project",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [{type: "reference", to: [{type: "technology"}] }]
    },
    {
      name: "code",
      title: "Code URL",
      type: "url",
    },
    { 
      name: "site",
      title: "Live site URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "A short overview of the Project",
      validation: Rule => Rule.max(100)
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {type: "block"},
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
                hotspot: true,
              }
            }
          ]
        }
      ],
      description: "Project content",
    },
    {
      name: "thumbnail_image",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "project_image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
  ]
}