import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Callout } from '../src/index';
import { Intent, Classes } from '@blueprintjs/core';

describe('<Callout />', () => {
  it('renders basic <Callout />', () => {
    expect(renderToStaticMarkup(<Callout />)).toEqual(
      '<div class="pt-callout"></div>'
    );
  });

  it('renders basic <Callout /> with props and children', () => {
    expect(
      renderToStaticMarkup(
        <Callout intent={Intent.PRIMARY} iconName="info-sign">
          <h5>Callout Heading</h5>
          Callout Content
        </Callout>
      )
    ).toEqual(
      '<div class="pt-callout pt-intent-primary pt-icon-info-sign"><h5>Callout Heading</h5>Callout Content</div>'
    );
  });

  it('renders basic <Callout /> with `intent` prop', () => {
    expect(renderToStaticMarkup(<Callout intent={0} />)).toEqual(
      '<div class="pt-callout pt-intent-primary"></div>'
    );

    expect(renderToStaticMarkup(<Callout intent={1} />)).toEqual(
      '<div class="pt-callout pt-intent-success"></div>'
    );

    expect(renderToStaticMarkup(<Callout intent={2} />)).toEqual(
      '<div class="pt-callout pt-intent-warning"></div>'
    );

    expect(renderToStaticMarkup(<Callout intent={3} />)).toEqual(
      '<div class="pt-callout pt-intent-danger"></div>'
    );
  });
});
