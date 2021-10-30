module.exports = {
  game: 'arma3_x64', // arma3, arma2oa, arma2, arma1, cwa, ofpresistance, ofp, arma3_x64
  path: '/home/steam/steamcmd/arma3/',
  port: 3000,
  host: '0.0.0.0', // Can be either an IP or a Hostname
  type: 'linux', // Can be either linux, windows or wine
  additionalConfigurationOptions: '', // Additional configuration options appended to server.cfg file
  parameters: [ // Additional startup parameters used by all servers
    '-noSound',
    '-world=empty'
  ],
  serverMods: [ // Mods used exclusively by server and not shared with clients
    '@extDB3'
  ],
  admins: [], // add steam IDs here to enable #login without password
  auth: [
    { // If both username and password is set, HTTP Basic Auth will be used. You may use an array to specify more than one user.
      username: 'ignacio', // Username for HTTP Basic Auth
      password: 'Kc51472' // Password for HTTP Basic Auth
    },
    {
      username: 'nico',
      password: 'Nico51472'
    },
    {
      username: 'maxi',
      password: 'Maxi51472'
    },
    {
      username: 'luis',
      password: 'Luis51472'
    },
    {
      username: 'shaggy',
      password: 'Shaggy51472'
    },
    {
      username: 'peta',
      password: 'wN2$dL2*eC8@sG9}wM2(iL8}nD2(jM1!'
    },
    {
      username: 'huaiqui',
      password: 'Huaiquil51472'
    },
    {
      username: 'lince',
      password: 'Lince51472'
    }
  ],
  prefix: "", // Prefix to all server names
  suffix: "", // Suffix to all server names
  logFormat: "dev", // expressjs/morgan log format
};

