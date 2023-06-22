import {
  Button,
  CircularProgress,
<<<<<<< HEAD
  Label,
  TextField,
  ToggleField,
} from "@amplication/ui/design-system";
import { ApolloError } from "@apollo/client";
import { Form, Formik } from "formik";
import { useCallback } from "react";
import { EnumGitProvider, CreateGitRepositoryInput } from "../../../../models";
import { formatError } from "../../../../util/error";
import { CreateGitFormSchema } from "./CreateGitFormSchema/CreateGitFormSchema";
import "./GitCreateRepo.scss";

type Props = {
  gitProvider: EnumGitProvider;
  gitOrganizationName: string;
=======
  HorizontalRule,
  Label,
  TextField,
  Toggle,
} from "@amplication/ui/design-system";
import { ApolloError, useQuery } from "@apollo/client";
import { Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { CreateGitRepositoryInput } from "../../../../models";
import { formatError } from "../../../../util/error";
import { CreateGitFormSchema } from "./CreateGitFormSchema/CreateGitFormSchema";
import "./GitCreateRepo.scss";
import { GitSelectMenu } from "../../select/GitSelectMenu";
import { GitOrganizationFromGitRepository } from "../../SyncWithGithubPage";
import { GET_GROUPS } from "../../queries/gitProvider";

type Props = {
  gitOrganization: GitOrganizationFromGitRepository;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  repoCreated: {
    isRepoCreateLoading: boolean;
    RepoCreatedError: ApolloError;
  };
  onCreateGitRepository: (data: CreateGitRepositoryInput) => void;
};

const CLASS_NAME = "git-create-repo";

export default function GitCreateRepo({
<<<<<<< HEAD
  gitProvider,
  gitOrganizationName,
=======
  gitOrganization,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  repoCreated,
  onCreateGitRepository,
}: Props) {
  const initialValues: Partial<CreateGitRepositoryInput> = {
    name: "",
<<<<<<< HEAD
    public: true,
  };

  const handleCreation = useCallback((data: CreateGitRepositoryInput) => {
    onCreateGitRepository(data);
  }, []);
=======
    isPublic: true,
  };

  const { data: gitGroupsData } = useQuery(GET_GROUPS, {
    variables: {
      organizationId: gitOrganization.id,
    },
    skip: !gitOrganization.useGroupingForRepositories,
  });

  const gitGroups = gitGroupsData?.gitGroups?.groups;
  const [repositoryGroup, setRepositoryGroup] = useState(null);

  useEffect(() => {
    if (!repositoryGroup && gitGroups && gitGroups.length > 0) {
      setRepositoryGroup(gitGroups[0]);
    }
  }, [gitGroups]);

  const handleCreation = useCallback(
    (data: CreateGitRepositoryInput) => {
      const inputData = repositoryGroup
        ? { ...data, groupName: repositoryGroup.name }
        : data;
      onCreateGitRepository(inputData);
    },
    [repositoryGroup]
  );
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCreation}
      validationSchema={CreateGitFormSchema}
      validateOnChange={false}
      validateOnBlur
    >
      {({ errors: formError, values, handleChange }) => (
<<<<<<< HEAD
        <Form>
          <div className={`${CLASS_NAME}__header`}>
            <h4>
              Create a new {gitProvider} repository to sync your resource with
            </h4>
            <br />
          </div>
          <div>
            <ToggleField
              name="public"
              label={values.public ? "Public Repo" : "Private Repo"}
              checked={values.public}
              onChange={handleChange}
            />
          </div>
          <table className={`${CLASS_NAME}__table`}>
            <tr>
              <th>Owner</th>
              <th>Repository name</th>
            </tr>
            <tr>
              <td>{gitOrganizationName}/</td>
              <td>
                <TextField
                  autoFocus
                  name="name"
                  autoComplete="off"
                  showError={false}
                />
              </td>
            </tr>
          </table>
=======
        <Form className={CLASS_NAME}>
          <div className={`${CLASS_NAME}__header`}>
            Create a new {gitOrganization.provider} repository to sync your
            resource with
          </div>

          {gitOrganization.useGroupingForRepositories && (
            <>
              <div className={`${CLASS_NAME}__label`}>Change workspace</div>
              <GitSelectMenu
                gitProvider={gitOrganization.provider}
                selectedItem={repositoryGroup}
                items={gitGroups}
                onSelect={setRepositoryGroup}
              />
            </>
          )}

          <div>
            <Toggle
              name="isPublic"
              label="Public Repository"
              checked={values.isPublic}
              onChange={handleChange}
            />
          </div>

          <div className={`${CLASS_NAME}__label`}>Repository name</div>
          <TextField
            autoFocus
            name="name"
            autoComplete="off"
            showError={false}
          />

          <HorizontalRule />

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          <Button
            type="submit"
            className={`${CLASS_NAME}__button`}
            disabled={repoCreated.isRepoCreateLoading}
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
            text={
              formError.name || formatError(repoCreated.RepoCreatedError) || ""
            }
            type="error"
          />
        </Form>
      )}
    </Formik>
  );
}
