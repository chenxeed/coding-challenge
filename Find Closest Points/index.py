import math

# Given a list of points as a tuple (x, y) and an integer k, find the k closest points to the origin (0, 0).
def closest_points(points, k):
    points.sort(key=calculateRange)
    return points[0:k]

# calculate given point range to (0,0)
def calculateRange(point):
    return math.sqrt(math.pow(point[0], 2) + math.pow(point[1], 2))

print(closest_points([(0, 0), (1, 2), (-3, 4), (3, 1)], 2))