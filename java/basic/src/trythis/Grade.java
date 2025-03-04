package trythis;

import java.util.Scanner;

public class Switch {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		ex1(scan);
		ex2(scan);
	}

	private static void ex1(Scanner scan) {
		int grade = scan.nextInt();
		switch (grade / 10) {
			case 10, 9 -> System.out.println("A");
			case 8 -> System.out.println("B");
			case 7 -> System.out.println("C");
			case 6 -> System.out.println("D");
			default -> System.out.println("F");
		}
	}

	private static void ex2(Scanner scan) {
		char grade = scan.next().charAt(0);

		switch (grade) {
			case 'A', 'B' -> System.out.println("참 잘했음");
			case 'C', 'D' -> System.out.println("좀 더 노력해");
			default -> System.out.println("다음 학기에 다시 만나요.");
		}
	}
}
