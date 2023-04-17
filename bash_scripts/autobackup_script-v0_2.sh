#!/bin/bash

# first arhive the following config files and store them here:
# ~/Documents/dotfiles
#
# ~/.config/sublime-text/Packages/User
# ~/.config/terminator
# ~/.config/pluma
# ~/.config/vifm
# ~/.bashrc
# ~/.bash_aliases
# ~/.vim
# ~/.vimrc
#
# than run this command to make single archive with important directories:
# tar -cvf auto_backup.tar ~/Documents ~/python_projects ~/coding_documents
        
        # first block
MYLOG=$HOME/my_logfile.txt
echo "setting the variables..."

sublime=$HOME/.config/sublime-text/Packages/User/
terminator=$HOME/.config/terminator/
pluma=$HOME/.config/pluma/
vifm=$HOME/.config/vifm/
bashrc=$HOME/.bashrc
bash_aliases=$HOME/.bash_aliases
vimrc=$HOME/.vimrc  # to reduce size, no ~/.vim/ directory

location=$HOME/my_scripts/
echo "first block done..."
        
        # second block
# create directory ~/my_scripts 
mkdir -p $location
echo "directory created..."
echo "second block done"

        # third block
# archiving .config files and temporary store them to ~/my_scripts
# tar options -cvf -P -w
tar -cvf $location/sublime-text.tar $sublime
tar -cvf $location/terminator.tar $terminator
tar -cvf $location/pluma.tar $pluma
tar -cvf $location/vifm-file_manager.tar $vifm
tar -cvf $location/bash_files.tar $bashrc $bash_aliases
tar -cvf $location/vim_config.tar $vim $vimrc
echo "third block done"

        # fourth block
# move archives of dotfiles to ~/Documents/dotfiles
echo 'move config.tar files to ~/Documents'
cd $location
mv sublime-text.tar terminator.tar pluma.tar vifm-file_manager.tar bash_files.tar vim_config.tar $HOME/Documents/dotfiles
echo "fourth block done"

    # fifth block
# create archive with full backup of most important directories
tar -cvf $location/ubuntu_backup.tar $HOME/Documents $HOME/python_learning $HOME/coding_documents
echo "fifth block done"

echo "all done!"

