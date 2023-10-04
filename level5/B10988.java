package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B10988 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        char[] str = br.readLine().toCharArray();

        boolean chk = true;
        for(int i=0; i<str.length/2; i++){
            if(str[i] != str[str.length-1-i]){
                chk = false;
            }
        }

        if(chk){
            System.out.println(1);
        }else{
            System.out.println(0);
        }
    }
}
