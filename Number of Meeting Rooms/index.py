import functools

def meeting_rooms(meetings):
    # record the usage of each "time" in the meetings schedule
    timeline = {}
    for time in meetings:
        start = time[0]
        end = time[1]
        while start < end:
            if timeline.get(start) == None:
                timeline[start] = 1
            else:
                timeline[start] += 1
            start += 1
    # count the unique value of the timeline, to define how many meeting rooms needed
    schedule = set(timeline.values())
    return len(schedule)


      









  

# print 1
print(meeting_rooms([(0, 10), (10, 20)]))
# 1

print(meeting_rooms([(20, 30), (10, 21), (0, 50)]))
# 3 (all meetings overlap at time 20)