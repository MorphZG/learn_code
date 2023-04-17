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
MYLOG=~/my_logfile.txt
echo "setting the variables..."

sublime=~/.config/sublime-text/Packages/User
terminator=~/.config/terminator
pluma=~/.config/pluma
vifm=~/.config/vifm
bashrc=~/.bashrc
bash_aliases=~/.bash_aliases
vim=~/.vim
vimrc=~/.vimrc

location=~/my_scripts
echo "first block done..."
        
        # second block
# create directory ~/my_scripts 
mkdir -p $location
echo "directory created..."
echo "second block done"

        # third block
# archiving .config files and temporary store them to ~/my_scripts
tar -cfv $location/sublime-text.tar $sublime
tar -cfv $location/terminator.tar $terminator
tar -cfv $location/pluma.tar $pluma
tar -cfv $location/vifm-file_manager.tar $vifm
tar -cfv $location/bash_files.tar $bashrc $bash_aliases
tar -cfv $location/vim_config.tar $vim $vimrc
echo "third block done"

        # fourth block
# move archives of dotfiles to ~/Documents/dotfiles
echo 'move config.tar files to ~/Documents'
cd $location
mv sublime-text.tar terminator.tar pluma.tar vifm-file_manager.tar bash_files.tar vim_config.tar ~/Documents/dotfiles
echo "fourth block done"

    # fifth block
# create archive with full backup of most important directories
tar -cfv $location/ubuntu_backup.tar ~/Documents ~/python_projects_exercise ~/coding_documents
echo "fifth block done"

echo "all done!"

