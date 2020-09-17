# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python

def digital_root(n):
    if(n > 9):
        digit_list = [kk for kk in str(n)]
        sum = 0
        for letter in digit_list:
            sum += int(letter)
        return digital_root(sum)
    return n


print(digital_root(56))
