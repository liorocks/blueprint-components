import { intentStyles } from '../src/utils';

describe('Utilities', () => {
  it('return correct intent classes by number', () => {
    expect(intentStyles(-100)).toBe('');
    expect(intentStyles()).toBe('');
    expect(intentStyles(0)).toBe('pt-intent-primary');
    expect(intentStyles(1)).toBe('pt-intent-success');
    expect(intentStyles(2)).toBe('pt-intent-warning');
    expect(intentStyles(3)).toBe('pt-intent-danger');
  });
});
