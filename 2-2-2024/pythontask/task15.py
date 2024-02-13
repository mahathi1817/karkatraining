def intersection(nums1, nums2):
    set1 = set(nums1)
    set2 = set(nums2)

    result = list(set1.intersection(set2))
    return result

nums1 = [1, 2, 2, 1]
nums2 = [2, 2]

output = intersection(nums1, nums2)
print("Intersection of nums1 and nums2:", output)
