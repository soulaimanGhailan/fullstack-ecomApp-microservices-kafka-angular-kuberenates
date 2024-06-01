// export const environment = {
//   /** the docker host ip address instead or localhost **/
//   productService:"http://10.10.9.133:30010" ,
//   customerService:"http://10.10.9.133:30020" ,
//   Auth_Test_Customer : {
//     customerId: "test-customer" , firstname: "soulaiman" ,lastname:"ghailan" , email:"soulaiman" , phoneNumber:"03666363666"
//   }
// };
export const environment = {
  /** the docker host ip address instead or localhost **/
  productService:"http://localhost:8082" ,
  customerService:"http://localhost:8081" ,
  KEYCLOAK_SERVER_URL: "http://localhost:8080/"  ,
  KEYCLOAK_REALM: "ecome-realm"  ,
  KEYCLOAK_CLIENT_ID: "ecom-app"  ,

};
