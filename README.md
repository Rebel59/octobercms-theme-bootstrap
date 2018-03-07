# OctoberCMS Theme Bootstrap
This little project is a bootstrap for all your brand new themes. It sets the
groundworks for you, but does not limit you in any way to pursue your owns
dreams.

## Setting it up
This repo comes with a `package.json` and a `webpack.mix.js`. The way this is
currently structured is that you place these files in the *root* of your project.
To start, run the following command:

    $ npm install

This will install webpack and laravel mix. These will handle all file bundling,
autoprefixing and minification.

Inside the `webpack.mix.js` you then define the required variables
`theme` - The (directory) name of your theme.
`url` - The (local) URL that your webapp is located at. Used for the localhost proxy.

### `npm` commands

    npm run watch

This starts up the development server and servers your content on `localhost:3000`.
You can now start working on your theme. Everytime you save one of your files,
browserSync takes care of reloading the assets on your website.

    npm run production

This compiles all files, and prepares them for production.

    npm run dev

This compiles all files, without any minification.

You will also find some commented out script files. If you want to bundle your
scripts you can add them in this array. They will be bundled and minified to
`dist/app.js`.



## How is it structured
### /assets/src
Here you would put all source files of your assets. For example your `scss` and
 `js` files that are bundled to files you use in the application.
 The `scss` directory has some predefined structure, but of course you can just
 throw that overboard and use your own structure.

#### scss
The Mix file looks at one `scss` file: `theme.scss` which acts as a include for
all other files. The current bootstrap includes the following files but again,
you can just mix this up in anyway you like.
- `vendor/normalize.scss`
- `vendor/bootstrap-grid.scss`
- `variables.scss`
- `mixins.scss`
- `components/typography.scss`
- `components/buttons.scss`

#### js
Currently there is no standard structure for the `js` files. The Mix files
contains a `scripts` method in which you would include all `js` files. This bundles
and minifies all the `js` files down to one single `app.js`.

### /assets/dist
This directory contains all bundled files that you would use in your webapp. In
OctoberCMS, you would for example include these files in the following way:

    <html>
      <head>
        <link type="stylesheet" src="{{ 'assets/dist/theme.css'|theme}}" />
      </head>
      <body>
        {% page %}

        <script src="{{[]
          '@jquery',
          '@framework',
          '@framework.extras'
          ]}}"></script>
        <script src="{{'assets/dist/app.js'|theme}}"></script>
      </body>
    </html>
