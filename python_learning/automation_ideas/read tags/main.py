import re

#old_string = 'h?ello, my name is nik! how are you?'
#new_string = re.sub('[!?]', '', old_string)

# patterns i am looking for
# r prefix is notation for python's raw strings (literal)
regex1 = r"^.*#tags(:|.)"
regex2 = r"^.*#modules:"
substitute = ""

# open file and read content as a single string
with open('grep-tags.txt', 'r') as file:
    tags = file.read()
with open('grep-modules.txt', 'r') as file:
    modules = file.read()

# substitute the regex pattern with empty string
# re.M = re.MULTILINE matching
# without it ^ and $ match start and the end of whole string
all_tags = re.sub(regex1, substitute, tags, 0, re.M)
all_modules = re.sub(regex2, substitute, modules, 0, re.M)
print(f'printing all_tags ================================')
print(all_tags)
with open('output-test.txt', 'w') as file:
    file.write(all_tags)

# build a set of unique tags
tag_set = set(all_tags.split())
print(f'printing set tag_set ================================')
print(tag_set)

# check for 'non-word' elements like: ', '
for tag in tag_set:
    if len(tag) <= 2:
        print(f'found {tag}')
        tag_set.remove(tag)

# create new file with clean tags:
with open('output-final.txt', 'w') as file:
    tag_final = []
    file.write('These are all available tags to grep through\n\n')
    for tag in tag_set:
        tag_final.append(tag)
        file.write(f'{tag}\n')

#modules: re
#tags: regex