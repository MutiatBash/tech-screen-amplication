import React, { useCallback } from "react";
<<<<<<< HEAD
import "../CreateServiceWizard.scss";

=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { CreateServiceWizardLayout as Layout } from "../CreateServiceWizardLayout";
import { LabelDescriptionSelector } from "./LabelDescriptionSelector";
import { WizardStepProps } from "./interfaces";

<<<<<<< HEAD
const CreateServiceDatabase: React.FC<WizardStepProps> = ({ formik }) => {
  const PLUGIN_LOGO_BASE_URL =
    "https://raw.githubusercontent.com/amplication/plugin-catalog/master/assets/icons/";

=======
import "../CreateServiceWizard.scss";

interface Props extends WizardStepProps {
  PostgresPng: React.ReactElement<any, any>;
  MongoPng: React.ReactElement<any, any>;
  MysqlPng: React.ReactElement<any, any>;
}

const CreateServiceDatabase: React.FC<Props> = ({
  formik,
  PostgresPng,
  MongoPng,
  MysqlPng,
}) => {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const handleDatabaseSelect = useCallback(
    (database: string) => {
      formik.setValues(
        {
          ...formik.values,
          databaseType: database,
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
          header="Which database do you want to use?"
          text={`Amplication generates the service with all the required configuration and code to start working with a DB. 
          
          You can easily change the type of the DB later in the plugins page
          `}
        />
      </Layout.LeftSide>
      <Layout.RightSide>
        <Layout.SelectorWrapper>
          <LabelDescriptionSelector
            name="postgres"
<<<<<<< HEAD
            image={`${PLUGIN_LOGO_BASE_URL}db-postgres.png`}
=======
            image={PostgresPng}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            imageSize="large"
            label="PostgreSQL"
            description="Use PostgreSQL database in Amplication service."
            onClick={handleDatabaseSelect}
            currentValue={formik.values.databaseType}
          />
          <LabelDescriptionSelector
            name="mongo"
<<<<<<< HEAD
            image={`${PLUGIN_LOGO_BASE_URL}db-mongo.png`}
=======
            image={MongoPng}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            imageSize="large"
            label="MongoDB"
            description="Use MongoDB database in Amplication service."
            onClick={handleDatabaseSelect}
            currentValue={formik.values.databaseType}
          />
          <LabelDescriptionSelector
            name="mysql"
<<<<<<< HEAD
            image={`${PLUGIN_LOGO_BASE_URL}db-mysql.png`}
=======
            image={MysqlPng}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            imageSize="large"
            label="MySQL"
            description="Use MySQL database in Amplication service.."
            onClick={handleDatabaseSelect}
            currentValue={formik.values.databaseType}
          />
        </Layout.SelectorWrapper>
      </Layout.RightSide>
    </Layout.Split>
  );
};

export default CreateServiceDatabase;
