const dev = {
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        name: process.env.DEV_DB_NAME,
    }
}

const config = {dev}

module.exports = config['dev']