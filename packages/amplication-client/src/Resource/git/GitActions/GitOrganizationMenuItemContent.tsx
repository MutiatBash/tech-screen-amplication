import React from "react";
<<<<<<< HEAD
import { githubOrganizationImageUrl } from "../../../util/github";
import { GitOrganizationFromGitRepository } from "../SyncWithGithubPage";
import "./GitOrganizationMenuItemContent.scss";
const CLASS_NAME = "menu-item-content";

type Props = {
=======
import { GitOrganizationFromGitRepository } from "../SyncWithGithubPage";
import "./GitOrganizationMenuItemContent.scss";

const CLASS_NAME = "menu-item-content";

type Props = {
  gitAvatar: string;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  gitOrganization: GitOrganizationFromGitRepository;
  isMenuTitle?: boolean;
};
export const GitOrganizationMenuItemContent = ({
<<<<<<< HEAD
=======
  gitAvatar,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  gitOrganization: { name },
  isMenuTitle = false,
}: Props) => {
  return (
    <span className={`${CLASS_NAME}`}>
<<<<<<< HEAD
      <img src={githubOrganizationImageUrl(name)} alt="Git organization" />
=======
      <img src={gitAvatar} alt="Git organization" />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      <span className={`${CLASS_NAME}__text`}>
        {isMenuTitle ? `${name} connected` : name}
      </span>
    </span>
  );
};
