package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B5597 {
    public static void main(String args[])throws Exception{
        boolean[] arr = new boolean[31];
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        for(int i=0; i<28; i++){
            int index = Integer.parseInt(br.readLine());
            arr[index] = true;
        }

        for(int i=1; i < arr.length; i++){
            if(!arr[i]){
                sb.append(i + "\n");
            }
        }

        System.out.println(sb);
    }
}
