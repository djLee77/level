package ICPC;

import java.util.Scanner;

public class Board {
    static boolean palindrome(String str) {
        int length = str.length();

        for (int i = 0; i < length / 2; i++) {
            char front = str.charAt(i);
            char back = str.charAt((length - 1) - i);

            if (front != back) {
                return false;
            }
        }

        return true;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String str = Integer.toString(n);

        StringBuffer sb = new StringBuffer(str);
        String reversedStr = sb.reverse().toString();

        int cnt = 0;
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (palindrome(str)) {
                cnt += 2;
            } else {
                cnt++;
            }
        }
        System.out.println(cnt);
    }
}
