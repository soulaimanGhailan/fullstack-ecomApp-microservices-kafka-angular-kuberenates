import {Customer} from "../models/Customer.model";

export enum Hosts{
  // productService="http://localhost:8080" ,
  // customerService="http://localhost:8081"

  productService="http://product-service:8080" ,
  customerService="http://customer-service:8081"

}
export const Auth_Test_Customer:Customer ={
  customerId: "test-customer" , firstname: "soulaiman" ,lastname:"ghailan" , email:"soulaiman" , phoneNumber:"03666363666"
}
