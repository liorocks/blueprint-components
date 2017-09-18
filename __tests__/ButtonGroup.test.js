import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ButtonGroup } from '../src/index';
import { Button } from '@blueprintjs/core';

describe('<ButtonGroup />', () => {
  it('renders basic <ButtonGroup />', () => {
    expect(renderToStaticMarkup(<ButtonGroup />)).toEqual(
      '<div class="pt-button-group"></div>'
    );
  });

  it('renders basic <ButtonGroup /> with children', () => {
    expect(
      renderToStaticMarkup(
        <ButtonGroup>
          <Button text="home" />
        </ButtonGroup>
      )
    ).toEqual(
      '<div class="pt-button-group"><button type="button" class="pt-button"><span>home</span></button></div>'
    );
  });

  it('renders basic <ButtonGroup /> with props', () => {
    expect(renderToStaticMarkup(<ButtonGroup large />)).toEqual(
      '<div class="pt-button-group pt-large"></div>'
    );

    expect(renderToStaticMarkup(<ButtonGroup minimal />)).toEqual(
      '<div class="pt-button-group pt-minimal"></div>'
    );

    expect(renderToStaticMarkup(<ButtonGroup fill />)).toEqual(
      '<div class="pt-button-group pt-fill"></div>'
    );

    expect(renderToStaticMarkup(<ButtonGroup vertical />)).toEqual(
      '<div class="pt-button-group pt-vertical"></div>'
    );

    expect(renderToStaticMarkup(<ButtonGroup align="left" />)).toEqual(
      '<div class="pt-button-group pt-align-left"></div>'
    );
  });
});
