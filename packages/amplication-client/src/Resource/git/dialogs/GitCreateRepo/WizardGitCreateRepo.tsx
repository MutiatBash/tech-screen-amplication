import {
  Button,
  CircularProgress,
<<<<<<< HEAD
=======
  HorizontalRule,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  Label,
  TextField,
  Toggle,
} from "@amplication/ui/design-system";
<<<<<<< HEAD
import { ApolloError } from "@apollo/client";
import { useCallback, useState } from "react";
import { EnumGitProvider, EnumGitOrganizationType } from "../../../../models";
import { formatError } from "../../../../util/error";
import { GitRepositoryCreatedData } from "../GitRepos/GithubRepos";
import "./GitCreateRepo.scss";

type createRepositoryInput = {
  name: string;
  public: boolean;
};
type Props = {
  gitProvider: EnumGitProvider;
  gitOrganizationName: string;
  gitOrganizationId: string;
=======
import { ApolloError, gql, useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { EnumGitOrganizationType, GitGroup } from "../../../../models";
import { formatError } from "../../../../util/error";
import { GitRepositoryCreatedData } from "../GitRepos/GithubRepos";
import "./GitCreateRepo.scss";
import { GitOrganizationFromGitRepository } from "../../SyncWithGithubPage";
import { getGitRepositoryDetails } from "../../../../util/git-repository-details";
import { GitSelectMenu } from "../../select/GitSelectMenu";
import { GET_GROUPS } from "../../queries/gitProvider";

type createRepositoryInput = {
  name: string;
  isPublic: boolean;
  groupName?: string;
};
type Props = {
  gitOrganization: GitOrganizationFromGitRepository;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  repoCreated: {
    isRepoCreateLoading: boolean;
    RepoCreatedError: ApolloError;
  };
  onCreateGitRepository: (data: GitRepositoryCreatedData) => void;
};

const CLASS_NAME = "git-create-repo";

export default function WizardGitCreateRepo({
<<<<<<< HEAD
  gitProvider,
  gitOrganizationName,
  repoCreated,
  gitOrganizationId,
=======
  gitOrganization,
  repoCreated,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  onCreateGitRepository,
}: Props) {
  const [createRepositoryInput, setCreateRepositoryInput] =
    useState<createRepositoryInput>({
      name: "",
<<<<<<< HEAD
      public: true,
    });

  const handleChange = useCallback(
=======
      groupName: "",
      isPublic: true,
    });
  const [gitRepositoryUrl, setGitRepositoryUrl] = useState<string>("");

  const { data: gitGroupsData } = useQuery(GET_GROUPS, {
    variables: {
      organizationId: gitOrganization.id,
    },
    skip: !gitOrganization.useGroupingForRepositories,
  });

  const gitGroups = gitGroupsData?.gitGroups?.groups;
  const [repositoryGroup, setRepositoryGroup] = useState<GitGroup>(null);
  useEffect(() => {
    if (!repositoryGroup && gitGroups && gitGroups.length > 0) {
      setRepositoryGroup(gitGroups[0]);
      setCreateRepositoryInput({
        ...createRepositoryInput,
        groupName: gitGroups[0].name,
      });
    }
  }, [gitGroups]);

  const handleSelectGroup = useCallback(
    (gitGroup) => {
      setRepositoryGroup(gitGroup);
      setCreateRepositoryInput({
        ...createRepositoryInput,
        groupName: gitGroup.name,
      });
    },
    [createRepositoryInput, setCreateRepositoryInput]
  );

  const handleNameChange = useCallback(
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    (event) => {
      setCreateRepositoryInput({
        ...createRepositoryInput,
        name: event.target.value,
      });
<<<<<<< HEAD
=======
      const gitRepositoryUrl = getGitRepositoryDetails({
        organization: gitOrganization,
        repositoryName: event.target.value,
        groupName: createRepositoryInput.groupName,
      }).repositoryUrl;
      setGitRepositoryUrl(gitRepositoryUrl);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    },
    [setCreateRepositoryInput, createRepositoryInput]
  );

  const handleCreation = useCallback(() => {
    onCreateGitRepository({
<<<<<<< HEAD
      gitOrganizationId: gitOrganizationId,
      gitOrganizationType: EnumGitOrganizationType.Organization,
      gitProvider: EnumGitProvider.Github,
      name: createRepositoryInput.name,
      public: createRepositoryInput.public,
      gitRepositoryUrl: `https://github.com/${createRepositoryInput.name}`,
=======
      gitOrganizationId: gitOrganization.id,
      gitOrganizationType: EnumGitOrganizationType.Organization,
      gitProvider: gitOrganization?.provider,
      name: createRepositoryInput.name,
      groupName: createRepositoryInput.groupName,
      isPublic: createRepositoryInput.isPublic,
      gitRepositoryUrl: gitRepositoryUrl,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    });
  }, [
    onCreateGitRepository,
    createRepositoryInput.name,
<<<<<<< HEAD
    createRepositoryInput.public,
=======
    createRepositoryInput.groupName,
    createRepositoryInput.isPublic,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  ]);

  return (
    <div>
      <div className={`${CLASS_NAME}__header`}>
        <h4>
<<<<<<< HEAD
          Create a new {gitProvider} repository to sync your resource with
        </h4>
        <br />
      </div>
      <div>
        <Toggle
          name="public"
          label={createRepositoryInput.public ? "Public Repo" : "Private Repo"}
          checked={createRepositoryInput.public}
          onChange={(event, checked) => {
            setCreateRepositoryInput({
              ...createRepositoryInput,
              public: checked,
=======
          Create a new {gitOrganization?.provider} repository to sync your
          resource with
        </h4>
      </div>
      {gitOrganization.useGroupingForRepositories && (
        <>
          <div className={`${CLASS_NAME}__label`}>
            <Label text="Change workspace" />
          </div>
          <GitSelectMenu
            gitProvider={gitOrganization?.provider}
            selectedItem={repositoryGroup}
            items={gitGroups}
            onSelect={handleSelectGroup}
          />
        </>
      )}
      <br />
      <div>
        <Toggle
          name="isPublic"
          label="Public Repo"
          checked={createRepositoryInput.isPublic}
          onChange={(event, checked) => {
            setCreateRepositoryInput({
              ...createRepositoryInput,
              isPublic: checked,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            });
          }}
        />
      </div>
<<<<<<< HEAD
      <table className={`${CLASS_NAME}__table`}>
        <tr>
          <th>Owner</th>
          <th>Repository name</th>
        </tr>
        <tr>
          <td style={{ color: "#FFFFFF" }}>{gitOrganizationName}/</td>
          <td>
            <TextField
              autoFocus
              name="name"
              autoComplete="off"
              showError={false}
              onChange={handleChange}
            />
          </td>
        </tr>
      </table>
      <Button
=======
      <br />
      <div className={`${CLASS_NAME}__label`}>
        <Label text="Repository name" />
      </div>
      <TextField
        autoFocus
        name="name"
        autoComplete="off"
        showError={false}
        onChange={handleNameChange}
      />

      <HorizontalRule />

      <Button
        type="button"
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        className={`${CLASS_NAME}__button`}
        disabled={repoCreated.isRepoCreateLoading}
        onClick={handleCreation}
      >
        {repoCreated.isRepoCreateLoading ? (
          <CircularProgress
            className={`${CLASS_NAME}__progress`}
            centerToParent
          />
        ) : (
          "Create new repository"
        )}
      </Button>
      <Label
        text={formatError(repoCreated.RepoCreatedError) || ""}
        type="error"
      />
    </div>
  );
}
