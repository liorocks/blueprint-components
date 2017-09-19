import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ControlGroup } from '../src/index';

describe('<ControlGroup />', () => {
  it('renders basic <ControlGroup />', () => {
    expect(renderToStaticMarkup(<ControlGroup />)).toEqual(
      '<div class="pt-control-group"></div>'
    );
  });

  it('renders basic <ControlGroup /> with props', () => {
    expect(renderToStaticMarkup(<ControlGroup fill />)).toEqual(
      '<div class="pt-control-group pt-fill"></div>'
    );

    expect(renderToStaticMarkup(<ControlGroup vertical />)).toEqual(
      '<div class="pt-control-group pt-vertical"></div>'
    );

    expect(
      renderToStaticMarkup(<ControlGroup fill className="css-extra-class" />)
    ).toEqual('<div class="pt-control-group pt-fill css-extra-class"></div>');
  });

  it('renders basic <ControlGroup /> with children', () => {
    expect(
      renderToStaticMarkup(<ControlGroup>Children Content</ControlGroup>)
    ).toEqual('<div class="pt-control-group">Children Content</div>');
  });
});
