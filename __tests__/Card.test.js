import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Card } from '../src/index';
import { Intent, Classes } from '@blueprintjs/core';

describe('<Card />', () => {
  it('renders basic <Card />', () => {
    expect(renderToStaticMarkup(<Card />)).toEqual(
      '<div class="pt-card"></div>'
    );
  });

  it('renders basic <Card /> with props and children', () => {
    expect(
      renderToStaticMarkup(
        <Card interactive>
          <h5>Card Heading</h5>
          <p>Card Content</p>
        </Card>
      )
    ).toEqual(
      '<div class="pt-card pt-interactive"><h5>Card Heading</h5><p>Card Content</p></div>'
    );
  });

  it('renders basic <Card /> with `elevation` prop', () => {
    expect(renderToStaticMarkup(<Card elevation={0} />)).toEqual(
      '<div class="pt-card pt-elevation-0"></div>'
    );

    expect(renderToStaticMarkup(<Card elevation={1} />)).toEqual(
      '<div class="pt-card pt-elevation-1"></div>'
    );

    expect(renderToStaticMarkup(<Card elevation={2} />)).toEqual(
      '<div class="pt-card pt-elevation-2"></div>'
    );

    expect(renderToStaticMarkup(<Card elevation={3} />)).toEqual(
      '<div class="pt-card pt-elevation-3"></div>'
    );

    expect(renderToStaticMarkup(<Card elevation={4} />)).toEqual(
      '<div class="pt-card pt-elevation-4"></div>'
    );
  });
});
