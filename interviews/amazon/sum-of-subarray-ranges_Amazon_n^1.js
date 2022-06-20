var subArrayRanges = function(nums) {
    let stack_p =[], stack_n = [], sum=0;
    for(let i=0;i<nums.length;i++){
        while(stack_p.length>0 && stack_p[stack_p.length-1] > nums[i]){
            stack_p.pop();
        }
        stack_p.push(nums[i]);

        while(stack_n.length>0 && stack_n[stack_n.length-1] < nums[i]){
            stack_n.pop();
        }
        stack_n.push(nums[i]);
    }
    console.log(stack_p, stack_n);
    return sum;
};

console.log(subArrayRanges([9, 2, 10, 8, 5 , 7, 4, 1]));