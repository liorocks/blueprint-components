import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '../src/index';

describe('<Navbar />', () => {
  it('renders basic <Navbar />', () => {
    expect(renderToStaticMarkup(<Navbar />)).toEqual(
      '<nav class="pt-navbar"></nav>'
    );
  });

  it('renders basic <Navbar /> with props and children', () => {
    expect(
      renderToStaticMarkup(
        <Navbar fixed dark>
          <NavbarGroup>
            <NavbarDivider />
          </NavbarGroup>
        </Navbar>
      )
    ).toEqual(
      '<nav class="pt-navbar pt-dark pt-fixed-top"><div class="pt-navbar-group pt-align-left"><span class="pt-navbar-divider"></span></div></nav>'
    );
  });

  it('renders basic <NavbarDivider />', () => {
    expect(renderToStaticMarkup(<NavbarDivider />)).toEqual(
      '<span class="pt-navbar-divider"></span>'
    );
  });

  it('renders basic <NavbarGroup />', () => {
    expect(renderToStaticMarkup(<NavbarGroup />)).toEqual(
      '<div class="pt-navbar-group pt-align-left"></div>'
    );
  });

  it('renders basic <NavbarGroup /> with props and children', () => {
    expect(
      renderToStaticMarkup(
        <NavbarGroup align="right">
          <NavbarDivider />
        </NavbarGroup>
      )
    ).toEqual(
      '<div class="pt-navbar-group pt-align-right"><span class="pt-navbar-divider"></span></div>'
    );
  });

  it('renders basic <NavbarHeading />', () => {
    expect(renderToStaticMarkup(<NavbarHeading />)).toEqual(
      '<div class="pt-navbar-heading"></div>'
    );
  });

  it('renders basic <NavbarHeading /> with children', () => {
    expect(
      renderToStaticMarkup(<NavbarHeading>Blueprint Components</NavbarHeading>)
    ).toEqual('<div class="pt-navbar-heading">Blueprint Components</div>');
  });
});
