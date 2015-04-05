rt-config
=================
This module helps you to keep your system configuration on-line

Installation
-----------------
npm install rt-config

Usage
-----------------

```javascript
var rtconfig = require('rt-config');

// reads any entry form storage manager
var value = rtconfig().someKey.deeplyGoing.propertyName;

// invalidate config and force to reaload from storage manager on next call
rtconfig.invalidate();
```

Extensible
-----------------

You can change storage manager any time you want.

```javascript
var rtconfig = require('rt-config');

// change storage manager
rtconfig.storage('rt-config-my-manager');

// gets config form your manager
var locations = rtconfig().jedi.location;

```

Default (and Simple) Storage Manger
-----------------

The default Storage Manger is a simple Yaml file reader, which does it with your Yaml preferred parser (see (node-config)[https://github.com/lorenwest/node-config]).

Assing location of your reloadable config file under config_rt_file root key of config, so it will be parsed

```javascript
var defaultYamlConfigLocation = config.config_rt_file
```

Contributing
-----------------

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

Release History
-----------------

* 0.1.0 Reloadable configs

Milestones
-----------------

* 0.2.0 receives push from redis and refresh configuration

Test
-----------------

  npm test

Authors
-----------------
 - @brunoguerra
 - @ericsaboia
