import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mineskin/mineskin-api",
    },
    {
      type: "category",
      label: "generate",
      items: [
        {
          type: "doc",
          id: "mineskin/",
          label: "Missing summary",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mineskin/",
          label: "Missing summary",
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
          id: "mineskin/",
          label: "Missing summary",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mineskin/",
          label: "Missing summary",
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
          id: "mineskin/",
          label: "Missing summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "mineskin/",
          label: "Missing summary",
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
          id: "mineskin/",
          label: "Missing summary",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
