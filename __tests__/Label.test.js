import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Label } from '../src/index';

describe('<Label />', () => {
  it('renders basic <Label />', () => {
    expect(renderToStaticMarkup(<Label />)).toEqual(
      '<label class="pt-label"></label>'
    );
  });

  it('renders basic <Label /> with props', () => {
    expect(renderToStaticMarkup(<Label text="Label A" inline />)).toEqual(
      '<label class="pt-label pt-inline">Label A</label>'
    );
  });

  it('renders disabled <Label /> with muted', () => {
    expect(
      renderToStaticMarkup(<Label text="Label A" disabled muted="(required)" />)
    ).toEqual(
      '<label class="pt-label pt-disabled">Label A<span class="pt-text-muted">(required)</span></label>'
    );
  });

  it('renders <Label /> with basic input', () => {
    expect(
      renderToStaticMarkup(
        <Label text="Label A">
          <input disabled className="pt-input" />
        </Label>
      )
    ).toEqual(
      '<label class="pt-label">Label A<input disabled="" class="pt-input"/></label>'
    );
  });
});
