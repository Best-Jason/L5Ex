// //Exercise 1
//
// import React from "react";
// import {FlatList, View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
//
// const App = () => {
//   return (
//       <View style={{marginBottom:20}}>
//           <StatusBar hidden={true} />
//           <FlatList data={datasource} renderItem={renderItem} />
//
//       </View>
//   )
// };
//
// const datasource = [
//     {key:"a"},
//     {key:"b"},
//     {key:"c"},
//     {key:"d"},
//     {key:"e"},
//     {key:"f"},
//     {key:"g"},
//     {key:"h"},
//     {key:"i"},
//     {key:"j"},
//     {key:"k"},
//     {key:"l"},
//     {key:"m"},
//     {key:"n"},
//     {key:"o"},
//     {key:"p"},
//     {key:"q"},
//     {key:"r"},
//     {key:"s"},
//     {key:"t"},
//     {key:"u"},
//     {key:"v"},
//     {key:"w"},
//     {key:"x"},
//     {key:"y"},
//     {key:"z"}
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         border: 1,
//     },
//     textStyle: {
//         fontSize: 15,
//         margin:10,
//         textAlign:"left"
//     }
// })
//
// const renderItem = ({item}) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
// export default App

//Exercise 2
import React from "react"
import {SectionList, FlatList, View, Text, StyleSheet, TouchableOpacity, StatusBar} from "react-native"



const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key:'i'},
            {key:'o'},
            {key:'u'},
        ],
        title:"Vowels", bgColor:'skyblue'},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key:"f"},
            {key:"g"},
            {key:"h"},
            {key:"j"},
            {key:"k"},
            {key:"l"},
            {key:"m"},
            {key:"n"},
            {key:"p"},
            {key:"q"},
            {key:"r"},
            {key:"s"},
            {key:"t"},
            {key:"v"}
        ],
        title:"Consonants", bgColor:'khaki'}
];

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold",
    },


    opacityStyle: {
        border: 1,
    },
    textStyle: {
        fontSize: 15,
        margin:10,
        textAlign:"left"
    }
})


const App = () => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

  return (
      <View style={{marginBottom:20}}>
          <StatusBar hidden={true} />
          <SectionList
              sections={datasource}
              renderItem={renderItem}
              renderSectionHeader={({section:{title, bgColor}})=>(
                  <Text style={[styles.headerText, {backgroundColor:bgColor}]}>{title}</Text>
                       )}/>

      </View>
  )
};



export default App;
