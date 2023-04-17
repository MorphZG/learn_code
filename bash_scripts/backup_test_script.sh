#copied from Herbertech https://www.youtube.com/watch?v=m8gN8iCWLdI
# Make an Incremental Backup Script with Bash!

#!/bin/bash

source=$HOME/Documents/source
dest=$/Documents/destination

for file in $(find $source -printf "%P\n") ; do
    if [ -a $dest/$file ] ; then
        if [ $source/$file -nt $dest/$file ] ; then
        echo "Newer file detected, copying..."
        cp -r $source/$file $dest/$file
        else
        echo "File $file exists, skipping."
        fi
    else
    echo "$file is being copied over to $dest"
    cp -r $source/$file $dest/$file
    fi
done
