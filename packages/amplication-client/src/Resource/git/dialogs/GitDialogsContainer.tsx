import { Dialog } from "@amplication/ui/design-system";
import { ApolloError } from "@apollo/client";
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { EnumGitProvider } from "../../../models";
import GitCreateRepo from "./GitCreateRepo/GitCreateRepo";
import WizardGitCreateRepo from "./GitCreateRepo/WizardGitCreateRepo";
import GitRepos, {
  GitRepositoryCreatedData,
  GitRepositorySelected,
} from "./GitRepos/GithubRepos";
<<<<<<< HEAD

type Props = {
  gitOrganizationId: string;
=======
import { GitOrganizationFromGitRepository } from "../SyncWithGithubPage";
import "./GitDialogsContainer.scss";
import { useCallback } from "react";
import { PROVIDERS_DISPLAY_NAME } from "../../constants";

type Props = {
  gitOrganization: GitOrganizationFromGitRepository;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  isSelectRepositoryOpen: boolean;
  isPopupFailed: boolean;
  gitCreateRepoOpen: boolean;
  gitProvider: EnumGitProvider;
<<<<<<< HEAD
  gitOrganizationName: string;
=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  src: string;
  repoCreated?: {
    isRepoCreateLoading: boolean;
    RepoCreatedError: ApolloError;
  };
<<<<<<< HEAD

=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  onGitCreateRepository: (data: GitRepositoryCreatedData) => void;
  onPopupFailedClose: () => void;
  onGitCreateRepositoryClose: () => void;
  onSelectGitRepositoryDialogClose: () => void;
  onSelectGitRepository: (data: GitRepositorySelected) => void;
<<<<<<< HEAD
};

export default function GitDialogsContainer({
  gitOrganizationId,
=======
  openCreateNewRepo?: () => void;
  closeSelectRepoDialog?: () => void;
};

export default function GitDialogsContainer({
  gitOrganization,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  isSelectRepositoryOpen,
  isPopupFailed,
  gitCreateRepoOpen,
  gitProvider,
<<<<<<< HEAD
  gitOrganizationName,
=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  repoCreated,
  src,
  onGitCreateRepository,
  onPopupFailedClose,
  onSelectGitRepositoryDialogClose,
  onSelectGitRepository,
  onGitCreateRepositoryClose,
<<<<<<< HEAD
}: Props) {
=======
  openCreateNewRepo,
  closeSelectRepoDialog,
}: Props) {
  const handleCreateNewRepoClick = useCallback(() => {
    closeSelectRepoDialog();
    openCreateNewRepo();
  }, [closeSelectRepoDialog, openCreateNewRepo]);

  const providerDisplayName = PROVIDERS_DISPLAY_NAME[gitProvider];

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  return (
    <div>
      <Dialog
        className="select-repo-dialog"
        isOpen={isSelectRepositoryOpen}
<<<<<<< HEAD
        title={`Select ${gitProvider} repository`}
        onDismiss={onSelectGitRepositoryDialogClose}
      >
        <GitRepos
          gitOrganizationId={gitOrganizationId}
          onGitRepositoryConnected={onSelectGitRepository}
          gitProvider={gitProvider}
=======
        title={`Select ${providerDisplayName} repository`}
        onDismiss={onSelectGitRepositoryDialogClose}
      >
        <GitRepos
          gitOrganization={gitOrganization}
          onGitRepositoryConnected={onSelectGitRepository}
          gitProvider={gitProvider}
          openCreateNewRepo={handleCreateNewRepoClick}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        />
      </Dialog>
      <Dialog
        className="popup-failed-dialog"
        isOpen={isPopupFailed}
        title="Popup failed to load"
        onDismiss={onPopupFailedClose}
      >
        Please make sure that you allow popup windows in the browser
      </Dialog>
      <Dialog
        className="git-create-dialog"
        isOpen={gitCreateRepoOpen}
        title="Create new repository"
        onDismiss={onGitCreateRepositoryClose}
      >
        {src === "serviceWizard" ? (
          <WizardGitCreateRepo
<<<<<<< HEAD
            gitProvider={gitProvider}
            repoCreated={repoCreated}
            gitOrganizationName={gitOrganizationName}
            onCreateGitRepository={onGitCreateRepository}
            gitOrganizationId={gitOrganizationId}
          ></WizardGitCreateRepo>
        ) : (
          <GitCreateRepo
            gitProvider={gitProvider}
            repoCreated={repoCreated}
            gitOrganizationName={gitOrganizationName}
=======
            repoCreated={repoCreated}
            onCreateGitRepository={onGitCreateRepository}
            gitOrganization={gitOrganization}
          ></WizardGitCreateRepo>
        ) : (
          <GitCreateRepo
            gitOrganization={gitOrganization}
            repoCreated={repoCreated}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            onCreateGitRepository={onGitCreateRepository}
          />
        )}
      </Dialog>
    </div>
  );
}
