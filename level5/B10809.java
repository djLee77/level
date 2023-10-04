package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B10809 {
    public static void main(String args[]) throws Exception {
        //97 - 122
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        char[] str = br.readLine().toCharArray();
        int [] answer = new int[26];


        for(int i=0; i<answer.length; i++){
            answer[i] = -1;
        }

        for(int i=0; i<str.length; i++){
            for(int j=97; j<=122; j++){
                if(str[i] == (char)j && answer[j-97] == -1){
                    answer[j-97] = i;
                }
            }
        }

        for(int i=0; i<answer.length; i++){
            sb.append(answer[i] + " ");
        }

        System.out.println(sb);
    }
}
