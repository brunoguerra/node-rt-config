runCmd = node_modules/mocha/bin/mocha --require test/support/env --reporter spec --check-leaks test/helper.js

#
# Test project
#
all: test

#
# Start the doc server locally
#
test:
	NODE_PATH=. NODE_CONFIG_DIR=test/fixtures/ ALLOW_CONFIG_MUTATIONS=YES $(runCmd) test/lib/ test/features/


#
# usage
#
 .PHONY: test
