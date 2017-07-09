function getComponentDisplayName(ComposedComponent) {
  return ComposedComponent.displayName ||
    ComposedComponent.name ||
    'Component';
}

export default getComponentDisplayName;
