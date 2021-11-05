yarn build:uat
rm -rf ~/Desktop/docker/universe/ursaminor/dist
cp -r dist ~/Desktop/docker/universe/ursaminor/
cp nginx.conf ~/Desktop/docker/universe/ursaminor/default.conf
cp docker-compose.yml ~/Desktop/docker/universe/ursaminor/docker-compose.yml
cd ~/Desktop/docker/universe/ursaminor

docker compose down
docker compose rm -f
docker compose up -d
