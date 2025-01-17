import {
  EnumButtonStyle,
  SelectMenu,
  SelectMenuList,
  SelectMenuModal,
} from "@amplication/ui/design-system";
import React from "react";
import * as models from "../models";
import "./CreateResourceButton.scss";
import CreateResourceButtonItem from "./CreateResourceButtonItem";

const CLASS_NAME = "create-resource-button";

export type CreateResourceButtonItemType = {
  type: models.EnumResourceType;
  label: string;
  route: string;
  info: string;
};

const ITEMS: CreateResourceButtonItemType[] = [
  {
    type: models.EnumResourceType.Service,
    label: "Service",
    route: "create-resource",
<<<<<<< HEAD
    info: "Create a service with your choice of API type (GraphQL/REST), database, and authentication options",
=======
    info: "Create a service with your choice of APIs, database, and authentication",
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  },
  {
    type: models.EnumResourceType.MessageBroker,
    label: "Message Broker",
    route: "create-broker",
    info: "Create a message broker to facilitate communication between services",
  },
];

const CreateResourceButton = () => {
  return (
    <div className={CLASS_NAME}>
      <SelectMenu
        title="Add Resource"
        buttonStyle={EnumButtonStyle.Primary}
        icon="plus"
      >
        <SelectMenuModal align="right">
          <SelectMenuList>
            {ITEMS.map((item, index) => (
              <CreateResourceButtonItem item={item} key={index} />
            ))}
          </SelectMenuList>
        </SelectMenuModal>
      </SelectMenu>
    </div>
  );
};

export default CreateResourceButton;
