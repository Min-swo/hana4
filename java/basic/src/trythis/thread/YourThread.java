package trythis.thread;

public class MyThread implements Runnable {
	@Override
	public void run() {
		System.out.println("YourThread Started...");
		for (int i = 1; i <= 5; i++) {
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				throw new RuntimeException(e);
			}
			System.out.println("YourThread = " + i);
		}
		System.out.println("YourThread end.");
	}
}
