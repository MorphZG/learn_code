import os
import shutil

'''
I have a list of books i would like to have in a .pdf format. Would like to parse the .pdf file and export everything to plain text.
Of course there are simpler methods but i am a programmer and i need a script.
'''

inputFile = input("input path: ")

with open(inputFile) as fileobject:

