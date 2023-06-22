import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import InnerTabLink from "../../Layout/InnerTabLink";

import "./ProjectConfigurationSettingsPage.scss";

const CLASS_NAME = "project-configuration-settings";

// eslint-disable-next-line @typescript-eslint/ban-types
const ProjectConfigurationSettingsPage: React.FC<{}> = () => {
  const { currentWorkspace, currentProject, currentResource } =
    useContext(AppContext);

  return (
    <div className={CLASS_NAME}>
      <div>
        <InnerTabLink
          to={`/${currentWorkspace?.id}/${currentProject?.id}/${currentResource?.id}/settings/update`}
          icon="settings"
        >
          General
        </InnerTabLink>
      </div>
      <div>
        <InnerTabLink
          to={`/${currentWorkspace?.id}/${currentProject?.id}/${currentResource?.id}/settings/directories/update`}
          icon="settings"
        >
<<<<<<< HEAD
          Base Directories
=======
          Base Directory
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        </InnerTabLink>
      </div>
    </div>
  );
};

export default ProjectConfigurationSettingsPage;
