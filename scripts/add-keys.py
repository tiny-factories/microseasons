import json
import os

# Load the microseasons data from the file
with open('public/microseasons.json', 'r', encoding='utf-8') as file:
    microseasons = json.load(file)

# Function to add new data to each item
def add_new_data(item):
    # Example of adding new data. You should replace these with your actual data sources or logic.
    item['imageUrl'] = '/image'  # Placeholder image URL
    item['colorMatrix'] = ['#000000', '#FFFFFF']  # Placeholder for color matrix for gradient
    item['soundUrl'] = '/sound'  # Placeholder sound URL
    item['quote'] = {'text': 'Example quote', 'author': 'Author Name'}  # Placeholder quote object
    return item

# Add the new data to each microseason
updated_microseasons = [add_new_data(item) for item in microseasons]

# Write the updated list back to the file
with open('public/microseasons.json', 'w', encoding='utf-8') as file:
    json.dump(updated_microseasons, file, indent=2, ensure_ascii=False)