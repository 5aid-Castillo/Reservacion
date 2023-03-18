#place .nojekyll  to bypass Jekyll processing
echo > .nojekyll

#id you are deploying to a custom domain
#echo 'www.example.com' > Name
git init
git checkout -B main
git add -A
git commit -m 'deploy'

#if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>.github.io.git main

#if yo are deploying to https://<USERNAME>/github.io/<REPO>
#EXAMPLE:
#git push -f git@github.com:roymansoor/pokemon.git main:gh-pages

#ME:
#git push -f git@github.com:5aid-Castillo/Reservaciones.git main:gh-pages

cd -