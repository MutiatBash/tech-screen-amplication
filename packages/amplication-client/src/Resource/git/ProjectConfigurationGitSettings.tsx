import { EnumPanelStyle, Icon, Panel } from "@amplication/ui/design-system";
import React, { useContext } from "react";
import "./SyncWithGithubPage.scss";
import "./ProjectConfigurationGitSettings.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import GithubSyncDetails from "./GitActions/RepositoryActions/GithubSyncDetails";
import classNames from "classnames";
import { isEmpty } from "lodash";

type Props = {
  isOverride: boolean;
<<<<<<< HEAD
};

const CLASS_NAME = "project-configuration-github-settings";

const ProjectConfigurationGitSettings: React.FC<Props> = ({ isOverride }) => {
=======
  isProjectSettingsLinkShow?: boolean;
};

const CLASS_NAME = "project-configuration-git-settings";

const ProjectConfigurationGitSettings: React.FC<Props> = ({
  isOverride,
  isProjectSettingsLinkShow = true,
}) => {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const { currentWorkspace, currentProject, projectConfigurationResource } =
    useContext(AppContext);

  const gitOrganizations = currentWorkspace?.gitOrganizations;

  const gitStatusPanelClassName = isOverride
    ? "overrideGitStatusPanel"
    : "gitStatusPanel";

  const linkFontClass = isOverride ? "disabled_color" : "inherit_color";

  const projectSettingsLink = () => {
    return (
      <Link
        title={"Go to project settings"}
<<<<<<< HEAD
        to={`/${currentWorkspace?.id}/${currentProject?.id}/${projectConfigurationResource?.id}/github`}
=======
        to={`/${currentWorkspace?.id}/${currentProject?.id}/${projectConfigurationResource?.id}/git-sync`}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        className={classNames(
          `${CLASS_NAME}__link`,
          `${CLASS_NAME}__${linkFontClass}`
        )}
      >
        Go to project settings
      </Link>
    );
  };

  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__settingsLink`}>
        <p className={isOverride ? `${CLASS_NAME}__disabled_color` : ""}>
<<<<<<< HEAD
          These settings are inherited from the project.
        </p>
        <p>{projectSettingsLink()}</p>
=======
          These settings are inherited from the project settings.
        </p>
        {isProjectSettingsLinkShow && <p>{projectSettingsLink()}</p>}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      </div>
      <Panel
        className={`${CLASS_NAME}__${gitStatusPanelClassName}`}
        panelStyle={EnumPanelStyle.Transparent}
      >
        {projectConfigurationResource?.gitRepository && (
          <GithubSyncDetails
            showGitRepositoryBtn={false}
            className={isOverride ? `${CLASS_NAME}__githubSync` : ""}
            resourceWithRepository={projectConfigurationResource}
          />
        )}
        {isEmpty(gitOrganizations) && (
          <div className={`${CLASS_NAME}__select-repo`}>
            <Icon icon="info_circle" />
            No organization was selected
          </div>
        )}
        {!isEmpty(gitOrganizations) &&
          isEmpty(projectConfigurationResource?.gitRepository) && (
            <div className={`${CLASS_NAME}__select-repo`}>
              <Icon icon="info_circle" />
              No repository was selected
            </div>
          )}
      </Panel>
    </div>
  );
};

export default ProjectConfigurationGitSettings;
