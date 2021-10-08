/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Haben
 */
import java.util.Random;
import java.util.Scanner;
public class DogGenetics {
    public static void main(String[]args){
        String dogName;
         int x1;
         int x2;
         int x3;
         int x4;
         int x5;
        Scanner inputReader = new Scanner(System.in);
        
        Random randomizer = new Random();
             x1= randomizer.nextInt(100)+1;
             x2= randomizer.nextInt(100-x1)+1;
             x3= randomizer.nextInt(100-x1-x2)+1;
             x4= randomizer.nextInt(100-x1-x2-x3)+1;
             x5= randomizer.nextInt(100-x1-x2-x3-x4);
        
        System.out.println("Hello Are you here to know your dog's DNA makeup?");
        System.out.println("Thats cool , would you please tell me your dogs name?");
        dogName = inputReader.nextLine();  
        
        
        if (!dogName.matches("[a-zA-Z_]+")) {
            System.out.println("Invalid name");
            System.out.println("Put valid dog name please!");
             dogName = inputReader.nextLine();
        
            System.out.println("Well then, I have this highly reliable report on " + dogName);
            System.out.println(dogName + " is a combination of:");
        
            System.out.println(x1+"% st.Bernand");
            System.out.println(x2+"% Chihuahua");
            System.out.println(x3+"% Dramatic RedNosed Asian Pug");
            System.out.println(x4+"%  Common Cur");
            System.out.println(x5+"% King Doberman");
            
            System.out.println("Wow, thats the best combination i have ever seen!");
        
      } 
        
    }
    
}
