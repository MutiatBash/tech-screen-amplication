import React, { useMemo } from "react";
import { Formik, FormikErrors } from "formik";
import { omit, isEmpty } from "lodash";
import { getSchemaForDataType } from "@amplication/code-gen-types";
<<<<<<< HEAD
import { ToggleField } from "@amplication/ui/design-system";
=======
import { TextField, ToggleField } from "@amplication/ui/design-system";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import * as models from "../models";
import { DisplayNameField } from "../Components/DisplayNameField";
import { Form } from "../Components/Form";
import NameField from "../Components/NameField";
import OptionalDescriptionField from "../Components/OptionalDescriptionField";
import FormikAutoSave from "../util/formikAutoSave";
import { validate } from "../util/formikValidateJsonSchema";
import { SYSTEM_DATA_TYPES } from "./constants";
import DataTypeSelectField from "./DataTypeSelectField";
import { SchemaFields } from "./SchemaFields";

export type Values = {
  id: string; //the id field is required in the form context to be used in "DataTypeSelectField"
  name: string;
  displayName: string;
  dataType: models.EnumDataType;
  unique: boolean;
  required: boolean;
  searchable: boolean;
<<<<<<< HEAD
=======
  customAttributes: string | null;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  description: string | null;
  permanentId?: string | null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  properties: {
    relatedEntityId?: string;
    allowMultipleSelection?: string;
  };
};

type Props = {
  onSubmit: (values: Values) => void;
  defaultValues?: Partial<models.EntityField>;
  resourceId: string;
  entity: models.Entity;
  isSystemDataType?: boolean;
};

const FORM_SCHEMA = {
  required: ["name", "displayName"],
  properties: {
    displayName: {
      type: "string",
      minLength: 1,
    },
    name: {
      type: "string",
      minLength: 1,
    },
  },
};

const NON_INPUT_GRAPHQL_PROPERTIES = ["createdAt", "updatedAt", "__typename"];

export const INITIAL_VALUES: Values = {
  id: "",
  name: "",
  displayName: "",
  dataType: models.EnumDataType.SingleLineText,
  unique: false,
  required: false,
  searchable: false,
<<<<<<< HEAD
=======
  customAttributes: null,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  description: "",
  properties: {},
};

const EntityFieldForm = ({
  onSubmit,
  defaultValues = {},
  resourceId,
  entity,
  isSystemDataType,
}: Props) => {
  const initialValues = useMemo(() => {
    const sanitizedDefaultValues = omit(
      defaultValues,
      NON_INPUT_GRAPHQL_PROPERTIES
    );
    return {
      ...INITIAL_VALUES,
      ...sanitizedDefaultValues,
    };
  }, [defaultValues]);

<<<<<<< HEAD
  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

=======
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  return (
    <Formik
      initialValues={initialValues}
      validate={(values: Values) => {
        const errors: FormikErrors<Values> = validate<Values>(
          values,
          FORM_SCHEMA
        );
        //validate the field dynamic properties
        const schema = getSchemaForDataType(values.dataType);
        // eslint-disable-next-line @typescript-eslint/ban-types
        const propertiesError = validate<Object>(values.properties, schema);

        // Ignore related field ID error
        if ("relatedFieldId" in propertiesError) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          delete propertiesError.relatedFieldId;
        }

        if (!isEmpty(propertiesError)) {
          errors.properties = propertiesError as any; // TODO: remove eslint rules and fix this
        }

        return errors;
      }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {(formik) => {
        const schema = getSchemaForDataType(formik.values.dataType);

        return (
<<<<<<< HEAD
          <Form childrenAsBlocks onKeyDown={onKeyDown}>
=======
          <Form childrenAsBlocks>
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
            <FormikAutoSave debounceMS={1000} />

            <DisplayNameField
              name="displayName"
              label="Display Name"
              disabled={isSystemDataType}
              required
            />
            <NameField name="name" disabled={isSystemDataType} required />
            <OptionalDescriptionField
              name="description"
              label="Description"
              disabled={isSystemDataType}
            />

            <div>
              <ToggleField
                name="unique"
                label="Unique Field"
                disabled={isSystemDataType}
              />
            </div>
            <div>
              <ToggleField
                name="required"
                label="Required Field"
                disabled={isSystemDataType}
              />
            </div>
            <div>
              <ToggleField
                name="searchable"
                label="Searchable"
                disabled={isSystemDataType}
              />
            </div>
            {!SYSTEM_DATA_TYPES.has(formik.values.dataType) && (
              <DataTypeSelectField
                label="Data Type"
                disabled={isSystemDataType}
              />
            )}

            <SchemaFields
              schema={schema}
              resourceId={resourceId}
              entity={entity}
            />
<<<<<<< HEAD
=======

            <TextField
              autoComplete="off"
              disabled={isSystemDataType}
              placeholder='Add custom attributes to fields using the format @attribute([parameters]) or @attribute. For example: @map(name: "fieldName") @unique @default(value)'
              textarea
              rows={3}
              name="customAttributes"
              label="Custom Attributes"
            />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
          </Form>
        );
      }}
    </Formik>
  );
};

export default EntityFieldForm;
