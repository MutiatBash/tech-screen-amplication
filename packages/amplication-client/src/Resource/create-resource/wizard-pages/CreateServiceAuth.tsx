import React, { useCallback } from "react";
import "../CreateServiceWizard.scss";
<<<<<<< HEAD

import { CreateServiceWizardLayout as Layout } from "../CreateServiceWizardLayout";
import { LabelDescriptionSelector } from "./LabelDescriptionSelector";
import { WizardStepProps } from "./interfaces";

import authModuleImage from "../../../assets/images/auth-module.svg";

const CreateServiceAuth: React.FC<WizardStepProps> = ({ formik }) => {
=======
import { CreateServiceWizardLayout as Layout } from "../CreateServiceWizardLayout";
import { LabelDescriptionSelector } from "./LabelDescriptionSelector";
import { WizardStepProps } from "./interfaces";
import authModuleImage from "../../../assets/images/auth-module.svg";
import ImgSvg from "./ImgSvg";

const CreateServiceAuth: React.FC<WizardStepProps> = ({ formik }) => {
  const AuthCoreSvg = ImgSvg({ image: authModuleImage });

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const handleDatabaseSelect = useCallback(
    (database: string) => {
      formik.setValues(
        {
          ...formik.values,
          authType: database,
        },
        true
      );
    },
    [formik.values]
  );

  return (
    <Layout.Split>
      <Layout.LeftSide>
        <Layout.Description
          header="Does your service need Authentication?"
          text={`Choose whether or not to enable authentication and authorization for  your service.`}
        />
      </Layout.LeftSide>
      <Layout.RightSide>
        <Layout.SelectorWrapper>
          <LabelDescriptionSelector
            name="core"
<<<<<<< HEAD
            image={authModuleImage}
=======
            image={AuthCoreSvg}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            label="Include Auth Module"
            description="Generate the code needed for authentication and authorization"
            onClick={handleDatabaseSelect}
            currentValue={formik.values.authType}
          />
          <LabelDescriptionSelector
            name="no"
            icon="unlock"
            label="Skip Authentication"
            description="Do not include code for authentication"
            onClick={handleDatabaseSelect}
            currentValue={formik.values.authType}
          />
        </Layout.SelectorWrapper>
      </Layout.RightSide>
    </Layout.Split>
  );
};

export default CreateServiceAuth;
