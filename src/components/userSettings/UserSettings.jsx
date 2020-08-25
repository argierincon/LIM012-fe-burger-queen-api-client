import React from 'react';
import './UserSettings.sass';

import userSettingsIcon from '../../assets/img/user-settings.png';

const UserSettings = () => {
  return (
    <img
      className="layout__user-settings"
      src={userSettingsIcon}
      alt="user setting icon"
    />
  );
};

export default UserSettings;
