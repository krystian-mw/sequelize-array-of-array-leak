# sequelize-array-of-array-leak

This is a replication of a `DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING))` causing a memory leak during seeding, so bad that it uses up the entire resources (literally entire) during the process.

To replicate this, I have created a GitPod workspace that can be opened with the link (shield) above.
