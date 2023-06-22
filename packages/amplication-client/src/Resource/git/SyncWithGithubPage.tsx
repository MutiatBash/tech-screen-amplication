<<<<<<< HEAD
import { Icon, Snackbar } from "@amplication/ui/design-system";
import { gql, useQuery } from "@apollo/client";
=======
import { Snackbar } from "@amplication/ui/design-system";
import { gql, useMutation, useQuery } from "@apollo/client";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import React, { useCallback, useContext } from "react";
import { AppContext } from "../../context/appContext";
import PageContent from "../../Layout/PageContent";
import {
  EnumGitOrganizationType,
<<<<<<< HEAD
=======
  EnumGitProvider,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  EnumResourceType,
  Resource,
} from "../../models";
import { formatError } from "../../util/error";
<<<<<<< HEAD
import AuthResourceWithGit from "./AuthResourceWithGit";
import ServiceConfigurationGitSettings from "./ServiceConfigurationGitSettings";
import "./SyncWithGithubPage.scss";

const CLASS_NAME = "sync-with-github-page";
=======
import ServiceConfigurationGitSettings from "./ServiceConfigurationGitSettings";
import "./SyncWithGithubPage.scss";
import { CONNECT_GIT_REPOSITORY } from "./queries/gitProvider";
import { GitRepositorySelected } from "./dialogs/GitRepos/GithubRepos";
import AuthWithGitProvider from "./AuthWithGitProvider";

const CLASS_NAME = "sync-with-git-page";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

export type GitOrganizationFromGitRepository = {
  id: string;
  name: string;
  type: EnumGitOrganizationType;
<<<<<<< HEAD
=======
  provider: EnumGitProvider;
  useGroupingForRepositories: boolean;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
};

const SyncWithGithubPage: React.FC = () => {
  const { currentResource, refreshCurrentWorkspace } = useContext(AppContext);

  const { data, error, refetch } = useQuery<{
    resource: Resource;
  }>(GET_RESOURCE_GIT_REPOSITORY, {
    variables: {
      resourceId: currentResource?.id,
    },
    skip: !currentResource?.id,
  });

<<<<<<< HEAD
=======
  const [connectGitRepository] = useMutation(CONNECT_GIT_REPOSITORY);

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const handleOnDone = useCallback(() => {
    refreshCurrentWorkspace();
    refetch();
  }, [refreshCurrentWorkspace, refetch]);

<<<<<<< HEAD
  const pageTitle = "GitHub";
  const errorMessage = formatError(error);
  const isProjectConfiguration =
    data?.resource.resourceType === EnumResourceType.ProjectConfiguration;
=======
  const pageTitle = "Sync with Git Provider";
  const errorMessage = formatError(error);
  const isProjectConfiguration =
    data?.resource.resourceType === EnumResourceType.ProjectConfiguration;
  const gitRepositorySelectedCb = useCallback(
    (gitRepository: GitRepositorySelected) => {
      connectGitRepository({
        variables: {
          name: gitRepository.repositoryName,
          gitOrganizationId: gitRepository.gitOrganizationId,
          resourceId: data?.resource.id,
          groupName: gitRepository.groupName,
        },
      }).catch(console.error);
    },
    [connectGitRepository, data?.resource]
  );
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  return (
    <PageContent pageTitle={pageTitle}>
      <div className={CLASS_NAME}>
        <div className={`${CLASS_NAME}__header`}>
<<<<<<< HEAD
          <Icon icon="github" size="xlarge" />
          <h1>Sync with GitHub</h1>
        </div>
        <div className={`${CLASS_NAME}__separator`} />
        <div className={`${CLASS_NAME}__message`}>
          If you connect to GitHub, every time you commit your changes, it
          automatically pushes your generated code and creates a Pull Request in
          your GitHub repository.
        </div>
        {data?.resource && isProjectConfiguration && (
          <AuthResourceWithGit resource={data.resource} onDone={handleOnDone} />
=======
          <p className={`${CLASS_NAME}__header__title`}>
            Sync with Git Provider
          </p>
        </div>
        <div className={`${CLASS_NAME}__message`}>
          Enable sync with Git provider to automatically push the generated code
          of your application and create a Pull Request in your Git provider
          repository every time you commit your changes.
        </div>
        {data?.resource && isProjectConfiguration && (
          <AuthWithGitProvider
            type="resource"
            resource={data.resource}
            onDone={handleOnDone}
            gitRepositorySelectedCb={gitRepositorySelectedCb}
          />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        )}
        {!isProjectConfiguration && data?.resource && (
          <ServiceConfigurationGitSettings
            resource={data.resource}
            onDone={handleOnDone}
<<<<<<< HEAD
=======
            gitRepositorySelectedCb={gitRepositorySelectedCb}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          />
        )}
        <Snackbar open={Boolean(error)} message={errorMessage} />
      </div>
    </PageContent>
  );
};

export default SyncWithGithubPage;

export const GET_RESOURCE_GIT_REPOSITORY = gql`
  query getResourceGitRepository($resourceId: String!) {
    resource(where: { id: $resourceId }) {
      id
      name
      githubLastSync
      resourceType
      gitRepositoryOverride
      createdAt
      gitRepository {
        id
        name
<<<<<<< HEAD
=======
        groupName
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        gitOrganization {
          id
          name
          type
<<<<<<< HEAD
=======
          provider
          useGroupingForRepositories
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        }
      }
    }
  }
`;
