import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mineskin-api/mineskin-api",
    },
    {
      type: "category",
      label: "generate",
      items: [
        {
          type: "doc",
          id: "mineskin-api/generate-a-skin",
          label: "Generate a skin",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mineskin-api/queue-skin-generation",
          label: "Queue skin generation",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "queue",
      items: [
        {
          type: "doc",
          id: "mineskin-api/queue-skin-generation",
          label: "Queue skin generation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mineskin-api/get-job-status",
          label: "Get Job Status",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "skins",
      items: [
        {
          type: "doc",
          id: "mineskin-api/get-a-skin-by-uuid",
          label: "Get a skin by UUID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "mineskin-api/get-a-list-of-skins",
          label: "Get a list of skins",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "delay",
      items: [
        {
          type: "doc",
          id: "mineskin-api/get-the-current-delay",
          label: "Get the current delay",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;