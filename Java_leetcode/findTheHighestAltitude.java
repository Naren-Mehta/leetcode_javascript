class Solution {
    public int largestAltitude(int[] gain) {
        int max_alt=0;
        int curr_alt=0;
        for(int i=0;i<gain.length;i++){
            curr_alt+=gain[i]; 
            max_alt=Math.max(curr_alt, max_alt);
        }
        return max_alt; 
    }

    public static void main(String[] args){
        int[] arr =new int[]{-4,-3,-2,-1,4,3,2};
        Solution s1 = new Solution();
        System.out.println(s1.largestAltitude(arr));
    }
}