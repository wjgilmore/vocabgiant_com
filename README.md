# VocabGiant

This repository maintains the VocabGiant companion project to the forthcoming book, "Easy React: Build Powerful Web Apps Using Modern JavaScript Technologies" ([http://easyreactbook.com](http://easyreactbook.com)).

Being a Git repository, you'll need to possess at least rudimentary Git skills to make the most of these examples. If you're not familiar with Git I suggest having a look Scott Chacon's great book (available for free online), "[Pro Git](https://git-scm.com/book)", in addition to Neo's fantastic online "[Git Immersion](http://gitimmersion.com/)" course.

Learn more about the book at [http://easyreactbook.com](http://easyreactbook.com). You can download the introduction and first chapter for free!

## Installing VocabGiant

VocabGiant takes advantage of many different technologies, including [React](https://facebook.github.io/react/), [Babel](https://babeljs.io/), [Reflux](https://github.com/spoike/refluxjs), [MongoDB](https://www.mongodb.org/), [Mongoose](http://mongoosejs.com/), [Superagent](https://github.com/visionmedia/superagent), [Gulp](http://gulpjs.com/), [ESLint](http://eslint.org/), and others. It is intended to provide relative newcomers to React and modern JavaScript alike with a sane example of how all of these fascinating technologies work together to create a working application.

To run VocabGiant locally, clone the repository and then install the dependencies:

	$ npm install

Next, create a local MongoDB database (named whatever you please), and then create an environment variable named `MONGOLAB_URI`, assigning the variable your MongoDB connection string. For instance here is what I've added to my `.bash_profile`:

	export MONGOLAB_URI=mongodb://localhost/dev_vocabgiant_com

If you have a look inside `server.js` you'll see this `MONGOLAB_URI` environment variable is used to connect to MongoDB. Next import the database seeds into your newly created database:

	$ mongo localhost/dev_vocabgiant_com database/seeds/seeds.js

Finally, boot the application:

	$ node server

You'll also want to begin watching your application using Gulp so the JS can be recompiled on the fly:

	$ gulp watch

Finally, keep in mind parts of this app are currently broken! This is very much a prototype, and I'm furiously adding new features to it while writing the book. I didn't want to wait for perfection to release it, since I figured quite a few interested developers could begin learning at least something from it now.

## The TODO List

This is the "I am embarrassed to release this" release. Heck, I haven't even started tagging it yet. Currently you'll find it contains a few example lists, and you can use the sweet swipe feature to review a list, and that's about it. I'm planning on incorporating *a ton* of cool new features over the next few weeks, including:

* **Quizzes**: This feature is the most pressing priority. Users will be quizzed on their list comprehension, and the app will track scores in real-time.
* **User Accounts**: Users will be able to create accounts and manage their own vocabulary lists.
* **Administration Interface**: An administrator will be able to add lists and do other administrative stuff.
* **Eye Candy and Other Interactive Features**: Because we like whizbang stuff.

## Demo

A (slow) Heroku-hosted demo is currently available at [http://blooming-temple-4225.herokuapp.com/](http://blooming-temple-4225.herokuapp.com/). Over the next few days I'll migrate it to the VocabGiant.com URL and ensure it has proper resources to run responsively. Keep in mind parts of this demo are broken. :-) Also, it's optimized for phones, so it looks weird on a desktop.

## Questions?

Found a bug in the book or repository, or have a question? Pull requests and e-mails welcome. Contact the author W. Jason Gilmore at wj@wjgilmore.com.

## License

Licensed under the MIT. See LICENSE.md for all the glorious details.
