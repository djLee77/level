package level2;

import java.util.Scanner;

public class b2480 {
    public static void main(String args[])throws Exception{
        Scanner sc = new Scanner(System.in);

        int num1 =  sc.nextInt();
        int num2 =  sc.nextInt();
        int num3 =  sc.nextInt();
        int v = 0;
        
        if(num1 == num2 && num2 == num3){
            v = 10000 + num1 * 1000;
        }else if(num1 == num2){
            v = 1000 + num1 * 100;
        }else if(num2 == num3){
            v = 1000 + num2 * 100;
        }else if(num1 == num3){
            v = 1000 + num1 * 100;
        }else{
            v = 100 * Math.max(Math.max(num1,num2), num3);
        }

        System.out.println(v);
    }
}
