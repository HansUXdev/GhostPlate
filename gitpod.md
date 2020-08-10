# GitPod Notes

## [Virtual Desktop](https://github.com/gitpod-io/workspace-images/blob/master/full-vnc/Dockerfile)



## Installing [MongoDB](https://github.com/gitpod-io/workspace-images/blob/master/mongodb/Dockerfile)
To get MongoDB for your project, you can use our dedicated MongoDB image built on top of gitpod/workspace-full.

Simply base your .gitpod.dockerfile on:

`FROM gitpod/workspace-mongodb`

Then start the MongoDB server by running this in a Terminal or in a .gitpod.yml command:
`mkdir -p /workspace/data && mongod --dbpath /workspace/data` 