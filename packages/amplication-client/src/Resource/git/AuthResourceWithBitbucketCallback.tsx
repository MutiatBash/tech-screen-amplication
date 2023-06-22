import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useTracking } from "../../util/analytics";
import { AnalyticsEventNames } from "../../util/analytics-events.types";
import { EnumGitProvider } from "../../models";
import { COMPLETE_OAUTH2_FLOW } from "./queries/git-callback";
<<<<<<< HEAD
=======
import { GET_PROJECTS } from "../../Workspaces/queries/projectQueries";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

const AuthResourceWithBitbucketCallback = () => {
  const { trackEvent } = useTracking();
  const [completeAuthWithGit] = useMutation<boolean>(COMPLETE_OAUTH2_FLOW, {
    onCompleted: (data) => {
      window.opener.postMessage({ completed: true });
      // close the popup
      window.close();
    },
<<<<<<< HEAD
=======
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
    ],
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const authorizationCode = urlParams.get("code");
    if (window.opener) {
      trackEvent({
        eventName: AnalyticsEventNames.GitHubAuthResourceComplete,
      });
      completeAuthWithGit({
        variables: {
          code: authorizationCode,
          gitProvider: EnumGitProvider.Bitbucket,
        },
      }).catch(console.error);
    }
  }, [completeAuthWithGit, trackEvent]);

  /**@todo: show formatted layout and optional error message */
  return <p>Please wait...</p>;
};

export default AuthResourceWithBitbucketCallback;
