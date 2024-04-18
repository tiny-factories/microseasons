import json

# Load the data from microseasons.json
with open('../public/microseasons.json', 'r', encoding='utf-8') as file:
    microseasons = json.load(file)

# Modify each item to include a slug key
for item in microseasons:
    name = item.get('name', '')
    slug = name.lower().replace(' ', '-')
    item['slug'] = slug

# Write the modified data back to microseasons.json
with open('../public/microseasons.json', 'w', encoding='utf-8') as file:
    json.dump(microseasons, file, ensure_ascii=False, indent=2)