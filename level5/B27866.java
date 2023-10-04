package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B27866 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        char[] str = br.readLine().toCharArray();

        int N = Integer.parseInt(br.readLine());

        System.out.println(str[N-1]);
    }
}
