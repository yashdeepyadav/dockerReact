node {   

      def app     
      
 
      stage('Clone repository') {               
             
            checkout scm    
      }
      
      stage('test image') {         
       
               
       }   
      
      stage('Build image') {         
       
            app = docker.build("samsharan/built-by-jenkins")    
       }   
      

       stage('Push image') {
                                                  docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")        
              }    
           }
        }
