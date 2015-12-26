SuperMeshWebUI Dependencies:
 - nodejs version 0.10+
 - npm
 - grunt-cli
 - git
 
To install dependencies: `sudo apt-get -y install git nodejs npm`

To install grunt-cli: `sudo npm install -g grunt-cli`

To clone git repo: `git clone https://github.com/satindergrewal/SuperMeshWebUI`

If cloning test branch of SuperMeshWebUI (e.g. alpha-0.0.1e):

`git clone -b branch_name_here https://github.com/satindergrewal/SuperMeshWebUI`

Example:

`git clone -b alpha-0.0.1e https://github.com/satindergrewal/SuperMeshWebUI`

To initialize SuperMeshWebUI nodejs app:

`cd SuperMeshWebUI`

`npm install`

`grunt build`

Now start SuperMeshWebUI nodejs app:

`npm start`

Access SuperMesh Web UI from system's address on port `3000`. Like http://localhost:3000

Login page: http://localhost:3000/login

Admin page: http://localhost:3000/admin
