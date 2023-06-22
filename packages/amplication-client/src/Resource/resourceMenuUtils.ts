import { EnumResourceType } from "../models";

<<<<<<< HEAD
export type MenuItemLinks = "entities" | "roles" | "github" | "settings";
=======
export type MenuItemLinks = "entities" | "roles" | "git" | "settings";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

export const resourceMenuLayout: { [key: string]: string[] } = {
  [EnumResourceType.Service]: [
    "entities",
    "roles",
    "connections",
<<<<<<< HEAD
    "github",
    "settings",
    "plugins",
  ],
  [EnumResourceType.ProjectConfiguration]: ["github", "settings"],
  [EnumResourceType.MessageBroker]: [
    "topics",
    "services",
    "github",
    "settings",
  ],
=======
    "git",
    "settings",
    "plugins",
  ],
  [EnumResourceType.ProjectConfiguration]: ["git", "settings"],
  [EnumResourceType.MessageBroker]: ["topics", "services", "git", "settings"],
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
};

export const linksMap = {
  entities: {
    title: "Entities",
    icon: "entity_outline",
    to: "/entities",
  },
  roles: {
    title: "Roles",
    icon: "roles_outline",
    to: "/roles",
  },
<<<<<<< HEAD
  github: {
    title: "Connect to GitHub",
    icon: "github",
    to: "/github",
=======
  git: {
    title: "Sync with Git provider",
    icon: "git-sync",
    to: "/git-sync",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  settings: {
    title: "Settings",
    icon: "settings",
    to: "/settings/update",
  },
  plugins: {
    title: "Plugins",
    icon: "plugins",
    to: "/plugins",
  },
  topics: {
    title: "Topics",
    icon: "topic",
    to: "/topics",
  },
  services: {
    title: "Services",
    icon: "services",
    to: "/services",
  },
  connections: {
    title: "Connections",
    icon: "connection",
    to: "/service-connections",
  },
};

export const setResourceUrlLink = (
  workspace: string,
  project: string,
  resource: string,
  iconUrl: string
): string => `/${workspace}/${project}/${resource}${iconUrl}`;
