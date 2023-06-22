import { Icon } from "@amplication/ui/design-system";
import React from "react";
<<<<<<< HEAD
import { CLASS_NAME } from "./AuthResourceWithGit";
=======

const CLASS_NAME = "auth-app-with-git";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

export default function GitSyncNotes() {
  return (
    <div className={`${CLASS_NAME}__notice`}>
      <span className={`${CLASS_NAME}__notice__title`}>Please note:</span>
      <ul>
        <li>
<<<<<<< HEAD
          <Icon icon="check_circle" />
          The changes will be pushed to the root of the selected repository,
          using Pull Requests.
        </li>
        <li>
          <Icon icon="check_circle" />
          The selected repository must not be empty.
=======
          <Icon icon="check_square" size="xsmall" />
          You can connect multiple services to the same repository, next you
          will see the option to select the destination folder
        </li>
        <li>
          <Icon icon="check_square" size="xsmall" />
          The selected repository must not be empty
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        </li>
      </ul>
    </div>
  );
}
