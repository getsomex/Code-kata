# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

# def is_isogram(string):
#     # your code here
#     if string == '':
#         return True
#     sortedChar = [char for char in string.lower()]
#     sortedChar.sort()

#     prev = sortedChar[0]
#     count = 0
#     for idx, char in enumerate(sortedChar):
#         if prev == char:

#             count += 1
#         prev = sortedChar[idx]

#     if(count > 1):
#         return False
#     else:
#         return True


def is_isogram(string):
    # your code here
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1:
            return True
    return False


print(is_isogram('moOse'))
