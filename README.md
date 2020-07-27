# Demo_Noflo_Data
For running NoFlo programs on Node.js:

step1: Download nodejs setup
step2: Start by setting up a local NoFlo Node.js project
       $ mkdir my-project
       $ cd my-project
       $ npm init  (for creating package.json(This is the file that is used by NPM for finding and installing the libraries your project needs) in your project directory)
       $ npm install noflo --save   (for installing noflo library in your project)
       $ npm install noflo-nodejs --save  (for running NoFlo on Node.js via command-line)

step3: For creating noflo-nodejs runtime ->
       command : ./node_modules/.bin/noflo-nodejs (inside your project directory, run this command to create the runtime)

step4: The following packages we have installed for python script:
       1.) pip install pandas
       2.) pip install matplotlib

NOTE: After the above steps are completed and a runtime is active, anyone can fork the github repo and select this runtime and run it. 
The output will be shown in Shell (from where runtime was created) 
       
Reference link: https://github.com/noflo/noflo-nodejs#readme
