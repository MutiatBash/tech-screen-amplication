import { EnumPanelStyle, Panel, Toggle } from "@amplication/ui/design-system";
<<<<<<< HEAD
import React, { useCallback, useContext, useState } from "react";
import "./SyncWithGithubPage.scss";
import "./ServiceConfigurationGitSettings.scss";
import AuthResourceWithGit from "./AuthResourceWithGit";
import ProjectConfigurationGitSettings from "./ProjectConfigurationGitSettings";
import { AppContext } from "../../context/appContext";
=======
import React, { useCallback, useState } from "react";
import "./SyncWithGithubPage.scss";
import "./ServiceConfigurationGitSettings.scss";
import ProjectConfigurationGitSettings from "./ProjectConfigurationGitSettings";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { useMutation } from "@apollo/client";
import * as models from "../../models";
import { useTracking } from "../../util/analytics";
import {
  CONNECT_RESOURCE_PROJECT_REPO,
  DISCONNECT_GIT_REPOSITORY,
  UPDATE_RESOURCE,
} from "../../Workspaces/queries/resourcesQueries";
import { AnalyticsEventNames } from "../../util/analytics-events.types";
<<<<<<< HEAD

const CLASS_NAME = "service-configuration-github-settings";
=======
import AuthWithGitProvider from "./AuthWithGitProvider";
import { GitRepositorySelected } from "./dialogs/GitRepos/GithubRepos";

const CLASS_NAME = "service-configuration-git-settings";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

type Props = {
  resource: models.Resource;
  onDone: () => void;
<<<<<<< HEAD
=======
  gitRepositorySelectedCb: (data: GitRepositorySelected) => void;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
};

type TData = {
  updateResource: models.Resource;
};

const ServiceConfigurationGitSettings: React.FC<Props> = ({
  resource,
  onDone,
<<<<<<< HEAD
}) => {
  const { currentWorkspace } = useContext(AppContext);
=======
  gitRepositorySelectedCb,
}) => {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const [isOverride, setIsOverride] = useState<boolean>(
    resource.gitRepositoryOverride
  );

  const { trackEvent } = useTracking();

  const settingsClassName = isOverride
    ? "gitSettingsPanel"
    : "gitSettingsFromProject";

  const [connectResourceToProjectRepository] = useMutation<TData>(
    CONNECT_RESOURCE_PROJECT_REPO,
    {
      variables: { resourceId: resource.id },
    }
  );

  const [disconnectGitRepository] = useMutation(DISCONNECT_GIT_REPOSITORY, {
    variables: { resourceId: resource.id },
  });

  const handleDisconnectGitRepository = useCallback(() => {
    disconnectGitRepository({
      variables: { resourceId: resource.id },
    }).catch(console.error);
  }, [disconnectGitRepository, resource.id]);

  const handleConnectProjectGitRepository = useCallback(() => {
    connectResourceToProjectRepository({
      variables: { resourceId: resource.id },
    }).catch(console.error);
  }, [connectResourceToProjectRepository, resource.id]);

  const handleResourceStatusChanged = useCallback(
    (isOverride: boolean) => {
      setIsOverride(isOverride);
      if (isOverride) {
        handleDisconnectGitRepository();
      } else {
        handleConnectProjectGitRepository();
      }
    },
    [handleDisconnectGitRepository, handleConnectProjectGitRepository]
  );

  const [updateResourceOverrideStatus] = useMutation<TData>(UPDATE_RESOURCE, {
    onCompleted: (data) => {
      handleResourceStatusChanged(data.updateResource.gitRepositoryOverride);
    },
  });

  const handleToggleChange = useCallback(
    (gitRepositoryOverride) => {
      trackEvent({
        eventName: AnalyticsEventNames.ResourceInfoUpdate,
      });
      updateResourceOverrideStatus({
        variables: {
          data: {
            gitRepositoryOverride,
          },
          resourceId: resource.id,
        },
      }).catch(console.error);
    },
    [resource.id, trackEvent, updateResourceOverrideStatus]
  );

<<<<<<< HEAD
  const isToggleDisable = currentWorkspace?.gitOrganizations?.length > 0;

=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__panelWarper`}>
        <ProjectConfigurationGitSettings isOverride={isOverride} />
        <Panel
          className={`${CLASS_NAME}__${settingsClassName}`}
          panelStyle={EnumPanelStyle.Transparent}
        >
          <div className={`${CLASS_NAME}__defaultSettings`}>
            <div>Override default settings</div>

            <div>
<<<<<<< HEAD
              <Toggle
                disabled={isToggleDisable}
                onValueChange={handleToggleChange}
                checked={isOverride}
              />
=======
              <Toggle onValueChange={handleToggleChange} checked={isOverride} />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            </div>
          </div>
          {isOverride && (
            <div className={`${CLASS_NAME}__AuthWithGit`}>
              <hr />
<<<<<<< HEAD
              <AuthResourceWithGit resource={resource} onDone={onDone} />
=======
              <AuthWithGitProvider
                type="resource"
                resource={resource}
                onDone={onDone}
                gitRepositorySelectedCb={gitRepositorySelectedCb}
              />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            </div>
          )}
        </Panel>
      </div>
    </div>
  );
};

export default ServiceConfigurationGitSettings;
