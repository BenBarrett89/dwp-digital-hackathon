#!/bin/sh

## exit on error
set -e

echo "Restoring DB..."

[ -f ~/.bash_profile ] && . ~/.bash_profile
dbHost='localhost'
dbPort='27017'
# dbUser=${DB_USER:?-"Please refer to documentation and set DB credentials correctly"}
# dbPwd=${DB_PWD:?-"Please refer to documentation and set DB credentials correctly"}
# dbSSLMode=${DB_SSL_MODE}

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

outDB=${1:-upskill}
inDB=${2:-upskill-dump}

## Allow a specific collection to be restored, otherwise restore all
if [ $# -eq 3 ]
  then
    collection="-c $3 ./$3.bson"
  else
    collection="./"
fi

## drop db if exists
mongo --host $dbHost --port $dbPort $outDB -u "db.dropDatabase()"

cd "../data/export/dump/$inDB"
mongorestore --host $dbHost --port $dbPort -d $outDB $collection

echo "DB restored"
