import { TextField } from "@amplication/ui/design-system";
import { gql, useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import { formatError } from "../util/error";
import React, { useCallback, useContext } from "react";
import { GlobalHotKeys } from "react-hotkeys";
import { Button, EnumButtonStyle } from "../Components/Button";
import { EnumImages, SvgThemeImage } from "../Components/SvgThemeImage";
import { AppContext } from "../context/appContext";
import * as models from "../models";
import { useTracking } from "../util/analytics";
import { AnalyticsEventNames } from "../util/analytics-events.types";
<<<<<<< HEAD
import {
  validate,
  validationErrorMessages,
} from "../util/formikValidateJsonSchema";
=======
import { validationErrorMessages } from "../util/formikValidateJsonSchema";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { CROSS_OS_CTRL_ENTER } from "../util/hotkeys";
import "./NewProject.scss";

type CreateProjectType = models.ProjectCreateInput;

const INITIAL_VALUES: CreateProjectType = {
  name: "",
};

<<<<<<< HEAD
const { AT_LEAST_TWO_CHARARCTERS } = validationErrorMessages;
=======
const { AT_LEAST_TWO_CHARARCTERS, AT_MOST_SIXTY_CHARACTERS } =
  validationErrorMessages;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

const FORM_SCHEMA = {
  required: ["name"],
  properties: {
    name: {
      type: "string",
      minLength: 2,
<<<<<<< HEAD
    },
  },
  errorMessage: {
    properties: {
      name: AT_LEAST_TWO_CHARARCTERS,
=======
      maxLength: 60,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    },
  },
};
const CLASS_NAME = "new-project";

const keyMap = {
  SUBMIT: CROSS_OS_CTRL_ENTER,
};

type DType = {
  createProject: models.Project;
};

type Props = {
  onProjectCreated: () => void;
};

const NewProject = ({ onProjectCreated }: Props) => {
  const { onNewProjectCompleted } = useContext(AppContext);
  const { trackEvent } = useTracking();
  const [createProject, { loading }] = useMutation<DType>(CREATE_PROJECT, {
    onCompleted: (data) => {
      trackEvent({
        eventName: AnalyticsEventNames.ProjectCreate,
        projectName: data.createProject.name,
      });
      onProjectCreated();
      onNewProjectCompleted(data.createProject);
    },
  });

  const handleSubmit = useCallback(
    (data: CreateProjectType, { setErrors }) => {
      createProject({
        variables: {
          data,
        },
      }).catch((err) => setErrors({ name: formatError(err) }));
    },
    [createProject]
  );

  return (
    <div className={CLASS_NAME}>
      <SvgThemeImage image={EnumImages.Entities} />
      <div className={`${CLASS_NAME}__instructions`}>
        Give your new project a descriptive name
      </div>
      <Formik
        initialValues={INITIAL_VALUES}
<<<<<<< HEAD
        validate={(values: CreateProjectType) => validate(values, FORM_SCHEMA)}
=======
        validate={(values: CreateProjectType) => {
          const errors: { [key: string]: string } = {};
          if (values.name.length < FORM_SCHEMA.properties.name.minLength) {
            errors.name = AT_LEAST_TWO_CHARARCTERS;
          }
          if (values.name.length > FORM_SCHEMA.properties.name.maxLength) {
            errors.name = AT_MOST_SIXTY_CHARACTERS;
          }
          return errors;
        }}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        onSubmit={handleSubmit}
        validateOnMount
      >
        {(formik) => {
          const handlers = {
            SUBMIT: formik.submitForm,
          };
          return (
            <Form>
              <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
              <TextField
                name="name"
                label="New Project Name"
                disabled={loading}
                autoFocus
                hideLabel
                placeholder="Type New Project Name"
                autoComplete="off"
              />
              <Button
                className={CLASS_NAME}
                type="submit"
                buttonStyle={EnumButtonStyle.Primary}
                disabled={!formik.isValid || loading}
              >
                Create new project
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewProject;

const CREATE_PROJECT = gql`
  mutation createProject($data: ProjectCreateInput!) {
    createProject(data: $data) {
      id
      name
    }
  }
`;
