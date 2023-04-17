#!/bin/bash

# cat first argument and pipe it to sed
# sed '[substitute]/<pattern>/<replacement>/[global_flag]'
cat $1 | sed -E 's/catnip/dogchow/g; s/cat/dog/g; s/meow|meowzer/woof/g'
