import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { FileInput } from '../src/index';

describe('<FileInput />', () => {
  it('renders basic <FileInput />', () => {
    expect(renderToStaticMarkup(<FileInput />)).toEqual(
      '<label class="pt-file-upload"><input type="file" accept="*"/><span class="pt-file-upload-input">Choose file...</span></label>'
    );
  });

  it('renders basic <FileInput /> with props', () => {
    expect(
      renderToStaticMarkup(<FileInput className="extra-css-class" />)
    ).toEqual(
      '<label class="pt-file-upload extra-css-class"><input type="file" accept="*"/><span class="pt-file-upload-input">Choose file...</span></label>'
    );

    expect(renderToStaticMarkup(<FileInput large />)).toEqual(
      '<label class="pt-file-upload pt-large"><input type="file" accept="*"/><span class="pt-file-upload-input">Choose file...</span></label>'
    );

    expect(renderToStaticMarkup(<FileInput fill />)).toEqual(
      '<label class="pt-file-upload pt-fill"><input type="file" accept="*"/><span class="pt-file-upload-input">Choose file...</span></label>'
    );

    expect(renderToStaticMarkup(<FileInput disabled />)).toEqual(
      '<label class="pt-file-upload"><input type="file" accept="*" disabled=""/><span class="pt-file-upload-input">Choose file...</span></label>'
    );

    expect(renderToStaticMarkup(<FileInput multiple />)).toEqual(
      '<label class="pt-file-upload"><input type="file" multiple="" accept="*"/><span class="pt-file-upload-input">Choose file...</span></label>'
    );

    expect(renderToStaticMarkup(<FileInput accept="image/png" />)).toEqual(
      '<label class="pt-file-upload"><input type="file" accept="image/png"/><span class="pt-file-upload-input">Choose file...</span></label>'
    );

    expect(
      renderToStaticMarkup(<FileInput placeholder="Select file(s)..." />)
    ).toEqual(
      '<label class="pt-file-upload"><input type="file" accept="*"/><span class="pt-file-upload-input">Select file(s)...</span></label>'
    );
  });
});
