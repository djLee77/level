package ICPC;

import java.util.Scanner;

public class B30449 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        sc.close();

        int a = 0, b = 1, c = 1, d = n;
        for (int i = 1; i < k; i++) {
            int q = (n + b) / d;
            int tempa = c;
            int tempb = d;
            c = q * c - a;
            d = q * d - b;
            a = tempa;
            b = tempb;
        }

        System.out.println(a + " " + b);
    }
}
