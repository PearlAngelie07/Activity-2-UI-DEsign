import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  headerLeft: {
    flexDirection: 'row',
  },

  headerText: {
    marginTop:20,
    marginRight: 20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  searchIcon: {
    marginTop:20,
    width: 24,
    height: 24,
    alignItems: 'flex-end',
  flexDirection:'row-reverse',
    marginLeft: 100,
  },
  filters: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    flex:'1',
    borderRadius: 5,
    marginRight: 10,
    marginLeft:10,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    flexWrap:"wrap",
  },
  all:{
    marginTop:15,
    marginRight: 20,
    marginLeft: 10,
    fontSize: 25,
    color:'#bf00ff',
  },
  filterText1: {
    fontSize: 16,
    padding: 5,
  },
  filterText2: {
    fontSize: 18,
    color:'#bf00ff',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    color: 'lightgray',
  },
  mangaItem: {
    width: '32%',
    marginBottom: 5,
    borderRadius: 5,
   
  },
  mangaItemImage: {
    width: '100%',
    height: 150,
  },
  mangaItemTitle: {
    padding: 7,
    fontSize: 12,
  },
  scrollableContent: {
    flexGrow:1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  
  },
  navItem: {
    alignItems: 'center',
    width:'auto',
    marginTop:10,
    marginBottom:10,
  },
  navIcon: {
    width: 20,
    height: 17,

  },
  navText: {
    color: 'black',
    fontSize: 9,
  },
});