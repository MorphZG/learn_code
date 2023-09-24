#! /usr/bin/python3

import os
import shutil

dirs = input("Enter the directories you want to backup separated by space: ").split()
output_dir = os.path.expanduser("~/backups/")

if not os.path.exists(output_dir):
    # create output directory if doesn't exist
    os.makedirs(output_dir)

# Create archive for each selected directory
for dir in dirs:
    dir_path = os.path.expanduser(dir)
    if os.path.isdir(dir_path):
        archive_path = os.path.join(output_dir, dir.replace("/", "_") + ".tar")
        # creates the .tar archive with the following name:
        # "archive_path.tar" [:-4] removes ".tar" from the name
        #   make_archive(base_name, format, base_dir)
        shutil.make_archive(archive_path[:-4], "tar", dir_path)
    else:
        print(f"Error: {dir_path} does not exist or is not a directory")

print(f"Backup created in {output_dir}")
