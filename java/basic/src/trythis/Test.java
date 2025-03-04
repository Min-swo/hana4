package trythis.geometric;

public class Test {
	public static void main(String[] args) {
		Circle circle1 = new Circle(30);
		System.out.println(circle1);

		circle1.setRadius(3);
		System.out.println(circle1);
		
		ResizableCircle circle2 = new ResizableCircle(30);
		circle2.resize(10);
		System.out.println(circle2);

	}
}
