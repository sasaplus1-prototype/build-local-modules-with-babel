module.exports = function(api) {
  api.cache(false);

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            node: 'current'
          },
          useBuiltIns: 'usage'
        }
      ]
    ]
  };
};
