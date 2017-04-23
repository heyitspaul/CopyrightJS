# CopyrightJS

CopyrightJS is a little JavaScript utility that will keep copyright year ranges
up to date without any human intervention. It was originally created for my own
personal and freelance projects where a static website required a copyright year
that could update itself without my intervention. The main focus of CopyrightJS
is on static HTML websites without any server-rendering backend which cuts costs
for sites that are very simple and seldom updated.

CopyrightJS currently requires a jQuery dependency, but a version without
jQuery may be available in the future.

Pull requests and feature requests are welcome.

## Usage

To use CopyrightJS, simply wrap the starting year in a span or some other
inline text element and set the class to `copyright-year`:

```html
<p>Copyright &copy; <span class="copyright-year">2016</span></p>
```

CopyrightJS will then look for all elements with the `copyright-year` class and
it will take care of the rest. In case you have multiple copyright years to run
against, CopyrightJS will handle each one individually, as seen in the
`test/index.html` file.

An invalid year will output an error to the console and replace the year with
whatever the current year is. A year in the future will display a warning in the
console and leave the year as-is.

It's [recommended](http://kangax.github.io/compat-table/es6/) that you use the
transpiled and minified files available in the `dist/` folder, as the version in
`src/` uses ES2015 syntax and features. The minified file is 381 bytes.
