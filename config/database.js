module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-85.railway.app'),
      port: env.int('PGPORT', 7742),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'rf1T3K9mdVz79kTY6EVU'),
      ssl: env.bool(true),
    },
  },
});
