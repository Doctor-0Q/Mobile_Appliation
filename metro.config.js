const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      assetPlugins: defaultConfig.transformer.assetPlugins,
    },
    resolver: {
      ...defaultConfig.resolver,
      sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx', 'json', 'svg', 'png'],
    },
  };
})();
