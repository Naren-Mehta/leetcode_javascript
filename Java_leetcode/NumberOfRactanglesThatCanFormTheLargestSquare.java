public class NumberOfRactanglesThatCanFormTheLargestSquare {
    public int countGoodRectangles(int[][] rectangles) {


        for(int i=0;i< rectangles.length;i++){

            Math.min(rectangles[i][0], rectangles[i][1]);
        }


        return 0;
    }

    public static void main(String[] args) {
        int[][] rectangles = {{5,8},{3,9},{5,12},{16,5}}
        NumberOfRactanglesThatCanFormTheLargestSquare obj = new NumberOfRactanglesThatCanFormTheLargestSquare();
        obj.countGoodRectangles(rectangles);
    }
}
