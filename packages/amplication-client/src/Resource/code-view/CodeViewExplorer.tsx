import { gql } from "@apollo/client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import CommitSelector from "../../Components/CommitSelector";
import ResourceSelector from "../../Components/ResourceSelector";
import { AppContext } from "../../context/appContext";
import { Commit, Resource } from "../../models";
import "./CodeViewBar.scss";
import CodeViewExplorerTree from "./CodeViewExplorerTree";
import { FileDetails } from "./CodeViewPage";
import { NodeTypeEnum } from "./NodeTypeEnum";
<<<<<<< HEAD
import useCommit from "../../VersionControl/hooks/useCommits";
=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

const CLASS_NAME = "code-view-bar";

type Props = {
  onFileSelected: (selectedFile: FileDetails | null) => void;
};

export type FileMeta = {
  type: NodeTypeEnum;
  name: string;
  path: string;
  children?: FileMeta[] | undefined;
  expanded?: boolean;
};

const CodeViewExplorer: React.FC<Props> = ({ onFileSelected }) => {
<<<<<<< HEAD
  const { resources } = useContext(AppContext);
  const { commits } = useCommit();
=======
  const { resources, commitUtils } = useContext(AppContext);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );

  const handleSelectedCommit = (commit: Commit) => {
    setSelectedCommit(commit);
    onFileSelected(null);
  };

  const handleSelectedResource = (resource: Resource) => {
    setSelectedResource(resource);
  };

  useEffect(() => {
<<<<<<< HEAD
    setSelectedCommit(commits[0]);
  }, [commits]);
=======
    setSelectedCommit(commitUtils.commits[0]);
  }, [commitUtils.commits]);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  useEffect(() => {
    setSelectedResource(resources[0]);
  }, [resources]);

  const selectedBuild = useMemo(() => {
    return selectedCommit?.builds?.find(
      (b) => b.resource.id === selectedResource?.id
    );
  }, [selectedCommit, selectedResource]);

  return (
    <div className={CLASS_NAME}>
      <div>
        <CommitSelector
<<<<<<< HEAD
          commits={commits}
=======
          commits={commitUtils.commits}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          selectedCommit={selectedCommit}
          onSelectCommit={handleSelectedCommit}
        />
        <ResourceSelector
          resources={resources}
          selectedResource={selectedResource}
          onSelectResource={handleSelectedResource}
        />
      </div>
      {selectedCommit && selectedResource && selectedBuild && (
        <CodeViewExplorerTree
          selectedBuild={selectedBuild}
          resourceId={selectedResource.id}
          onFileSelected={onFileSelected}
        />
      )}
    </div>
  );
};

export default CodeViewExplorer;

export const GET_BUILDS_COMMIT = gql`
  query builds(
    $resourceId: String!
    $orderBy: BuildOrderByInput
    $whereMessage: StringFilter
  ) {
    builds(
      where: { resource: { id: $resourceId }, message: $whereMessage }
      orderBy: $orderBy
    ) {
      id
      message
      createdAt
      resourceId
    }
  }
`;
