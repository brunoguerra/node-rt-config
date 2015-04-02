rt-config
=================
This module helps you to keep your system configuration on-line

install
-----------------
npm install rt-config

use
-----------------

```javascript
var rt_config = require('rt-config');

// reads any entitrie form storage manager
var value = rt_config().someKey.deeplyGoing.propertyName;

// invalidate config and force to reaload from storage manager
rt_config.invalidate();
```

extendable
-----------------
You can change storage manager any time you want.

```javascript
var rtConfig = require('rt-config');

// change storage manager
rtConfig.storage('rt-config-my-manager');

// gets config form your manager 
var locations = rtConfig().jedies.location;

```

proposal features
-----------------

- receives push from redis and refresh configuration

Authors
-----------------
- @brunoguerra - developer
- @ericsaboia - reviwer