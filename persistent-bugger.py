# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python
from functools import reduce


def persistence(n):
    count = []

    def getResult(num):
        if num < 9:
            return 0
        else:
            numList = reduce(lambda x, y: x*y, [int(dig) for dig in str(num)])
            count.append(1)
            return getResult(numList)
    getResult(n)
    return(sum(count))


print(persistence(999))
