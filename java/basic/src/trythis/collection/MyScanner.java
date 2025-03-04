package trythis.collection;

import java.util.Scanner;

public class Input {
	Scanner in;
	String inputMsg;
	String type;

	public Input(String inputMsg, String type) {
		this.in = new Scanner(System.in);
		this.inputMsg = inputMsg;
		this.type = type;
	}

	public Input(String inputMsg) {
		this(inputMsg, "String");
	}
}
