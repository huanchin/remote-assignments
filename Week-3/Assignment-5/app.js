function twoSum(nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (!hashMap.hasOwnProperty(nums[i])) {
      hashMap[remain] = i;
    } else {
      const firstIndex = hashMap[nums[i]];
      console.log([firstIndex, i]);
      return [firstIndex, i];
    }
  }
  return [-1, -1];
}

twoSum([2, 7, 11, 15], 9);
