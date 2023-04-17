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
# ~/.zshrc
# ~/.vim
# ~/.vimrc
# ~/.config/nvim/

# than run this command to make single archive with important directories:
# tar -cvf auto_backup.tar ~/Documents ~/python_projects ~/coding_documents

#To reduce the file size remove these folders:
#downloaded plugins for vim:
#    $HOME/.vim/plugged 
#python virtual environment with downloaded libraries:
#    $HOME/python_learning/.venv

# implement for loop where possible
# try defining a function
        
        # first block
MYLOG=$HOME/my_logfile.txt
echo "setting the variables..."

sublime=$HOME/.config/sublime-text/Packages/User/
terminator=$HOME/.config/terminator/
pluma=$HOME/.config/pluma/
vifm=$HOME/.config/vifm/
bashrc=$HOME/.bashrc
bash_aliases=$HOME/.bash_aliases
zshrc=$HOME/.zshrc
vimrc=$HOME/.vimrc  # no ~/.vim/ directory to reduce the size
nvim=$HOME/.config/nvim/   # nvim configuration

output_dir=$HOME/my_scripts/
echo "first block done..."
        
        # second block
# create directory ~/my_scripts 
mkdir -p $output_dir
echo "directory created..."
echo "second block done"

        # third block
# archiving .config files and store them to $output_dir
# tar options -cvf -P -w
tar -cvf $output_dir/sublime-text.tar $sublime
tar -cvf $output_dir/terminator.tar $terminator
tar -cvf $output_dir/pluma.tar $pluma
tar -cvf $output_dir/vifm-file_manager.tar $vifm
tar -cvf $output_dir/bash_files.tar $bashrc $bash_aliases
tar -cvf $output_dir/vim_config.tar $vimrc
tar -cvf $output_dir/nvim_config.tar $nvim
tar -cvf $output_dir/zshrc.tar $zshrc
echo "third block done"

        # fourth block
# move archives of dotfiles to ~/Documents/dotfiles
echo 'move config.tar files to ~/Documents'
cd $output_dir
mv sublime-text.tar terminator.tar pluma.tar vifm-file_manager.tar\
    bash_files.tar vim_config.tar nvim_config.tar zshrc.tar\
    $HOME/Documents/dotfiles
echo "fourth block done"

    # fifth block
# create archive with full backup of most important directories
tar -cvf $output_dir/ubuntu_backup.tar $HOME/Documents $HOME/python_learning $HOME/coding_documents
echo "fifth block done"

echo "all done!"

# function for tar archiving, still work in progress
# uncomment next few lines
#compress() {
#  tar -cvf "${@}"
#}

