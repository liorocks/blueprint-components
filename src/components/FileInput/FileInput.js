import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FileInput extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    placeholder: this.props.placeholder,
  };

  static propTypes = {
    /**
     * `accept` attribute for `input="file"`.
     */
    accept: PropTypes.string,

    /**
     * Additional CSS classes.
     */
    className: PropTypes.string,

    /**
     * Make file input `disabled`.
     */
    disabled: PropTypes.bool,

    /**
     * Take up full width of parent element.
     */
    fill: PropTypes.bool,

    /**
     * Use large file input.
     */
    large: PropTypes.bool,

    /**
     * Accept multiple files.
     */
    multiple: PropTypes.bool,

    /**
     * Callback used when user selects a file.
     * @param {array} files - array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.
     * @param {SyntheticEvent} e
     */
    onChange: PropTypes.func,

    /**
     * File input placeholder.
     */
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    accept: '*',
    className: '',
    disabled: false,
    fill: false,
    large: false,
    multiple: false,
    onChange: (files, e) => {},
    placeholder: 'Choose file...',
  };

  handleChange = e => {
    const files = [...e.target.files];
    const fileNames = files.map(f => f.name);
    this.setState({
      placeholder: fileNames.length
        ? fileNames.join(', ')
        : this.props.placeholder,
    });
    this.props.onChange(files, e);
  };

  render() {
    const { accept, className, disabled, fill, large, multiple } = this.props;
    return (
      <label
        className={classnames(
          'pt-file-upload',
          { 'pt-fill': fill },
          { 'pt-large': large },
          className
        )}
      >
        <input
          multiple={multiple}
          accept={accept}
          type="file"
          disabled={disabled}
          onChange={this.handleChange}
        />
        <span className="pt-file-upload-input">{this.state.placeholder}</span>
      </label>
    );
  }
}

export default FileInput;
