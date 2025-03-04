package trythis;

import java.util.Scanner;

public class Stdio {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("당신의 이름을 입력 하세요");
		String name = scan.nextLine();
		System.out.println("당신의 주소 입력 하세요");
		String addr = scan.nextLine();
		System.out.println("당신의 나이를 입력 하세요");
		int age = scan.nextInt();
		System.out.println("당신의 키(cm)를 입력 하세요");
		int height = scan.nextInt();

		System.out.println("이름: " + name);
		System.out.println("주소: " + addr);
		System.out.println("나이: " + age);
		System.out.println("키: " + height);

	}
}
