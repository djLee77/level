package level1;

import java.util.Scanner;

public class baekjun_18108 {
    public static void main(String args[])throws Exception{
        Scanner sc = new Scanner(System.in);

        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int num3 = sc.nextInt();

        int sum = num1 + num2 + num3;
        int max = Math.max(num1, num2);
        if(Math.max(num1, num3) > max) max = Math.max(num1, num3);
        
        int min = Math.min(num1, num2);
        if(Math.min(num1, num3) < min) min = Math.min(num1, num3);

        System.out.println(sum - max - min);
    }
}
