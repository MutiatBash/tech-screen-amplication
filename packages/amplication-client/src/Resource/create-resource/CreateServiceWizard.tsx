import { Modal, Snackbar } from "@amplication/ui/design-system";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { match, useHistory } from "react-router-dom";
import * as H from "history";
import { formatError } from "../../util/error";
import "./CreateServiceWizard.scss";
import { AppRouteProps } from "../../routes/routesUtil";
import { AppContext } from "../../context/appContext";
import ServiceWizard, { WizardStep } from "./ServiceWizard";
import CreateServiceWelcome from "./wizard-pages/CreateServiceWelcome";
import CreateServiceName from "./wizard-pages/CreateServiceName";
import CreateGithubSync from "./wizard-pages/CreateGithubSync";
import CreateGenerationSettings from "./wizard-pages/CreateGenerationSettings";
import CreateServiceRepository from "./wizard-pages/CreateServiceRepository";
import CreateServiceDatabase from "./wizard-pages/CreateServiceDatabase";
import CreateServiceAuth from "./wizard-pages/CreateServiceAuth";
import {
  schemaArray,
  ResourceInitialValues,
  WizardProgressBarInterface,
  wizardProgressBarSchema,
  templateMapping,
} from "./wizardResourceSchema";
import { ResourceSettings } from "./wizard-pages/interfaces";
import CreateServiceCodeGeneration from "./wizard-pages/CreateServiceCodeGeneration";
import { CreateServiceNextSteps } from "./wizard-pages/CreateServiceNextSteps";
import { prepareServiceObject } from "../constants";
import * as models from "../../models";
import { AnalyticsEventNames } from "../../util/analytics-events.types";
import { useTracking } from "../../util/analytics";
import { expireCookie, getCookie } from "../../util/cookie";
import CreateServiceTemplate from "./wizard-pages/CreateServiceTemplate";
import { kebabCase } from "lodash";
import { Plugin } from "../../Plugins/hooks/usePlugins";
import { useQuery } from "@apollo/client";
import { GET_PLUGIN_VERSIONS_CATALOG } from "../../Plugins/queries/pluginsQueries";
<<<<<<< HEAD
=======
import ImgSvg from "./wizard-pages/ImgSvg";
import { REACT_APP_PLUGIN_VERSION_USE_LATEST } from "../../env";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

type Props = AppRouteProps & {
  match: match<{
    workspace: string;
    project: string;
  }>;
  location: H.Location;
};

const FLOW_ONBOARDING = "Onboarding";
const FLOW_CREATE_SERVICE = "Create Service";
<<<<<<< HEAD
=======
const pluginUseLatest = REACT_APP_PLUGIN_VERSION_USE_LATEST === "true";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

export type DefineUser = "Onboarding" | "Create Service";

const ONBOARDING_STEPS: WizardStep[] = [
  {
    index: 0,
    hideFooter: true,
    hideBackButton: true,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Welcome,
<<<<<<< HEAD
=======
    stepName: "CreateServiceWelcome",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 1,
    hideBackButton: true,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Name,
<<<<<<< HEAD
=======
    stepName: "CreateServiceName",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 2,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Git,
<<<<<<< HEAD
=======
    stepName: "CreateGithubSync",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 3,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_APISettings,
<<<<<<< HEAD
=======
    stepName: "CreateGenerationSettings",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 4,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_RepoSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceRepository",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 5,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_DBSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceDatabase",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 6,
    analyticsEventName:
      AnalyticsEventNames.ViewServiceWizardStep_EntitiesSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceTemplate",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 7,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_AuthSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceAuth",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 8,
    hideBackButton: true,
    analyticsEventName:
      AnalyticsEventNames.ViewServiceWizardStep_CodeGeneration,
<<<<<<< HEAD
=======
    stepName: "CreateServiceCodeGeneration",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 9,
    hideBackButton: true,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Finish,
<<<<<<< HEAD
=======
    stepName: "CreateServiceNextSteps",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
];

const ONBOARDING_PATTERN = ONBOARDING_STEPS.map((step) => step.index);

const CREATE_SERVICE_STEPS: WizardStep[] = [
  {
    index: 1,
    hideBackButton: true,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Name,
<<<<<<< HEAD
=======
    stepName: "CreateServiceName",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 2,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Git,
<<<<<<< HEAD
=======
    stepName: "CreateGithubSync",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 3,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_APISettings,
<<<<<<< HEAD
=======
    stepName: "CreateGenerationSettings",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 4,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_RepoSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceRepository",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 5,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_DBSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceDatabase",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 6,
    analyticsEventName:
      AnalyticsEventNames.ViewServiceWizardStep_EntitiesSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceTemplate",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 7,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_AuthSettings,
<<<<<<< HEAD
=======
    stepName: "CreateServiceAuth",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    index: 9,
    hideBackButton: true,
    analyticsEventName: AnalyticsEventNames.ViewServiceWizardStep_Finish,
<<<<<<< HEAD
  },
];
const CREATE_SERVICE_PATTERN = CREATE_SERVICE_STEPS.map((step) => step.index);

const AUTH_PLUGINS = [
  {
    displayName: "Auth-core",
    pluginId: "auth-core",
    enabled: true,
    npm: "@amplication/plugin-auth-core",
    version: "latest",
    resource: { connect: { id: "" } },
  },
  {
    displayName: "Auth-jwt",
    pluginId: "auth-jwt",
    enabled: true,
    npm: "@amplication/plugin-auth-jwt",
    version: "latest",
    resource: { connect: { id: "" } },
  },
];
=======
    stepName: "CreateServiceNextSteps",
  },
];

const PLUGIN_LOGO_BASE_URL =
  "https://raw.githubusercontent.com/amplication/plugin-catalog/master/assets/icons/";
const CREATE_SERVICE_PATTERN = CREATE_SERVICE_STEPS.map((step) => step.index);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

const signupCookie = getCookie("signup");

const CreateServiceWizard: React.FC<Props> = ({
  moduleClass,
  innerRoutes,
  ...props
}) => {
  const {
    errorCreateService,
    currentProject,
    currentWorkspace,
    loadingCreateService,
    setNewService,
    createServiceWithEntitiesResult: createResult,
  } = useContext(AppContext);

  const { trackEvent } = useTracking();
  const history = useHistory();
  const [currentBuild, setCurrentBuild] = useState<models.Build>(
    createResult?.build || null
  );

<<<<<<< HEAD
=======
  const PostgresPng = ImgSvg({
    image: `${PLUGIN_LOGO_BASE_URL}db-postgres.png`,
    imgSize: "large",
  });
  const MongoPng = ImgSvg({
    image: `${PLUGIN_LOGO_BASE_URL}db-mongo.png`,
    imgSize: "large",
  });
  const MysqlPng = ImgSvg({
    image: `${PLUGIN_LOGO_BASE_URL}db-mysql.png`,
    imgSize: "large",
  });

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const { data: pluginsVersionData } = useQuery<{
    plugins: Plugin[];
  }>(GET_PLUGIN_VERSIONS_CATALOG, {
    context: {
      clientName: "pluginApiHttpLink",
    },
    variables: {
      where: {
        deprecated: {
          equals: null,
        },
      },
    },
  });

<<<<<<< HEAD
=======
  const authCorePlugin = pluginsVersionData?.plugins.find(
    (x) => x.pluginId === "auth-core"
  );

  const authCoreVersion = pluginUseLatest
    ? authCorePlugin?.versions.find((x) => x.isLatest)
    : authCorePlugin?.versions[0];

  const authJwtPlugin = pluginsVersionData?.plugins.find(
    (x) => x.pluginId === "auth-jwt"
  );

  const authJwtVersion = pluginUseLatest
    ? authJwtPlugin?.versions.find((x) => x.isLatest)
    : authJwtPlugin?.versions[0];

  const AUTH_PLUGINS = [
    {
      displayName: "Auth-core",
      pluginId: "auth-core",
      enabled: true,
      npm: "@amplication/plugin-auth-core",
      version: "latest",
      resource: { connect: { id: "" } },
      settings: authCoreVersion?.settings || JSON.parse("{}"),
      configurations: authCoreVersion?.configurations || JSON.parse("{}"),
    },
    {
      displayName: "Auth-jwt",
      pluginId: "auth-jwt",
      enabled: true,
      npm: "@amplication/plugin-auth-jwt",
      version: "latest",
      resource: { connect: { id: "" } },
      settings: authJwtVersion?.settings || JSON.parse("{}"),
      configurations: authJwtVersion?.configurations || JSON.parse("{}"),
    },
  ];

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const defineUser: DefineUser =
    signupCookie === "1" ? FLOW_ONBOARDING : FLOW_CREATE_SERVICE;

  const wizardSteps =
    defineUser === FLOW_CREATE_SERVICE
      ? CREATE_SERVICE_STEPS
      : ONBOARDING_STEPS;

  const wizardPattern =
    defineUser === FLOW_CREATE_SERVICE
      ? CREATE_SERVICE_PATTERN
      : ONBOARDING_PATTERN;

  const errorMessage = formatError(errorCreateService);
  const setWizardProgressItems = useCallback(() => {
    const pagesMap = {};
    return wizardPattern.reduce(
      (wizardArr: WizardProgressBarInterface[], page: number) => {
        const findPage = wizardProgressBarSchema.find(
          (item: WizardProgressBarInterface) => item.activePages.includes(page)
        );
        if (!findPage) return wizardArr;

        if (pagesMap[findPage.title]) return wizardArr;

        pagesMap[findPage.title] = { ...findPage, pageIndex: page };
        wizardArr.push(findPage);

        return wizardArr;
      },
      []
    );
  }, [wizardPattern]);

  useEffect(() => {
    if (createResult?.build) setCurrentBuild(createResult?.build);
  }, [createResult?.build]);

  const handleRebuildClick = useCallback(
    (build: models.Build) => {
      setCurrentBuild(build);
    },
    [currentBuild]
  );

  const createStarterResource = useCallback(
    (data: models.ResourceCreateWithEntitiesInput, eventName: string) => {
      setNewService(data, eventName);
    },
    [setNewService]
  );

  const createResourcePlugins = useCallback(
    (
      databaseType: "postgres" | "mysql" | "mongo",
      authType: string
    ): models.PluginInstallationsCreateInput => {
      const dbPlugin = pluginsVersionData?.plugins.find(
        (x) => x.pluginId === `db-${databaseType}`
      );
<<<<<<< HEAD
      const dbLastVersion = dbPlugin?.versions[dbPlugin?.versions.length - 1];
=======

      const dbLastVersion = pluginUseLatest
        ? dbPlugin?.versions.find((x) => x.isLatest)
        : dbPlugin?.versions[0];
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

      const authCorePlugins = authType === "core" && AUTH_PLUGINS;

      const data: models.PluginInstallationsCreateInput = {
        plugins: [
          {
            displayName: databaseType,
            pluginId: `db-${databaseType}`,
            enabled: true,
            npm: `@amplication/plugin-db-${databaseType}`,
            version: "latest",
            resource: { connect: { id: "" } },
<<<<<<< HEAD
            settings: JSON.parse(dbLastVersion?.settings || "{}"),
=======
            settings: dbLastVersion?.settings || JSON.parse("{}"),
            configurations: dbLastVersion?.configurations || JSON.parse("{}"),
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          },
        ],
      };

      if (authCorePlugins) data.plugins.push(...authCorePlugins);
      return data;
    },
<<<<<<< HEAD
    [pluginsVersionData?.plugins]
=======
    [pluginsVersionData]
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  );

  const handleCloseWizard = useCallback(
    (currentPage: string) => {
<<<<<<< HEAD
=======
      trackWizardPageEvent(AnalyticsEventNames.ServiceWizardStep_CloseClick, {
        step: currentPage,
      });
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      history.push(`/${currentWorkspace.id}/${currentProject.id}`);
    },
    [currentWorkspace, currentProject]
  );

  const handleWizardProgress = useCallback(
    (
<<<<<<< HEAD
      dir: "next" | "prev",
      page: string,
      pageEventName: AnalyticsEventNames
    ) => {
      trackEvent({
        eventName:
          AnalyticsEventNames[
            dir === "next"
              ? "ServiceWizardStep_ContinueClicked"
              : "ServiceWizardStep_BackClicked"
          ],
        category: "Service Wizard",
        WizardType: defineUser,
        step: page,
      });

      trackEvent({
        eventName: pageEventName,
        category: "Service Wizard",
        WizardType: defineUser,
      });
=======
      eventName:
        | AnalyticsEventNames.ServiceWizardStep_ContinueClicked
        | AnalyticsEventNames.ServiceWizardStep_BackClicked,
      page: string,
      pageEventName: AnalyticsEventNames
    ) => {
      trackWizardPageEvent(eventName, { step: page });
      trackWizardPageEvent(pageEventName);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    },
    []
  );

  const trackWizardPageEvent = useCallback(
    (
      eventName: AnalyticsEventNames,
      additionalData?: { [key: string]: string }
    ) => {
      trackEvent({
        eventName,
        category: "Service Wizard",
        WizardType: defineUser,
        ...additionalData,
      });
    },
    []
  );

  const createResource = useCallback(
    (activeIndex: number, values: ResourceSettings) => {
      if (activeIndex < 6) return;
      const {
        serviceName,
        generateAdminUI,
        generateGraphQL,
        generateRestApi,
        gitOrganizationId,
        gitRepositoryName,
<<<<<<< HEAD
=======
        groupName,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        isOverrideGitRepository,
        authType,
        databaseType,
        templateType,
        structureType,
        baseDir,
<<<<<<< HEAD
=======
        connectToDemoRepo,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      } = values;

      const kebabCaseServiceName = kebabCase(serviceName);

      const serverDir =
        structureType === "Mono" ? `${baseDir}/${kebabCaseServiceName}` : "";
      const adminDir =
        structureType === "Mono"
          ? `${baseDir}/${kebabCaseServiceName}-admin`
          : "";
      const templateSettings = templateMapping[templateType];

      if (currentProject) {
        const plugins = createResourcePlugins(databaseType, authType);
        let currentGitRepository: models.ConnectGitRepositoryInput = null;
        if (gitRepositoryName) {
          currentGitRepository = {
            name: gitRepositoryName,
            gitOrganizationId: gitOrganizationId,
<<<<<<< HEAD
=======
            groupName,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            resourceId: "",
            isOverrideGitRepository: isOverrideGitRepository,
          };
        }
<<<<<<< HEAD
=======

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        const resource = prepareServiceObject(
          serviceName,
          currentProject?.id,
          templateSettings,
          generateAdminUI,
          generateGraphQL,
          generateRestApi,
          currentGitRepository,
          serverDir,
          adminDir,
          plugins,
          defineUser,
          structureType,
          databaseType,
<<<<<<< HEAD
          authType
          // gitOrganizationName
        );

=======
          authType,
          connectToDemoRepo
        );
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        createStarterResource(resource, templateSettings.eventName);
      }
      expireCookie("signup");
    },
<<<<<<< HEAD
    []
=======
    [pluginsVersionData]
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  );

  return (
    <Modal open fullScreen css={moduleClass}>
      <ServiceWizard
        wizardSteps={wizardSteps}
        wizardProgressBar={setWizardProgressItems()}
        wizardSchema={schemaArray}
        wizardInitialValues={ResourceInitialValues}
        wizardSubmit={createResource}
        moduleCss={moduleClass}
        submitFormPage={7}
        submitLoader={loadingCreateService}
        handleCloseWizard={handleCloseWizard}
        handleWizardProgress={handleWizardProgress}
        defineUser={defineUser}
      >
        <CreateServiceWelcome
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
        <CreateServiceName
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
        <CreateGithubSync
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
          defineUser={defineUser}
        />
        <CreateGenerationSettings
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
        <CreateServiceRepository
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
        <CreateServiceDatabase
<<<<<<< HEAD
=======
          PostgresPng={PostgresPng}
          MongoPng={MongoPng}
          MysqlPng={MysqlPng}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
        <CreateServiceTemplate
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />

        <CreateServiceAuth
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
        <CreateServiceCodeGeneration
          moduleClass="create-service-code-generation"
          resource={createResult?.resource}
          build={currentBuild}
          trackWizardPageEvent={trackWizardPageEvent}
          rebuildClick={handleRebuildClick}
        />
        <CreateServiceNextSteps
          moduleClass={moduleClass}
          trackWizardPageEvent={trackWizardPageEvent}
        />
      </ServiceWizard>
      <Snackbar open={Boolean(errorCreateService)} message={errorMessage} />
    </Modal>
  );
};

export default CreateServiceWizard;
