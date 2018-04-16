var plan = require('flightplan');

var appName = 'xiaoji';
var username = 'ec2-user';
var startFile = 'index.js';
var privateKey = '/Users/pengcheng/.ssh/xiaojiproject.pem';
var tmpDir = appName + '-' + new Date().getTime();

// configuration
plan.target('prod', [
    {
        // host: 'dev.xiangx.net',
        host: '13.231.202.132',
        username: username,
        privateKey: privateKey,
        agent: process.env.SSH_AUTH_SOCK,
        env: 'prod'
    }
]);

var versionDir = appName + '-versions/';
var folderDir = versionDir + tmpDir;

plan.local(function(local) {
    // uncomment these if you need to run a build on your machine first
    // local.log('Run build');

    local.log('Copy files to remote hosts');
    var filesToCopy = local.exec('git ls-files', { silent: true });
    // rsync files to all the destination's hosts
    local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
    remote.log('Install yarn');
    remote.sudo('curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo');
    remote.sudo('sudo yum install yarn');
    remote.log('Move folder to root');
    remote.sudo('cp -R /tmp/' + tmpDir + ' ~', { user: username });
    remote.rm('-rf /tmp/' + tmpDir);
    remote.log('Install dependencies');
    remote.sudo('cd ~/' + tmpDir + ' && yarn', { user: username });

    remote.log('Reload application');
    remote.sudo('ln -snf ~/' + tmpDir + ' ~/' + appName, { user: username });

    remote.log('Build js files');
    remote.sudo('cd ~/' + tmpDir + ' && yarn build && mkdir upload', { user: username });
    // remote.log('Cleaning up old deploys...');
    // remote.sudo('rm -rf `ls -1dt ~/' + appName + '-* | tail -n 1`', { user: username });
    remote.log('PM2 stop all app');
    remote.exec('pm2 stop all');
    remote.log('PM2 start app ~/' + appName + '/' + startFile);
    remote.exec('pm2 start ~/' + appName + '/' + startFile);
    remote.log('PM2 list all');
    remote.exec('pm2 ls');
    remote.exec('pm2 show ' + appName);
});
