package level3;

import java.util.Scanner;

public class B25304 {
    public static void main(String args[])throws Exception{
        Scanner sc = new Scanner(System.in);

        int X = sc.nextInt();
        int N = sc.nextInt();
        int sum = 0;
        int a = 0;
        int b = 0;

        for(int i = 0; i< N; i++){
            a = sc.nextInt();
            b = sc.nextInt();
            sum += a*b; 
        }

        if(X == sum){
            System.out.println("Yes");
        }else if(X != sum){
            System.out.println("No");    
        }
    }
}
