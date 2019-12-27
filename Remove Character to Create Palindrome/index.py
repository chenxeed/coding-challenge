import math

# check if the string given is a palindrome by cutting the string in half, then compare them
def isPalindrome(s):
    splitLen = math.ceil(len(s)/2)
    firstWord = s[0:splitLen]
    secondWord = s[-splitLen:][::-1]
    return firstWord == secondWord


def create_palindrome(s):
    length = len(s)
    foundPalindrome = False
    index = 0
    # remove each character from the string and check if it's possible to become palindrome
    while(foundPalindrome is False and index < length-1):
        foundPalindrome = isPalindrome(s[:index] + s[index+1:])
        index += 1
    return foundPalindrome
    
print(create_palindrome("abcdcbea"))
print(create_palindrome("abccba"))
print(create_palindrome("abccaa"))
