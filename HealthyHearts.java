/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.haben.milestone1assigment;

/**
 *
 * @author Haben
 */
import java.util.Scanner;
public class HealthyHearts {
    public static void main(String[]args){
        
        int age ;
        String stringAge;
        double maximumHeartRate;
        
        Scanner inputReader = new Scanner(System.in);
         
        System.out.println("Welcome to the  maximum heart rate and target HR Zone calculator!");
        System.out.println("How old are you?");
        
        stringAge = inputReader.nextLine();
        age =  Integer.parseInt(stringAge);
        
        maximumHeartRate= 220-age;
         
        
        System.out.println("Your maxium heart rate should be " +  maximumHeartRate +" beats per minute.");
        System.out.println("Your target HR Zone is " + (maximumHeartRate *(50/100.0f)) + " - " + (maximumHeartRate*(85/100.0f)) +  " beats per minute." );
        
        
    }
   
}
