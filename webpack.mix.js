let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
var theme = 'invalnu';
var url = 'https://invalnu.test';

mix.setPublicPath('themes/'+theme+'/assets/');
mix.sass('./themes/'+theme+'/assets/src/scss/theme.scss', 'dist/theme.css');

mix.scripts([
    './themes/'+theme+'/assets/src/js/file.js'
], 'themes/'+theme+'/assets/dist/app.js');

mix.browserSync({
    proxy: url,
    files: [
        'themes/'+theme+'/assets/dist/**/*',
        'themes/'+theme+'/layouts/**/*',
        'themes/'+theme+'/pages/**/*',
        'themes/'+theme+'/partials/**/*',
        'plugins/rebel59/**/*'
    ]
});


// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.configa.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
mix.options({
  uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
});
