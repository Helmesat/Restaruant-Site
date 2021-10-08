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
public class SummativeSums {
    public static void main(String[]args){
        int[] arr1 = { 1, 90, -33, -55, 67, -16, 28, -55, 15 };
        int[] arr2 = { 999, -60, -77, 14, 160, 301 };
        int[] arr3 = { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, -99}; 
   
        int sum1=add(arr1);
        int sum2=add(arr2);
        int sum3=add(arr3);
        
         System.out.println(" # Array 1 sum: " + sum1);
         System.out.println(" # Array 2 sum: " + sum2);
         System.out.println(" # Array 3 sum: " + sum3);
        
        
        
    }
        
        public static int add(int[] numbers){
       
        int add=0;
        for (int i =0; i< numbers.length;i++){
            add += numbers[i];
        }
          return add;
    }
    }

