import functools

# this function only validates prime numbers more than 7
def isPrime(n):
    if n % 2 != 0 and n % 3 != 0 and n % 5 != 0 and n % 7 != 0:
        return True
    else:
        return False

def find_primes(n):
    # set default prime values that can't be validated by isPrime
    primes = [2, 3, 5, 7]
    if n <= 7:
        return filter(lambda a : a <= n, primes)
    else:
        index = 7
        while index < n:
            if isPrime(index) == True:
                primes.append(index)
            index += 1
    return primes

print(find_primes(5))
print(find_primes(7))
print(find_primes(100))
