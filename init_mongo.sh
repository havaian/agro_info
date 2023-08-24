#!/bin/bash

# Load variables from .env file
source .env

mongo admin <<-EOF
use admin
db.createUser({
  user: "$MONGO_INIT_USER",
  pwd: "$MONGO_INIT_PASS",
  roles: [ { role: "root", db: "admin" } ]
})
EOF

mongo "$DB_NAME" <<-EOF
use "$DB_NAME"
db.createUser({
  user: "$DB_USER",
  pwd: "$DB_PASS",
  roles: [ { role: "readWrite", db: "$DB_NAME" } ]
})
EOF
