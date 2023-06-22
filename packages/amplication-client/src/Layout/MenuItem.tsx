import React, { ReactNode } from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import classNames from "classnames";
import { Button, EnumButtonStyle } from "../Components/Button";

import { Icon, Tooltip } from "@amplication/ui/design-system";
import "./MenuItem.scss";

type Props = {
  /** Optional URL to navigate to on click  */
  to?: string;
  /** Text to be displayed when the menu is expanded, and in a tooltip */
  title: string;
  /** Optional text to be displayed in the tooltip instead of the title */
  overrideTooltip?: string;
  /** the name of the icon to display, ignored when the component has children */
  icon?: string;
  /** Optional class name to be added to the element */
  className?: string;
  hideTooltip?: boolean;
  disableHover?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

const NON_URL = "non-url";
const DIRECTION = "e";
const ICON_SIZE = "medium";

/**
 *
 * @title is for the aria-label of the badge
 */
const MenuItem = ({
  to,
  title,
  overrideTooltip,
  icon,
  className,
  children,
  hideTooltip = false,
  disableHover = false,
  onClick,
}: Props) => {
  const match = useRouteMatch(to || NON_URL);

<<<<<<< HEAD
=======
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    setShowTooltip(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setShowTooltip(false);
  }, []);

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  const content = (
    <Button
      buttonStyle={EnumButtonStyle.Text}
      as={to ? NavLink : Button}
      onClick={onClick}
      to={to}
    >
      {children ? children : <Icon icon={icon || ""} size={ICON_SIZE} />}
    </Button>
  );

  return (
    <div
      className={classNames("amp-menu-item", className, {
        "amp-menu-item--active": match !== null,
        "amp-menu-item--no-hover": disableHover,
      })}
<<<<<<< HEAD
    >
      {hideTooltip ? (
=======
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hideTooltip || !showTooltip ? (
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
        content
      ) : (
        <Tooltip
          className="amp-menu-item__tooltip"
          aria-label={overrideTooltip || title}
          direction={DIRECTION}
          noDelay
        >
          {content}
        </Tooltip>
      )}
    </div>
  );
};

export default MenuItem;
