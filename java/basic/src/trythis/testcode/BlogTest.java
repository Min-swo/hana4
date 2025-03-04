package trythis.testcode;

import java.util.Scanner;

public class Test extends IOTest {

	@Test
	void set_in_test() {
		systemIn("원하는 입력값");
		test();
	}

	void test() {
		Scanner scanner = new Scanner(System.in);
		System.out.println(scanner.nextLine());
	}
}
