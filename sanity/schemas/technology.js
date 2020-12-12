export default{
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Technology Title",
      type:"string",
      description: "Name of technology",
    },
    {
      name: "technology_logo",
      title: "Technology Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ]
}