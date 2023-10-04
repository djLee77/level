package level3;

import java.util.Scanner;

public class B10952 {
    public static void main(String args[])throws Exception{
        int A, B;
        StringBuilder sb = new StringBuilder();
        Scanner sc = new Scanner(System.in);

        while(true){
            A = sc.nextInt();
            B = sc.nextInt();

            if(A == 0 && B==0){
                break;
            }else{
                sb.append(A+B + "\n");
            }
        }
        System.out.println(sb);
    }
}
