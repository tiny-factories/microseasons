import json
import os

# Ensure the public directory exists
if not os.path.exists('public'):
    os.makedirs('public')

# Load the microseasons data from the file
with open('../public/microseasons.json', 'r', encoding='utf-8') as file:
    microseasons = json.load(file)

# Sort the microseasons by the 'start' date
sorted_microseasons = sorted(microseasons, key=lambda x: x['start'])

# Write the sorted list back to the file
with open('public/microseasons.json', 'w', encoding='utf-8') as file:
    json.dump(sorted_microseasons, file, indent=2, ensure_ascii=False)