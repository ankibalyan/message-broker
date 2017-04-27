import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import './sass/main.scss';
import Routes from '../imports/react-app/Routes';

Meteor.startup(() => {
  render(<Routes />, document.getElementById('render'));
});
