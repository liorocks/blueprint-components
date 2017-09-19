export const intentStyles = (intent = -1) => {
  switch (intent) {
    case 0:
      return 'pt-intent-primary';
      break;
    case 1:
      return 'pt-intent-success';
      break;
    case 2:
      return 'pt-intent-warning';
      break;
    case 3:
      return 'pt-intent-danger';
      break;
    default:
      return '';
  }
};
