package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B2675 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        int T = Integer.parseInt(br.readLine());
        char[] str;

        for(int i=0; i<T; i++){
            st = new StringTokenizer(br.readLine());
            int r = Integer.parseInt(st.nextToken());
            str = st.nextToken().toCharArray();

            for(int j=0; j<str.length; j++){
                for(int k=0; k<r; k++){
                    sb.append(String.valueOf(str[j]));
                }
            }
            sb.append("\n");
        }

        System.out.println(sb);
    }
}
