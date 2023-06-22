import {
  EnumButtonStyle,
<<<<<<< HEAD
=======
  Icon,
  Label,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  SelectMenu,
  SelectMenuItem,
  SelectMenuList,
  SelectMenuModal,
} from "@amplication/ui/design-system";
<<<<<<< HEAD
import { GitOrganizationFromGitRepository } from "../SyncWithGithubPage";
import "./ExistingConnectionsMenu.scss";
import { GitOrganizationMenuItemContent } from "./GitOrganizationMenuItemContent";
import * as models from "../../../models";
import { GitOrganizationMenuAddProvider } from "./GitOrganizationMenuAddProvider";
=======
import { gitLogoMap } from "../git-provider-icon-map";
import { GitOrganizationFromGitRepository } from "../SyncWithGithubPage";
import "./ExistingConnectionsMenu.scss";
import { GitOrganizationMenuItemContent } from "./GitOrganizationMenuItemContent";
import { useRef } from "react";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

type Props = {
  gitOrganizations: GitOrganizationFromGitRepository[];
  selectedGitOrganization: GitOrganizationFromGitRepository | null;
<<<<<<< HEAD
  onAddGitOrganization: (provider: models.EnumGitProvider) => void;
=======
  onAddGitOrganization?: () => void;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  onSelectGitOrganization: (
    organization: GitOrganizationFromGitRepository
  ) => void;
};

const CLASS_NAME = "git-organization-select-menu";

<<<<<<< HEAD
const GIT_PROVIDERS: { provider: models.EnumGitProvider; label: string }[] = [
  { provider: models.EnumGitProvider.Github, label: "Add GitHub Organization" },
  // comment until we fully support Bitbucket
  // {
  //   provider: models.EnumGitProvider.Bitbucket,
  //   label: "Add BitBucket Account",
  // },
];

=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
export default function ExistingConnectionsMenu({
  gitOrganizations,
  selectedGitOrganization,
  onAddGitOrganization,
  onSelectGitOrganization,
}: Props) {
<<<<<<< HEAD
  return (
    <SelectMenu
      title={
        selectedGitOrganization?.name ? (
          <GitOrganizationMenuItemContent
            gitOrganization={selectedGitOrganization}
            isMenuTitle
          />
        ) : (
          "Select Git Provider"
        )
      }
      buttonStyle={EnumButtonStyle.Text}
      className={`${CLASS_NAME}__menu`}
      icon="chevron_down"
    >
      <SelectMenuModal>
        <div className={`${CLASS_NAME}__select-menu`}>
          <SelectMenuList>
            <>
              {gitOrganizations.map((gitOrganization) => (
                <SelectMenuItem
=======
  const selectRef = useRef(null);

  return (
    <>
      <div className={`${CLASS_NAME}__label-title`}>
        <Label text="Select organization" />
      </div>
      <SelectMenu
        selectRef={selectRef}
        title={
          selectedGitOrganization?.name ? (
            <GitOrganizationMenuItemContent
              gitAvatar={gitLogoMap[selectedGitOrganization.provider]}
              gitOrganization={selectedGitOrganization}
              isMenuTitle
            />
          ) : (
            "select organization" // temporary
          )
        }
        buttonStyle={EnumButtonStyle.Text}
        className={`${CLASS_NAME}__menu`}
        icon="chevron_down"
      >
        <SelectMenuModal className={`${CLASS_NAME}__list`}>
          <SelectMenuList className={`${CLASS_NAME}__select-menu`}>
            <>
              {gitOrganizations.map((gitOrganization) => (
                <SelectMenuItem
                  className={`${CLASS_NAME}__item`}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                  closeAfterSelectionChange
                  selected={selectedGitOrganization?.id === gitOrganization.id}
                  key={gitOrganization.id}
                  onSelectionChange={() => {
                    onSelectGitOrganization(gitOrganization);
                  }}
                >
                  <GitOrganizationMenuItemContent
<<<<<<< HEAD
=======
                    gitAvatar={gitLogoMap[gitOrganization.provider]}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
                    gitOrganization={gitOrganization}
                  />
                </SelectMenuItem>
              ))}
<<<<<<< HEAD
              <hr className={`${CLASS_NAME}__hr`} />
              {GIT_PROVIDERS.map((provider) => (
                <GitOrganizationMenuAddProvider
                  key={provider.provider}
                  label={provider.label}
                  provider={provider.provider}
                  onAddGitOrganization={onAddGitOrganization}
                  className={CLASS_NAME}
                />
              ))}
            </>
          </SelectMenuList>
        </div>
      </SelectMenuModal>
    </SelectMenu>
=======
            </>
          </SelectMenuList>
          <div
            className={`${CLASS_NAME}__add-item`}
            onClick={() => {
              selectRef.current.firstChild.click();
              onAddGitOrganization && onAddGitOrganization();
            }}
          >
            <Icon icon="plus" size="xsmall" />
            <span>Add Organization</span>
          </div>
        </SelectMenuModal>
      </SelectMenu>
    </>
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  );
}
