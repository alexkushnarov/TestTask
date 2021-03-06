#/bin/bash
#upload files
s3cmd --exclude '.git/*' sync --delete-removed ./dist/ s3://lineups.com
#set content type of css files
s3cmd --recursive modify --add-header='content-type':'text/css' --exclude '' --include '.css' s3://lineups.com
#make everything public
s3cmd setacl s3://lineups.com --acl-public --recursive
