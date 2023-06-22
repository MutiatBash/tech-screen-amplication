import { EnumPanelStyle, Panel, Toggle } from "@amplication/ui/design-system";
<<<<<<< HEAD
import React, { useCallback, useContext, useState } from "react";
=======
import React, { useCallback, useContext, useEffect, useState } from "react";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import "./SyncWithGithubPage.scss";
import "./ServiceConfigurationGitSettings.scss";
import ProjectConfigurationGitSettings from "./ProjectConfigurationGitSettings";
import { AppContext } from "../../context/appContext";
import { useTracking } from "../../util/analytics";
import { AnalyticsEventNames } from "../../util/analytics-events.types";
<<<<<<< HEAD
import AuthWithGit from "./AuthWithGit";
=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { FormikProps } from "formik";
import {
  GitRepositoryCreatedData,
  GitRepositorySelected,
} from "./dialogs/GitRepos/GithubRepos";
<<<<<<< HEAD

const CLASS_NAME = "service-configuration-github-settings";

type Props = {
  onDone: () => void;
  onGitRepositorySelected: (data: GitRepositorySelected) => void;
  onGitRepositoryCreated: (data: GitRepositoryCreatedData) => void;
  //onGitRepositoryDisconnected: () => void;
=======
import { getGitRepositoryDetails } from "../../util/git-repository-details";
import GitSyncNotes from "./GitSyncNotes";
import AuthWithGitProvider from "./AuthWithGitProvider";

const CLASS_NAME = "service-configuration-git-settings";

type Props = {
  onDone: () => void;
  gitRepositoryDisconnectedCb: () => void;
  gitRepositoryCreatedCb: (data: GitRepositoryCreatedData) => void;
  gitRepositorySelectedCb: (data: GitRepositorySelected) => void;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  formik: FormikProps<{ [key: string]: any }>;
};

const ServiceWizardConfigurationGitSettings: React.FC<Props> = ({
  onDone,
<<<<<<< HEAD
  onGitRepositorySelected,
  onGitRepositoryCreated,
  // onGitRepositoryDisconnected,
  formik,
}) => {
  const { currentWorkspace, currentProjectConfiguration } =
    useContext(AppContext);
  const [isOverride, setIsOverride] = useState<boolean>(
    formik.values.isOverrideGitRepository || false
  );
  const { trackEvent } = useTracking();
  const { gitRepository } = currentProjectConfiguration;
=======
  gitRepositoryDisconnectedCb,
  gitRepositoryCreatedCb,
  gitRepositorySelectedCb,
  formik,
}) => {
  const { currentProjectConfiguration, resources } = useContext(AppContext);
  const { gitRepository } = currentProjectConfiguration;
  const [isOverride, setIsOverride] = useState<boolean>(
    formik.values.isOverrideGitRepository ||
      (!gitRepository && resources.length > 0)
  );
  const { trackEvent } = useTracking();
  const gitProvider = gitRepository?.gitOrganization?.provider;

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const settingsClassName = isOverride
    ? "gitSettingsPanel"
    : "gitSettingsFromProject";

<<<<<<< HEAD
=======
  const gitRepositoryUrl = getGitRepositoryDetails({
    organization: gitRepository?.gitOrganization,
    repositoryName: gitRepository?.name,
    groupName: gitRepository?.groupName,
  }).repositoryUrl;

  useEffect(() => {
    formik.setFieldValue("isOverrideGitRepository", isOverride);
  }, [formik.values]);

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const handleToggleChange = useCallback(
    (gitRepositoryOverride) => {
      setIsOverride(gitRepositoryOverride);
      formik.setFieldValue("isOverrideGitRepository", gitRepositoryOverride);
      if (!gitRepositoryOverride) {
        formik.setValues(
          {
            ...formik.values,
            gitRepositoryName: gitRepository?.name,
            gitOrganizationId: gitRepository?.gitOrganizationId,
<<<<<<< HEAD
            gitRepositoryUrl: `https://github.com/${gitRepository?.name}`,
=======
            gitRepositoryUrl: gitRepositoryUrl,
            gitProvider: gitProvider,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            isOverrideGitRepository: false,
          },
          true
        );
      } else {
        formik.setValues(
          {
            ...formik.values,
            gitRepositoryName: null,
            gitOrganizationId: null,
            gitRepositoryUrl: null,
            isOverrideGitRepository: true,
          },
          true
        );
      }
      trackEvent({
        eventName: AnalyticsEventNames.ResourceInfoUpdate,
      });
    },
    [trackEvent, formik.values]
  );

<<<<<<< HEAD
  const isToggleDisable = currentWorkspace?.gitOrganizations?.length === 0;

  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__panelWarper`}>
        <ProjectConfigurationGitSettings isOverride={isOverride} />
=======
  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__panelWarper`}>
        <ProjectConfigurationGitSettings
          isOverride={isOverride}
          isProjectSettingsLinkShow={false}
        />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
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
              <AuthWithGit
                onDone={onDone}
                onGitRepositorySelected={onGitRepositorySelected}
                onGitRepositoryCreated={onGitRepositoryCreated}
                onGitRepositoryDisconnected={() => {
                  formik.setValues(
                    {
                      ...formik.values,
                      gitRepositoryName: null,
                      gitOrganizationId: null,
                      gitRepositoryUrl: null,
                    },
                    true
                  );
                }}
=======
              <AuthWithGitProvider
                type="wizard"
                gitProvider={gitProvider}
                onDone={onDone}
                gitRepositoryDisconnectedCb={gitRepositoryDisconnectedCb}
                gitRepositoryCreatedCb={gitRepositoryCreatedCb}
                gitRepositorySelectedCb={gitRepositorySelectedCb}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                gitRepositorySelected={{
                  gitOrganizationId: formik.values.gitOrganizationId,
                  repositoryName: formik.values.gitRepositoryName,
                  gitRepositoryUrl: formik.values.gitRepositoryUrl,
<<<<<<< HEAD
=======
                  gitProvider: formik.values.gitProvider,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                }}
              />
            </div>
          )}
        </Panel>
<<<<<<< HEAD
=======
        <GitSyncNotes />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      </div>
    </div>
  );
};

export default ServiceWizardConfigurationGitSettings;
