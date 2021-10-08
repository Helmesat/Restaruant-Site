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
import java.util.Random;
public class RockPaperScissors {
    public static void main(String[]args){
        
        Scanner inputReader = new Scanner(System.in);
        
          String letsContinueGame="y"; 
          int move;
          int compMove=0;
          
            int numRounds=0;
            
            int win=0;
            int lose=0;
            int tie=0;
            
           
        
        
                System.out.println("Welcome to Rock,Paper,Sicissors Game!");
                System.out.println("I hope you are familiar with the game rules if not, Rock beats Scissors, Scissors beats Paper and Paper beats Rock! ");
        do{
                System.out.println("How many round do you want to play?(min :1, max :10)");
             
                  numRounds=Integer.parseInt(inputReader.nextLine());
        if   ( 0<numRounds && numRounds<11){
             
         
            for (int i=0; i<numRounds; i++){
                 
                System.out.println("Please enter your move. Type ( Rock(1), paper(2), Scissiors(3). ");
                      move=Integer.parseInt(inputReader.nextLine());
                    
                      switch (move) {
                   case 1:
                       System.out.println("User's     move:Rock.");
                       break;
                   case 2:
                       System.out.println("User's     move:Paper.");
                       break;
                   case 3:
                       System.out.println("User's     move:Scissors.");
                       break;
                   default:
                       break;
               }
                 
                  Random rand = new Random();
                  int r = rand.nextInt(3)+1;
                  
                  switch (r)   {
                              case 1:
                                   System.out.println("Computer's move:Rock.");
                                  compMove=1;
                                  break;
                              case 2:
                                   System.out.println("Computer's move:Paper.");
                                  compMove=2;
                                  break;
                              case 3:
                                   System.out.println("Computer's move:Scissors.");
                                  compMove=3;
                                  break;
                              }
                                
                        if (move==compMove) {
                              tie++;
                            System.out.println("Tie!!"); 
                           } else if (move==1 && compMove==2 ||move==2 && compMove==3||move ==3 && compMove==1) {
                              lose++;
                            System.out.println("Computer Win, you lose!");
                           }  else if (compMove==1 && move==2 ||compMove==2 && move==3||compMove==3&& move==1) {
                              win++;
                            System.out.println("User Win, computer lose!");
                           }    
               }
           } 
                         else{
                                System.out.println("Oops!Sorry " +numRounds + " is outside the range, please choose among 1 and 10 range number.");
                                System.exit(0); 
                            }                    
                                System.out.println("Number of Wins : "+win+"."); 
                                System.out.println("Number of Lose "+lose+".");
                                System.out.println("Number of Ties Games : "+tie+".");
                                    
                        if (win>lose) {
                                    System.out.println("WINNER!!!");
                        } else{
                                    System.out.println(" you are not the winner!");
                              }    
                                    System.out.println("Do you want to continue playing ?(y/n)");
                                  letsContinueGame=inputReader.nextLine();
                             }
                                    while("y".equalsIgnoreCase(letsContinueGame));
                                 
                                    System.out.println("Thanks for Playing!");
                        } 
                }
       
               
    
    
    

