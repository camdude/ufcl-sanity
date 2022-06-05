export default {
  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
        name: "text",
        type: "text",
        title: "Text",
      },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "buttonLink",
      type: "url",
      title: "Button Link",
    },
  ],
};
