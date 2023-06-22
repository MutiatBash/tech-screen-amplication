import { CircleBadge, Icon } from "@amplication/ui/design-system";
import classNames from "classnames";
import { useCallback } from "react";
import "./LabelDescriptionSelector.scss";

export type CreateServiceCircleBadgeProps = {
  children: React.ReactNode;
};

const CreateServiceCircleBadge: React.FC<CreateServiceCircleBadgeProps> = ({
  children,
}) => {
  return (
    <CircleBadge color="#22273C" border="1px solid #373D57" size="medium">
      {children}
    </CircleBadge>
  );
};

const className = "label-description-selector";

export type LabelDescriptionSelectorProps = {
  name: string;
  label: string;
  description: string;
  subDescription?: string;
  icon?: string;
<<<<<<< HEAD
  image?: string;
=======
  image?: string | JSX.Element | React.ReactElement<any, any>;
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  imageSize?: string;
  customClassName?: string;
  onClick: (name) => void;
  currentValue: string;
  children?: React.ReactNode;
};

export const LabelDescriptionSelector: React.FC<
  LabelDescriptionSelectorProps
> = ({
  name,
  label,
  description,
  subDescription,
  icon,
  image,
  imageSize = "medium",
  customClassName,
  onClick,
  currentValue,
  children,
}) => {
  const onSelectorClick = useCallback(() => {
    onClick(name);
  }, [onClick, name]);

  return (
    <div
      onClick={onSelectorClick}
      className={classNames(className, customClassName, {
        selected: name === currentValue,
      })}
    >
      {icon && (
        <CreateServiceCircleBadge>
          <Icon icon={icon} size="medium" />
        </CreateServiceCircleBadge>
      )}

<<<<<<< HEAD
      {image && (
        <CreateServiceCircleBadge>
          <img
            className={classNames(`${className}__logo`, imageSize)}
            src={image}
            alt={""}
          />
        </CreateServiceCircleBadge>
      )}
=======
      {image && <CreateServiceCircleBadge>{image}</CreateServiceCircleBadge>}
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

      <label>{label}</label>
      {subDescription && (
        <div className={`${className}__subDescription`}>{subDescription}</div>
      )}
      {children}

      <div className={`${className}__description`}>{description}</div>
    </div>
  );
};
