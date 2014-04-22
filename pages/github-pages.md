# Creating a Static Website with GitHub

## GitHub Pages

GitHub Pages provide a static website for your project that is, 
by nature of the service, kept in a git repository.  This makes 
updating the site, and even reverting parts of it back to an 
earlier version easy.

For coding projects, I often make my websites by taking specially 
formatted text files, such as restructured text or markdown, and 
render the files to html, then post the html files to the 
document root.  For the GitHub sites, I decided to basically 
write the pages in the same manner, except for now I am limited to 
using markdown.  The difference is that I am not rendering the 
markdown text to html, rather the web browser will be doing this.

The desire is to use [requirejs-text](https://github.com/requirejs/text) 
to retrieve the file content by name, then have the client render 
the text.  At the moment, this isn't working, so I am using a 
script to take the markdown files and create a JSON object that is 
stored in a corresponding .json file, which is retrieved in an 
xhr request.  When this difficulty is overcome, all that will need 
to be done will be manage *one* directory of text files.


## Vagrant

I am using [Vagrant](http://vagrantup.com) to house the development 
tools to build the website.  I use a [nodejs](http://nodejs.org) 
environment to develop the website, using [Grunt](http://gruntjs.com) 
to handle much of the work.


## Trumpet without pyramid

[static](#pages/trumpet-resources) resources