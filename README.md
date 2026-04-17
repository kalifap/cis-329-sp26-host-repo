# cis-329-sp26-host-repo
ExpressJS + MongoDB + ReactJS

# installation: Run These Steps
- sudo rm /etc/apt/sources.list.d/yarn.list
- curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarn.gpg > /dev/null
- echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
- sudo rm /etc/apt/sources.list.d/mongodb-org-7.0.list
- curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg  --dearmor
- echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
- sudo apt-get update
- sudo apt-get install -y mongodb-org

# MongoDB Initialization:
- sudo chown -R mongodb:mongodb /var/lib/mongodb
- sudo chown -R mongodb:mongodb /var/log/mongodb
- sudo mongod --config /etc/mongod.conf --fork
# Test if the mongodb is running:
- ps aux | grep mongod
