<<<<<<< HEAD
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../../context/appContext";
import AuthWithGit from "../../git/AuthWithGit";
=======
import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../../context/appContext";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import "./CreateGithubSync.scss";
import { CreateServiceWizardLayout as Layout } from "../CreateServiceWizardLayout";
import {
  GitRepositoryCreatedData,
  GitRepositorySelected,
} from "../../git/dialogs/GitRepos/GithubRepos";
import { WizardStepProps } from "./interfaces";
import { DefineUser } from "../CreateServiceWizard";
import ServiceWizardConfigurationGitSettings from "../../git/ServiceWizardConfigurationGitSettings";
<<<<<<< HEAD

const className = "create-github-sync";
=======
import { getGitRepositoryDetails } from "../../../util/git-repository-details";
import { Icon, ToggleField, Tooltip } from "@amplication/ui/design-system";
import AuthWithGitProvider from "../../git/AuthWithGitProvider";

const TOOLTIP_DIRECTION = "n";
const CLASS_NAME = "create-git-sync";
const DEMO_REPO_TOOLTIP =
  "Take Amplication for a test drive with a preview repository on our GitHub account. You can later connect to your own repository.";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

type props = {
  defineUser: DefineUser;
} & WizardStepProps;

const CreateGithubSync: React.FC<props> = ({
  moduleClass,
  formik,
  defineUser,
}) => {
<<<<<<< HEAD
  const { refreshCurrentWorkspace, currentProjectConfiguration } =
    useContext(AppContext);

  const { gitRepository } = currentProjectConfiguration;

  const projectConfigGitRepository = {
    gitOrganizationId: gitRepository?.gitOrganizationId,
    repositoryName: gitRepository?.name,
    gitRepositoryUrl: `https://github.com/${gitRepository?.name}`,
  };

=======
  const { refreshCurrentWorkspace, currentProjectConfiguration, resources } =
    useContext(AppContext);

  const { gitRepository } = currentProjectConfiguration;
  const gitProvider = gitRepository?.gitOrganization?.provider;
  const gitRepositoryUrl = getGitRepositoryDetails({
    organization: gitRepository?.gitOrganization,
    repositoryName: gitRepository?.name,
    groupName: gitRepository?.groupName,
  }).repositoryUrl;
  const projectConfigGitRepository = {
    gitOrganizationId: gitRepository?.gitOrganizationId,
    repositoryName: gitRepository?.name,
    gitRepositoryUrl: gitRepositoryUrl,
    gitProvider: gitProvider,
    groupName: gitRepository?.groupName,
  };

  const isNeedToConnectGitProvider = resources.length === 0 && !gitRepository;

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  useEffect(() => {
    formik.validateForm();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (formik.values.gitOrganizationId) return;
    formik.setValues(
      {
        ...formik.values,
        gitRepositoryName: projectConfigGitRepository?.repositoryName,
        gitOrganizationId: projectConfigGitRepository?.gitOrganizationId,
        gitRepositoryUrl: projectConfigGitRepository?.gitRepositoryUrl,
=======
    if (formik.values.gitOrganizationId && formik.values.groupName) return;
    if (formik.values.connectToDemoRepo) return;

    formik.setValues(
      {
        ...formik.values,
        connectToDemoRepo: false,
        gitRepositoryName: projectConfigGitRepository?.repositoryName,
        gitOrganizationId: projectConfigGitRepository?.gitOrganizationId,
        gitRepositoryUrl: projectConfigGitRepository?.gitRepositoryUrl,
        gitProvider: projectConfigGitRepository?.gitProvider,
        groupName: projectConfigGitRepository?.groupName,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      },
      true
    );
  }, [gitRepository]);

  const handleOnDone = useCallback(() => {
    refreshCurrentWorkspace();
  }, [refreshCurrentWorkspace]);

  const handleOnGitRepositorySelected = useCallback(
    (data: GitRepositorySelected) => {
      formik.setValues(
        {
          ...formik.values,
<<<<<<< HEAD
          gitRepositoryName: data.repositoryName,
          gitOrganizationId: data.gitOrganizationId,
          gitRepositoryUrl: data.gitRepositoryUrl,
=======
          connectToDemoRepo: false,
          gitRepositoryName: data.repositoryName,
          gitOrganizationId: data.gitOrganizationId,
          gitRepositoryUrl: data.gitRepositoryUrl,
          gitProvider: data.gitProvider,
          groupName: data.groupName,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        },
        true
      );
      refreshCurrentWorkspace();
    },
    [refreshCurrentWorkspace, formik]
  );

  const handleOnGitRepositoryCreated = useCallback(
    (data: GitRepositoryCreatedData) => {
      formik.setValues(
        {
          ...formik.values,
<<<<<<< HEAD
          gitRepositoryName: data.name,
          gitOrganizationId: data.gitOrganizationId,
          gitRepositoryUrl: data.gitRepositoryUrl,
=======
          connectToDemoRepo: false,
          gitRepositoryName: data.name,
          gitOrganizationId: data.gitOrganizationId,
          gitRepositoryUrl: data.gitRepositoryUrl,
          gitProvider: data.gitProvider,
          groupName: data.groupName,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        },
        true
      );
      refreshCurrentWorkspace();
    },
    [refreshCurrentWorkspace, formik]
  );

<<<<<<< HEAD
=======
  const handleRepositoryDisconnected = useCallback(() => {
    formik.setValues(
      {
        ...formik.values,
        gitRepositoryName: null,
        gitOrganizationId: null,
        gitRepositoryUrl: null,
        groupName: null,
      },
      true
    );
  }, [formik]);

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  return (
    <Layout.Split>
      <Layout.LeftSide>
        <Layout.DescriptionCustom
          header="Now, let's connect to a Git repository"
          text={
            <div className={`create-service-wizard-layout__description__text`}>
              Amplication automatically pushes the generated code of your
<<<<<<< HEAD
              services to a git repository.
=======
              services to a Git repository.
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
              <br />
              You are the owner of the code and can freely customize it.
            </div>
          }
        />
      </Layout.LeftSide>
      <Layout.RightSide>
<<<<<<< HEAD
        <div className={`${className}__github_box`}>
          {defineUser === "Onboarding" ? (
            <AuthWithGit
              onDone={handleOnDone}
              onGitRepositorySelected={handleOnGitRepositorySelected}
              onGitRepositoryCreated={handleOnGitRepositoryCreated}
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
        <div className={`${CLASS_NAME}__github_box`}>
          {defineUser === "Onboarding" || isNeedToConnectGitProvider ? (
            <AuthWithGitProvider
              type="wizard"
              gitProvider={gitProvider}
              onDone={handleOnDone}
              gitRepositoryDisconnectedCb={handleRepositoryDisconnected}
              gitRepositoryCreatedCb={handleOnGitRepositoryCreated}
              gitRepositorySelectedCb={handleOnGitRepositorySelected}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
              gitRepositorySelected={{
                gitOrganizationId: formik.values.gitOrganizationId,
                repositoryName: formik.values.gitRepositoryName,
                gitRepositoryUrl: formik.values.gitRepositoryUrl,
<<<<<<< HEAD
              }}
            ></AuthWithGit>
=======
                gitProvider: formik.values.gitProvider,
                groupName: formik.values.groupName,
              }}
            />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          ) : (
            <ServiceWizardConfigurationGitSettings
              onDone={handleOnDone}
              formik={formik}
<<<<<<< HEAD
              onGitRepositorySelected={handleOnGitRepositorySelected}
              onGitRepositoryCreated={handleOnGitRepositoryCreated}
            ></ServiceWizardConfigurationGitSettings>
=======
              gitRepositoryDisconnectedCb={handleRepositoryDisconnected}
              gitRepositoryCreatedCb={handleOnGitRepositoryCreated}
              gitRepositorySelectedCb={handleOnGitRepositorySelected}
            />
          )}

          {defineUser === "Onboarding" && (
            <div className={`${CLASS_NAME}__demo`}>
              <Tooltip
                wrap
                direction={TOOLTIP_DIRECTION}
                aria-label={DEMO_REPO_TOOLTIP}
                className={`${CLASS_NAME}__demo__tooltip`}
              >
                <Icon icon="info_circle" size="small" />
              </Tooltip>

              <ToggleField
                disabled={formik.values.gitRepositoryName}
                name="connectToDemoRepo"
                label="Push the generated code to a preview repository on GitHub"
              />
            </div>
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          )}
        </div>
      </Layout.RightSide>
    </Layout.Split>
  );
};

export default CreateGithubSync;
