import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { FormGroup, Label } from '../src/index';

describe('<FormGroup />', () => {
  it('renders basic <FormGroup />', () => {
    expect(renderToStaticMarkup(<FormGroup />)).toEqual(
      '<div class="pt-form-group"></div>'
    );
  });

  it('renders basic <FormGroup /> with props', () => {
    expect(renderToStaticMarkup(<FormGroup helper="Helper text" />)).toEqual(
      '<div class="pt-form-group"><div class="pt-form-content"><div class="pt-form-helper-text">Helper text</div></div></div>'
    );

    expect(renderToStaticMarkup(<FormGroup disabled />)).toEqual(
      '<div class="pt-form-group pt-disabled"></div>'
    );

    expect(renderToStaticMarkup(<FormGroup large />)).toEqual(
      '<div class="pt-form-group pt-large"></div>'
    );

    expect(renderToStaticMarkup(<FormGroup inline />)).toEqual(
      '<div class="pt-form-group pt-inline"></div>'
    );

    expect(renderToStaticMarkup(<FormGroup intent={1} />)).toEqual(
      '<div class="pt-form-group pt-intent-success"></div>'
    );
  });

  it('renders basic <FormGroup /> with <Label />', () => {
    expect(
      renderToStaticMarkup(
        <FormGroup label={<Label text="Form Group Label" />} />
      )
    ).toEqual(
      '<div class="pt-form-group"><label class="pt-label">Form Group Label</label></div>'
    );
  });

  it('renders basic <FormGroup /> with children', () => {
    expect(
      renderToStaticMarkup(
        <FormGroup>
          <input type="text" placeholder="Enter a value" className="pt-input" />
        </FormGroup>
      )
    ).toEqual(
      '<div class="pt-form-group"><div class="pt-form-content"><input type="text" placeholder="Enter a value" class="pt-input"/></div></div>'
    );
  });
});
