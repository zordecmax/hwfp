function fibonachiNumber(...nums) {
    if(nums.length === 0) {
        nums.push(0,1);
    }

    nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    return nums[nums.length - 1] < 1000 ? fibonachiNumber(...nums) : nums;


}
