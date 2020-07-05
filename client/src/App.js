import React from 'react';
import logo from './logo.svg';
import './App.css';
import MonitoringPagesList from './MonitoringPages/MonitoringPagesList/MonitoringPagesList';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Navbar, Icon, NavItem } from 'react-materialize';

function App() {
  return (
    <div className="App">
      <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  sidenav={<li>Custom node!</li>}
>
  <NavItem href="">
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
</Navbar>
      <MonitoringPagesList />
    </div>
  );
}

export default App;
