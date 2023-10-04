package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;
//StringBuilder에 char 넣으면 안됨 ㅎㅎ;;
public class B9086 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        char[] str;

        for(int i=0; i<N; i++){
            str = br.readLine().toCharArray();
            sb.append(String.valueOf(str[0]) + String.valueOf(str[str.length-1]) + "\n");
        }

        System.out.println(sb);
    }
}
