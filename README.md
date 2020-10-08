# sequelize-array-of-array-leak

This is a replication of a `DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING))` causing a memory leak during seeding, so bad that it uses up the entire resources (literally entire) during the process.

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://gitpod.io/#https://github.com/krystian-mw/sequelize-array-of-array-leak)

To replicate this, I have created a GitPod workspace that can be opened with the link (shield) above.
