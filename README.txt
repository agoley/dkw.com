DEMO APPLICATION

1. The dependencies are not committed to the repo to allow for a smaller project size, they are help out of the commit by having them in the gitignore file.
2. When the website is initially cloned to local environment Follow these Steps
    a. Run to following commands
        i. npm install
        ii. bower install
        iii. gulp build


*** GULP COMMANDS ***
The gulp command is configured based on what is in the ../gulpfile.js so when you add a library through npm or bower that is needed for the code please add the path of the js, css, or font to the respective location in the config object.

Any files created in the following folders do not need to be added to the gulp file because I have the content of those folders being bundled in the gulp structure:
    - app/assets/less
    - app/components
    - app/config
    - app/directives
    - app/services

*** COMMANDS ***

gulp
      - This is the default command and will run all of the file builds (See 'gulp build' command) and finally the watch command that will build all of the files set in the config any time there is a change to one of the files.

gulp build
      - Will bundle of all of the files set in the config separated based on:
          -- 'lib.min.js'     : library JS files
          -- 'bundle.js'      : app JS files
          -- 'lib.min.css'    : library css files
          -- 'styles.min.css' : app css files
          -- '/fonts'         : all fonts directly streamlined

gulp watch
      - Will watch all of the files set in the config and run a build ('See gulp build command') any time there is a change

gulp app-js
      - Will bundle all app js files

gulp app-less
      - Will bundle all of the app less files

gulp lib-js
      - Will bundle all of the library js files

gulp lib-css
      - Will bundle all of the library css files

gulp lib-fonts
      - Will pipe all of the library font files
