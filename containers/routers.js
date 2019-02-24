import React from 'react';

import { AppRegistry } from 'react-vr';
import { MemoryRouter, Redirect, Route, Switch } from 'react-router';
import index from '.index';
import criminal from '.criminal';
import cases from '.cases';
import vr  from '.vr';
import case from '.case';


export default class WelcomeToVR extends React.Component {
  render() {
    return (
        <MemoryRouter>
            <Route exact path={'/vr/'} component={index} />
            <Route exact path={'/vr/criminal.html'} component={criminal} />
            <Route exact path={'/vr/cases.html'} component={cases} />
            <Route exact path={'/vr/case.html'} component={case} />
            <Route exact path={'/vr/vr.html'} component={vr} />
           
         </MemoryRouter>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);