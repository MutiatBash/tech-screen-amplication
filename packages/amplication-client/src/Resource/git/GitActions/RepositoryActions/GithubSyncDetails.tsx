import { Snackbar } from "@amplication/ui/design-system";
import { useMutation } from "@apollo/client";
import classNames from "classnames";
import { AnalyticsEventNames } from "../../../../util/analytics-events.types";
<<<<<<< HEAD
import { useCallback, useContext } from "react";
import { Button, EnumButtonStyle } from "../../../../Components/Button";
import { AppContext } from "../../../../context/appContext";
=======
import { useCallback } from "react";
import { Button, EnumButtonStyle } from "../../../../Components/Button";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { Resource } from "../../../../models";
import { formatError } from "../../../../util/error";
import { DISCONNECT_GIT_REPOSITORY } from "../../../../Workspaces/queries/resourcesQueries";
import GitRepoDetails from "../../GitRepoDetails";
import "./GithubSyncDetails.scss";
<<<<<<< HEAD

const CLASS_NAME = "github-repo-details";
=======
import { getGitRepositoryDetails } from "../../../../util/git-repository-details";

const CLASS_NAME = "git-repo-details";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

type Props = {
  resourceWithRepository: Resource;
  className?: string;
  showGitRepositoryBtn?: boolean;
};

function GithubSyncDetails({
  resourceWithRepository,
  className,
  showGitRepositoryBtn = true,
}: Props) {
<<<<<<< HEAD
  const { gitRepositoryUrl, gitRepositoryFullName } = useContext(AppContext);

=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const [disconnectGitRepository, { error: disconnectErrorUpdate }] =
    useMutation(DISCONNECT_GIT_REPOSITORY, {
      variables: { resourceId: resourceWithRepository.id },
    });

  const handleDisconnectGitRepository = useCallback(() => {
    disconnectGitRepository({
      variables: { resourceId: resourceWithRepository.id },
    }).catch(console.error);
  }, [disconnectGitRepository, resourceWithRepository.id]);
<<<<<<< HEAD

  const errorMessage = formatError(disconnectErrorUpdate);

=======
  const errorMessage = formatError(disconnectErrorUpdate);
  const gitRepositoryDetails = getGitRepositoryDetails({
    organization: resourceWithRepository.gitRepository?.gitOrganization,
    repositoryName: resourceWithRepository.gitRepository?.name,
    groupName: resourceWithRepository?.gitRepository?.groupName,
  });
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__body`}>
        <div className={`${CLASS_NAME}__details`}>
          <GitRepoDetails
<<<<<<< HEAD
            gitRepositoryFullName={gitRepositoryFullName}
=======
            gitRepositoryFullName={gitRepositoryDetails.repositoryFullName}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            className={classNames(className, `${CLASS_NAME}__name`)}
          />
          <div>
            <a
<<<<<<< HEAD
              href={gitRepositoryUrl}
              target="github_repo"
              className={className}
            >
              {gitRepositoryUrl}
=======
              href={gitRepositoryDetails.repositoryUrl}
              target="github_repo"
              className={className}
            >
              {gitRepositoryDetails.repositoryUrl}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            </a>
          </div>
        </div>

        {showGitRepositoryBtn && (
          <div className={`${CLASS_NAME}__action`}>
            <Button
              buttonStyle={EnumButtonStyle.Primary}
              eventData={{
                eventName: AnalyticsEventNames.GithubRepositoryChange,
              }}
              onClick={handleDisconnectGitRepository}
            >
              Change Repository
            </Button>
          </div>
        )}
      </div>

      <Snackbar open={Boolean(disconnectErrorUpdate)} message={errorMessage} />
    </div>
  );
}

export default GithubSyncDetails;
