import { useState } from 'react';
const [info, setInfo] = useState([
  { name: "Bola", id: '1' },
  { name: "Julius", id: '2' },
  { name: "Kelvin", id: '3' },
  { name: "Evelyn", id: '4' },
  { name: "Helen", id: '5' },
  { name: "Fola", id: '6' },
  { name: "Trin", id: '7' },
])
{/* <FlatList 
        keyExtractor={(item) => item.id}
        data={info}
        renderItem={({ item })=> (
          <Text style={styles.each}>{item.name}</Text>
        )}
      /> */}
      {/* <ScrollView>
        {info.map(each=>(
          <View key={each.id}>
              <Text style={styles.each}>{each.name}</Text>
          </View>
        ))}
      </ScrollView> */}