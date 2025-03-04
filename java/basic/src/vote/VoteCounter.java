package vote;

import java.util.Random;

public class VoteCounting extends Thread {
	public static final int LIMIT = 100;
	private final String name;
	private int percentage;
	private final Random rand = new Random();

	public VoteCounting(String name) {
		this.name = name;
		this.percentage = 0;
	}

	@Override
	public void run() {
		int incRate = rand.nextInt(5) + 1;
		while (percentage < LIMIT) {
			try {
				Thread.sleep(rand.nextInt(1000));
				setPercentage(percentage + incRate);
				showCountingRate(incRate);
			} catch (InterruptedException e) {
				throw new RuntimeException(e);
			}
		}
	}

	public String getMyName() {
		return name;
	}

	public int getPercentage() {
		return percentage;
	}

	public void setPercentage(int percentage) {
		if (percentage > 100) {
			percentage = 100;
		}
		this.percentage = percentage;
	}

	public void showCountingRate(int incRate) {
		System.out.printf("%s 개표율: %d%%(개표 증가율: %d%%)\n|%-50s|\n", getMyName(), getPercentage(), incRate,
			"*".repeat(getPercentage() / 2));
	}
}
