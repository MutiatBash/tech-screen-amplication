import { Snackbar } from "@amplication/ui/design-system";
<<<<<<< HEAD
import { keyBy } from "lodash";
import React, { useCallback, useMemo } from "react";
import { match } from "react-router-dom";
=======
import { useQuery } from "@apollo/client";
import { keyBy } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { match } from "react-router-dom";
import { GET_ENTITIES } from "../Entity/EntityList";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import * as models from "../models";
import { AppRouteProps } from "../routes/routesUtil";
import { formatError } from "../util/error";
import usePlugins, { Plugin, PluginVersion } from "./hooks/usePlugins";
<<<<<<< HEAD
=======
import PluginInstallConfirmationDialog from "./PluginInstallConfirmationDialog";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import PluginsCatalogItem from "./PluginsCatalogItem";

type Props = AppRouteProps & {
  match: match<{
    resource: string;
  }>;
};

<<<<<<< HEAD
const PluginsCatalog: React.FC<Props> = ({ match }: Props) => {
  const { resource } = match.params;
=======
type TData = {
  entities: models.Entity[];
};
export const DIALOG_CLASS_NAME = "limitation-dialog";
export const USER_ENTITY_NAME = "user";
export const REQUIRE_AUTH_ENTITY = "requireAuthenticationEntity";

const PluginsCatalog: React.FC<Props> = ({ match }: Props) => {
  const { resource } = match.params;
  const [confirmInstall, setConfirmInstall] = useState<boolean>(false);

  const { data: entities } = useQuery<TData>(GET_ENTITIES, {
    variables: {
      id: resource,
    },
  });

  const userEntity = useMemo(() => {
    return entities.entities?.find(
      (entity) => entity.name.toLowerCase() === USER_ENTITY_NAME
    );
  }, [entities]);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  const {
    pluginInstallations,
    pluginCatalog,
    createPluginInstallation,
    createError,
    updatePluginInstallation,
    updateError,
    // onPluginDropped,
  } = usePlugins(resource);

  const handleInstall = useCallback(
    (plugin: Plugin, pluginVersion: PluginVersion) => {
      const { name, pluginId, npm } = plugin;
<<<<<<< HEAD
      const { version, settings } = pluginVersion;
=======
      const { version, settings, configurations } = pluginVersion;
      const requireAuthenticationEntity = configurations
        ? configurations[REQUIRE_AUTH_ENTITY]
        : null;

      if (requireAuthenticationEntity === "true" && !userEntity) {
        setConfirmInstall(true);
        return;
      }
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

      createPluginInstallation({
        variables: {
          data: {
            displayName: name,
            pluginId,
            enabled: true,
            npm,
            version,
<<<<<<< HEAD
            settings: JSON.parse(settings),
=======
            settings: settings,
            configurations: configurations,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            resource: { connect: { id: resource } },
          },
        },
      }).catch(console.error);
    },
<<<<<<< HEAD
    [createPluginInstallation, resource]
  );

  const onEnableStateChange = useCallback(
    (pluginInstallation: models.PluginInstallation) => {
      const { enabled, version, settings, id } = pluginInstallation;
=======
    [createPluginInstallation, setConfirmInstall, resource, userEntity]
  );

  const handleDismissInstall = useCallback(() => {
    setConfirmInstall(false);
  }, [setConfirmInstall]);

  const onEnableStateChange = useCallback(
    (pluginInstallation: models.PluginInstallation) => {
      const { enabled, version, settings, configurations, id } =
        pluginInstallation;

      const requireAuthenticationEntity = configurations
        ? configurations[REQUIRE_AUTH_ENTITY]
        : null;
      if (requireAuthenticationEntity === "true" && !userEntity && !enabled) {
        setConfirmInstall(true);
        return;
      }
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

      updatePluginInstallation({
        variables: {
          data: {
            enabled: !enabled,
            version,
            settings,
<<<<<<< HEAD
=======
            configurations,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          },
          where: {
            id: id,
          },
        },
      }).catch(console.error);
    },
    [updatePluginInstallation]
  );

  const installedPlugins = useMemo(() => {
    if (!pluginInstallations) return {};

    return keyBy(pluginInstallations, (plugin) => plugin && plugin.pluginId);
  }, [pluginInstallations]);

  const errorMessage = formatError(createError) || formatError(updateError);

  return (
    <div>
<<<<<<< HEAD
=======
      <PluginInstallConfirmationDialog
        confirmInstall={confirmInstall}
        handleDismissInstall={handleDismissInstall}
      ></PluginInstallConfirmationDialog>
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      {Object.entries(pluginCatalog).map(([pluginId, plugin]) => (
        <PluginsCatalogItem
          key={pluginId}
          plugin={plugin}
          pluginInstallation={installedPlugins[plugin.pluginId]}
          onInstall={handleInstall}
          onEnableStateChange={onEnableStateChange}
        />
      ))}
      <Snackbar
        open={Boolean(updateError || createError)}
        message={errorMessage}
      />{" "}
    </div>
  );
};

export default PluginsCatalog;
