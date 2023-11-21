# dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
# Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

# dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

# def lookdogo(string_, list_):
#     for name in list_:
#         if name in string_:
#             return "Match dog_name"
#     return "Thats a damn cat"
        
# result = lookdogo(dogString, dogNames)
# print(result)



# /*Write a fucntion that takes in an array and removes every even index with a splice,
# and replaces it with the string "even index". For bonus points instead of inserting even index
# replace each character with their signature move.*/

arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

def dragonball(names):
    for name in range(len(names)):
        if len(name) % 2 == 1:
            return name
            


result = dragonball(["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"])
print(result)