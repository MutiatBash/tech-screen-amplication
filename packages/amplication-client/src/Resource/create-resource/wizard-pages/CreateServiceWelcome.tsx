import { Button } from "@amplication/ui/design-system";
import React, { useCallback } from "react";
<<<<<<< HEAD
import {} from "../../../util/analytics-events.types";
=======

import { AnalyticsEventNames } from "../../../util/analytics-events.types";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { WizardStepProps } from "../wizard-pages/interfaces";
import "./CreateServiceWelcome.scss";

const className = "create-service-welcome";

<<<<<<< HEAD
const CreateServiceWelcome: React.FC<WizardStepProps> = ({ goNextPage }) => {
  const handleStart = useCallback(() => {
=======
const CreateServiceWelcome: React.FC<WizardStepProps> = ({
  goNextPage,
  trackWizardPageEvent,
}) => {
  const handleStart = useCallback(() => {
    trackWizardPageEvent(
      AnalyticsEventNames.ServiceWizardStep_Welcome_CTAClick
    );
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    goNextPage && goNextPage();
  }, []);

  return (
    <div className={className}>
      <div className={`${className}__welcome`}>
        <h1>
          Welcome to amplication!{" "}
          <span role="img" aria-label="party emoji">
            🎉
          </span>
        </h1>
        <h3>Let's create together your first service</h3>
      </div>
      <div className={`${className}__start_btn`}>
        <Button onClick={handleStart}>Let's start</Button>
      </div>
    </div>
  );
};
CreateServiceWelcome.displayName = "CreateServiceWelcome";

export default CreateServiceWelcome;
