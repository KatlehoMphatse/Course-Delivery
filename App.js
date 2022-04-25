import { StatusBar } from 'react-native';
import { StyleSheet, Text,Image, View } from 'react-native';
import { ScrollView } from 'react-native';



export default function App() {
  return (
   
    <View style={styles.container}>
       <View style={styles.header}>
           <Text style={styles.Boldtext}>LIMKOKWING UNIVERSITY OF LESOTHO</Text>
           <Text style={{color:'white',fontWeight:'bold'}}>=Get Full Info On The Link Below=</Text>
           <Text style={{color:'black',fontWeight:'bold'}}>https://www.limkokwing.net/lesotho/academic/courses/</Text>
       </View>   
       
       <ScrollView> 
  <View style={styles.body}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <Image style={styles.Picture1} source= {require('./assets/softwaree.jpg')}/>
            <Text style={{position: 'absolute', fontSize: 22, fontWeight:'bold', color: 'white'}}>SOFTWARE ENGINEERING WITH MULTIMEDIA</Text>
            <Text style={{position:'absolute', fontSize: 13, fontWeight: 'bold', color:'white', bottom: 40}}>A Software Engineer is an IT professional who designs, develops and maintains computer software at a company</Text>
      </View> 
      
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, blurRadius: 50}}>
         <Image style={styles.Picture2} source= {require('./assets/graphic.jpg')}/>
            <Text style={{position: 'absolute', fontSize: 22, fontWeight:'bold', color: 'white'}}>GRAPHYC DESIGN</Text> 
               <Text style={{position:'absolute', fontSize: 13, fontWeight: 'bold', color:'white', bottom: 40}}>Be a potential designer around the global </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, blurRadius: 10}}>
         <Image style={styles.Picture3} source= {require('./assets/TOURISM.jpg')}/>
            <Text style={{position: 'absolute', fontSize: 22, fontWeight:'bold', color: 'white'}}>TOURISM MANAGEMENT</Text>
              <Text style={{position:'absolute', fontSize: 13, fontWeight: 'bold', color:'white', bottom: 40}}>Explore the World around  </Text>
      </View>  
      </View> 

      </ScrollView>  
      <StatusBar style="auto" /> 
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    height:900,
    
  },

  body:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 360,
    height: 800


  },

  header:{
    backgroundColor: 'green',
    height:100,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Boldtext:{
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
   
    
    
    
  },
 
  Picture1:{
    height: 200,
    width: 350,
    borderRadius: 10,
    marginTop: 10
    

  },

  Picture2:{
    height: 200,
    width: 350,
    borderRadius: 10,
    marginTop: 5

  },

  Picture3:{
    height: 200,
    width: 350,
    borderRadius: 10,
    marginTop: 5

  },

  container1:{
    alignItems: 'center',
    justifyContent: 'center', 
  },
 
});
