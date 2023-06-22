import { FormikProps } from "formik";
import { AnalyticsEventNames } from "../../../util/analytics-events.types";
<<<<<<< HEAD
=======
import { EnumGitProvider } from "../../../models";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

export interface ResourceSettings {
  serviceName: string;
  gitOrganizationId: string;
  gitRepositoryName: string;
<<<<<<< HEAD
=======
  groupName: string;
  gitProvider: EnumGitProvider;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  isOverrideGitRepository: boolean;
  generateAdminUI: boolean;
  generateGraphQL: boolean;
  generateRestApi: boolean;
  baseDir: string;
  structureType: "Mono" | " Poly";
  databaseType: "postgres" | "mysql" | "mongo";
  templateType: "empty" | "orderManagement";
  authType: string;
  isGenerateCompleted: string;
<<<<<<< HEAD
=======
  connectToDemoRepo: boolean;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
}
export interface NextPage {
  nextTitle: string;
  isValid: boolean;
}

export enum EnumTemplateType {
  empty = "empty",
  orderManagement = "orderManagement",
}

export interface WizardStepProps {
  moduleClass: string;
  trackWizardPageEvent: (
    eventName: AnalyticsEventNames,
    additionalData?: { [key: string]: string }
  ) => void;
  formik?: FormikProps<{ [key: string]: any }>;
  goNextPage?: () => void;
}
