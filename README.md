SuperMeshWebUI Dependencies:
 - nodejs version 0.10+
 - npm
 - grunt-cli
 - git
 
To install dependencies: `sudo apt-get -y install git nodejs npm`

To install grunt-cli: `sudo npm install -g grunt-cli`

To clone git repo: `git clone https://github.com/satindergrewal/SuperMeshWebUI`

If cloning test branch of SuperMeshWebUI (e.g. alpha-0.0.2e):

`git clone -b branch_name_here https://github.com/satindergrewal/SuperMeshWebUI`

Example:

`git clone -b alpha-0.0.2e https://github.com/satindergrewal/SuperMeshWebUI`

To initialize SuperMeshWebUI nodejs app:

`cd SuperMeshWebUI`

`npm install`

`npm install -g grunt-cli`

`grunt build`

You'll find a new directory under `public`

`public/prod/`

This is the directory which needs to be under `public/` directory located in SuperMesh.