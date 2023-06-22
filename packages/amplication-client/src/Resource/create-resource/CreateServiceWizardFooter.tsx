import {
  Button,
  EnumButtonStyle,
  EnumIconPosition,
} from "@amplication/ui/design-system";
import React, { useContext } from "react";
import "./CreateServiceWizard.scss";
import { AppContext } from "../../context/appContext";
import InnerTabLink from "../../Layout/InnerTabLink";

// eslint-disable-next-line @typescript-eslint/ban-types
const CreateServiceWizardFooter: React.FC<{}> = () => {
  const { currentProject, currentWorkspace } = useContext(AppContext);

  return (
    <div className={`create-service-wizard__footer`}>
      <Button
        buttonStyle={EnumButtonStyle.Secondary}
        icon="arrow_left"
        iconPosition={EnumIconPosition.Left}
        // onClick={}
      >
        {"Back to project"}
      </Button>
      <InnerTabLink
<<<<<<< HEAD
        to={`/${currentWorkspace?.id}/${currentProject?.id}/create-resource/settings/github-sync`}
=======
        to={`/${currentWorkspace?.id}/${currentProject?.id}/create-resource/settings/git-sync`}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        icon="settings"
      >
        Settings
      </InnerTabLink>
      <InnerTabLink
        to={`/${currentWorkspace?.id}/${currentProject?.id}/create-resource/settings/generation-settings`}
        icon="settings"
      >
        Settings
      </InnerTabLink>
      <InnerTabLink
        to={`/${currentWorkspace?.id}/${currentProject?.id}/create-resource/settings/repository`}
        icon="settings"
      >
        Repository
      </InnerTabLink>
      <Button
        buttonStyle={EnumButtonStyle.Primary}
        //onClick={handleCreateServiceClick}
      >
        Continue
      </Button>
    </div>
  );
};

export default CreateServiceWizardFooter;
