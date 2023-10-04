package level2;

import java.util.Scanner;

public class baekjun_2525 {
    public static void main(String args[]) throws Exception {
        Scanner sc = new Scanner(System.in);

        int hour = sc.nextInt();
        int minute = sc.nextInt();
        int meat = sc.nextInt();

        if (minute + meat >= 60) {
            int cnt = 1;
            minute = minute + meat - 60;
            while (minute >= 60) {
                minute = minute - 60;
                cnt++;
            }
            hour += cnt;
        } else {
            minute = minute + meat;
        }

        if (hour >= 24) {
            while(hour >= 24){
                hour = hour - 24;
            }
        }

        System.out.println(hour + " " + minute);
    }
}
