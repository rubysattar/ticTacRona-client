//NEW CONTENT HERE 

## My user stories
As a player, I want to see the rules displayed so that I know how to play.
As a player, I want several ways to win so that I can strategize.
As a player, I want to know if I win or lose so that I get closure/know the game is over.
As a player, I want to pick whether I am 'x' or 'o' (or an image) so that I can make sense of the gameplay.

## My wireframes
[First wireframe](https://imgur.com/tH0a56P)
[Second wireframe](https://imgur.com/bRA88R0)

## My planning, development story, problem-solving strategies
[informal planning outline](https://imgur.com/FHhiRQS)
Outlining my plan was the first step for me in the development process. I referenced to the project requirements and example tic-tac-toe games available on google searches to inform my outline. When confronted with problems, I read into the console's error messages to locate bugs in my code. This was in tandem with inserting console logs in my code where I suspected errors could be present. I also used curl scripts to rule out whether bugs were front-end or back-end related. 

## My unsolved mysteries
Right now, I'm having a hard time thinking of how to connect my game board cells to functions that will collectively contribute to a game update stored in the game api (connected to authenticated user data).

## My technologies/languages
jquery, json, bootstrap, sass, webpack, a pre-built API

//NEW CONTENT ENDS HERE
## Structure

### Scripts

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Config

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

### Styles

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch


## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
