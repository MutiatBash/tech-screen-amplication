import React, { useCallback } from "react";
import { useTracking } from "../util/analytics";
import { AnalyticsEventNames } from "../util/analytics-events.types";
import "./SupportMenu.scss";

const CLASS_NAME = "support-menu";

const SupportMenu = () => {
  const { trackEvent } = useTracking();

  const handleDocsClick = useCallback(() => {
    trackEvent({
      eventName: AnalyticsEventNames.SupportDocsClick,
    });
  }, [trackEvent]);

  const handleCommunityClick = useCallback(() => {
    trackEvent({
      eventName: AnalyticsEventNames.SupportCommunityClick,
    });
  }, [trackEvent]);

  const handleFeatureRequestClick = useCallback(() => {
    trackEvent({
      eventName: AnalyticsEventNames.SupportFeatureRequestClick,
    });
  }, [trackEvent]);

  const handleIssueClick = useCallback(() => {
    trackEvent({
      eventName: AnalyticsEventNames.SupportIssueClick,
    });
  }, [trackEvent]);

  return (
    <div className={CLASS_NAME}>
      <a
        href="https://docs.amplication.com"
        target="docs"
        rel="noopener"
        onClick={handleDocsClick}
      >
        Docs
      </a>
      <a
<<<<<<< HEAD
        href="https://discord.gg/Z2CG3rUFnu"
=======
        href="https://amplication.com/discord"
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        target="community"
        rel="noopener"
        onClick={handleCommunityClick}
      >
        Community
      </a>
      <a
        href="https://github.com/amplication/amplication/issues/new/choose"
        target="githubissue"
        rel="noopener"
        onClick={handleIssueClick}
      >
        Report an issue
      </a>
      <a
        href="https://github.com/amplication/amplication/issues/new/choose"
        target="githubfeature"
        rel="noopener"
        onClick={handleFeatureRequestClick}
      >
        Submit a feature request
      </a>
    </div>
  );
};

export default SupportMenu;
