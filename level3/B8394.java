package level3;

import java.util.Scanner;

public class B8394 {
    public static void main(String args[])throws Exception{
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int answer = 0;

        for(int i=1; i<=N; i++){
            answer += i;
        }

        System.out.println(answer);
    }
}
