export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61603d8427f46d35f105bfeb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-kjjh46dk",
                  apiId: "bda99cf6-b964-4af3-90ef-ad15f0424f19",
                },
                {
                  buildHookId: "61603d8469bb653d766f5da3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-eg8kzcht",
                  apiId: "329763f2-43ad-4abe-beff-7b85d728d47c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jonassvartberg/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-eg8kzcht.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
