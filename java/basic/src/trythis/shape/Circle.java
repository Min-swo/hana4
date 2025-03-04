package trythis;

public class Circle {
	private double radius;

	public Circle(double radius) {
		this.radius = radius;
	}

	public Circle() {
		this(0);
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double getArea() {
		return radius * radius * Math.PI;
	}

	public double getCircumference() {
		return 2 * radius * Math.PI;
	}

	@Override
	public String toString() {
		return "Circle[radius=" + radius + "]의 둘레는 " + getCircumference() + ", 면적은 " + getArea();
	}

	public static void main(String[] args) {
		Circle circle = new Circle();
		Circle circle1 = new Circle(1.0);

		System.out.println(circle1.toString());
	}
}
