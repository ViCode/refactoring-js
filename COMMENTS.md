# Comments & Advice

## Show a better version of the pages List, View and Cart

### Comments
- Added css to display the footer in both List and View pages
- Added css to give identical height to cards in List pages
- Added name of the perfum instead of ID in the Cart page. (would be more user friendly)
- Added a translation fonctionnality (based on locale of the request)

### Advice
I'm not sure about what was asked for this criteria. What is a better version? My advice would be:
- To give at least an image of the desired page design.
- To not call "cart" a button which makes user buy instantly the product. Putting in a cart doesn't mean the user will always buy it. It can bring confusion.

## Add accessibility and seo requirements

### Comments
- Added specific title to both list and view pages
- Added description meta tag in both list and view pages
- Added a robots.txt file for forbidding access to cart page

### Advice
I used the google recommandations for SEO (http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf)


## Refactor the JS code

### Comments
- Fixed non ES6 JS like: unnecessary use of 'use strict', non arrow functions, better use of exports/imports
- Create only one instance of DB, close it only when really needed
- Separate generic code from specific one

### Advice
More refactoring could be done on the app.js which tends to grove bigger after each dev added

## Improve the folder architecture

### Comments
- Made a fonctionnality oriented for folder architecture.
- Added scss

### Advice
Separating fonctionnality in route folder and reusable code/assets in the common folder.
The advantage of this structure is to prevent git conflict when working in team and also to add readability to the project.
The scss is also a nice add since it ease the writing of complex css code.

## Good use of Git and branches

### Comments
- Used the semantic commit messages (https://seesparkbox.com/foundry/semantic_commit_messages)
- Used pull request

### Advice
semantic commit messages help to understand the main goal of a commit
pull requests is a good tool for reviewing/share the code among the team and add more constraint about the code merge.
