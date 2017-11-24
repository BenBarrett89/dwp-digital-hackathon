#!/bin/sh

## exit on error
set -e

echo "Backing up data..."

dbHost='localhost'
dbPort='27017'
# dbUser=${DB_USER:?-"Please refer to documentation and set DB credentials correctly"}
# dbPwd=${DB_PWD:?-"Please refer to documentation and set DB credentials correctly"}
# dbSSLMode=${DB_SSL_MODE}

mongodump --host $dbHost --port $dbPort -d upskill-dump --out=data/export/dump

echo "Backup completed..."
