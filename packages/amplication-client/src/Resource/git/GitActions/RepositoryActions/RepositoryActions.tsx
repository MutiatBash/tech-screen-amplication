import {
  Button,
  EnumButtonStyle,
  EnumPanelStyle,
  Icon,
  Panel,
} from "@amplication/ui/design-system";
import React from "react";
import { EnumGitOrganizationType, Resource } from "../../../../models";
import "../../AuthResourceWithGit.scss";
import { GitOrganizationFromGitRepository } from "../../SyncWithGithubPage";
import GithubSyncDetails from "./GithubSyncDetails";
import "./RepositoryActions.scss";
<<<<<<< HEAD
=======
import { EnumGitProvider } from "@amplication/code-gen-types/models";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
type Props = {
  onCreateRepository: () => void;
  onSelectRepository: () => void;
  currentResourceWithGitRepository: Resource;
  selectedGitOrganization: GitOrganizationFromGitRepository | null;
};

const CLASS_NAME = "repository-actions";
export default function RepositoryActions({
  onCreateRepository,
  onSelectRepository,
  currentResourceWithGitRepository,
  selectedGitOrganization,
}: Props) {
  const { gitRepository } = currentResourceWithGitRepository;

  return (
    <div className={`${CLASS_NAME}`}>
      <Panel
        className={`${CLASS_NAME}__auth`}
        panelStyle={EnumPanelStyle.Bordered}
      >
        {gitRepository ? (
          <GithubSyncDetails
            resourceWithRepository={currentResourceWithGitRepository}
          />
        ) : (
          <div className={`${CLASS_NAME}__select-repo`}>
            <div className={`${CLASS_NAME}__select-repo__details`}>
              <Icon icon="info_circle" />
              No repository was selected
            </div>
            <div className={`${CLASS_NAME}__actions`}>
              {selectedGitOrganization && (
                <>
                  <div className={`${CLASS_NAME}__action`}>
                    <Button
<<<<<<< HEAD
                      buttonStyle={EnumButtonStyle.Primary}
=======
                      buttonStyle={EnumButtonStyle.Outline}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                      onClick={onSelectRepository}
                    >
                      Select repository
                    </Button>
                  </div>
                  {selectedGitOrganization.type ===
                    EnumGitOrganizationType.Organization && (
                    <div className={`${CLASS_NAME}__action`}>
                      <Button
<<<<<<< HEAD
=======
                        type="button"
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                        buttonStyle={EnumButtonStyle.Primary}
                        onClick={onCreateRepository}
                        icon="plus"
                      >
                        Create repository
                      </Button>
                    </div>
                  )}
<<<<<<< HEAD
=======
                  {selectedGitOrganization.type ===
                    EnumGitOrganizationType.User &&
                    selectedGitOrganization.provider ===
                      EnumGitProvider.Github && (
                      <div className={`${CLASS_NAME}__action`}>
                        <a
                          href={`https://github.com/new?&owner=${selectedGitOrganization.name}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            type="button"
                            buttonStyle={EnumButtonStyle.Primary}
                            icon="plus"
                          >
                            Create repository
                          </Button>
                        </a>
                      </div>
                    )}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                </>
              )}
            </div>
          </div>
        )}
      </Panel>
    </div>
  );
}
