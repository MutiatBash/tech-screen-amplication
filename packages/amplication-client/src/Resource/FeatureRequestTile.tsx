import React, { useCallback } from "react";

import { Button, EnumButtonStyle } from "@amplication/ui/design-system";

import { useTracking } from "../util/analytics";
import OverviewSecondaryTile from "./OverviewSecondaryTile";
import { AnalyticsEventNames } from "../util/analytics-events.types";

function FeatureRequestTile() {
  const { trackEvent } = useTracking();

  const handleClick = useCallback(() => {
    trackEvent({ eventName: AnalyticsEventNames.FeatureRequestTileClick });
  }, [trackEvent]);

  return (
    <OverviewSecondaryTile
      icon="main_logo"
<<<<<<< HEAD
      title="Submit a feature request"
=======
      title="Submit a Feature Request"
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      message="If there’s something you’d like to see in Amplication, open a Feature Request on GitHub and tell us about it."
      footer={
        <a
          href="https://github.com/amplication/amplication/issues/new/choose"
          target="githubfeature"
          rel="noopener"
          onClick={handleClick}
        >
          <Button buttonStyle={EnumButtonStyle.Secondary} type="button">
            Share your idea
          </Button>
        </a>
      }
    />
  );
}

export default FeatureRequestTile;
