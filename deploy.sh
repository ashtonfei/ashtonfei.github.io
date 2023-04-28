 #!/bin/bash 
 
USER_NAME=ubuntu
PUBLIC_IP=152.69.192.47
DOMAIN=ashtonfei.com
PRIVATE_KEY=~/oracle/ashtonfei.key

echo Deploying app to server ...

# scp -ri $PRIVATE_KEY ./dist/* $USER_NAME@$PUBLIC_IP:/var/www/$DOMAIN/
npm run build
echo $DOMAIN > ./docs/CNAME
echo Deployed
