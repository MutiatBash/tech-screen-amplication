<<<<<<< HEAD
import React from "react";
=======
import React, { useCallback } from "react";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import { Link } from "react-router-dom";

import "./LimitationNotification.scss";

const LIMIT_CLASS_NAME = "limitation-notification";
const UPGRADE_LINK_CLASS_NAME = "upgrade-link";
<<<<<<< HEAD

export type Props = {
  description: string;
=======
const CONTACT_US_LINK_CLASS_NAME = "contact-us-link";

export type Props = {
  description: string;
} & LinkProps;

export type LinkProps = {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  link: string;
  handleClick: () => void;
};

<<<<<<< HEAD
=======
export const ContactUsLinkForEnterprise = ({
  link,
  handleClick,
}: LinkProps) => {
  const handleContactUsLinkClick = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      handleClick();
    },
    [handleClick]
  );

  return (
    <a
      href={link}
      onClick={handleContactUsLinkClick}
      className={CONTACT_US_LINK_CLASS_NAME}
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact Us Now
    </a>
  );
};

export const UpgradeLink = ({ link, handleClick }: LinkProps) => {
  return (
    <Link
      onClick={handleClick}
      className={UPGRADE_LINK_CLASS_NAME}
      to={{
        pathname: link,
        state: { from: { pathname: window.location.pathname } },
      }}
    >
      Upgrade now
    </Link>
  );
};

>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
export const LimitationNotification = ({
  description,
  link,
  handleClick,
}: Props) => {
  return (
    <div className={LIMIT_CLASS_NAME}>
      <span>{description}</span>
<<<<<<< HEAD
      <Link
        onClick={handleClick}
        className={UPGRADE_LINK_CLASS_NAME}
        to={{
          pathname: link,
          state: { from: { pathname: window.location.pathname } },
        }}
      >
        Upgrade now
      </Link>
=======
      <UpgradeLink link={link} handleClick={handleClick} />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    </div>
  );
};
