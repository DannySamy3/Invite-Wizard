module.exports = {
    // Other configuration options...
    module: {
      rules: [
        // Other loaders...
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/', // The directory where your fonts will be saved
              },
            },
          ],
        },
      ],
    },
  };