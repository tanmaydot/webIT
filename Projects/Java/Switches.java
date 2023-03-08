import java.util.*;
public class Switches {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String day = "";

        System.out.println("Enter a day :");
        day = scanner.nextLine();
        String lower_day = day.toLowerCase();
        switch(lower_day) {
            case "Sunday": System.out.println("It is Sunday!");
            break;
            case "Monday": System.out.println("It is Monday!");
            break;
            case "Tuesday": System.out.println("It is Tuesday!");
            break;
            case "Wednesday": System.out.println("It is Wednesday!");
            break;
            case "Thursday": System.out.println("It is Thursday!");
            break;
            case "Friday": System.out.println("It is Friday!");
            break;
            case "Saturday": System.out.println("It is Saturday!");
            break;
            default: System.out.println(day+ " is not a day!");
        }
        scanner.close();
    }
}
