package level1;

import java.util.Scanner;

public class baekjun_18108 {
    static int num = 2541 - 1998;
    public static void main(String args[])throws Exception{
        Scanner sc = new Scanner(System.in);

        int year = sc.nextInt();

        System.out.println(year - num);
    }
}
