import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView, Pressable } from 'react-native';
import { styles } from './src/styleSheet';

const MangaItem = ({ imageUri, title }) => {
  return (
    <View style={styles.mangaItem}>
      <Image source={{ uri: imageUri }} style={styles.mangaItemImage} />
      <Text style={styles.mangaItemTitle}>{title}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.headerLeft}>
          <Text style={styles.headerText}>For U</Text>
          <Text style={styles.all}>ALL</Text>
          <Text style={styles.headerText}>LATEST</Text>
          <Image
          source={{uri:'https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/search-259.png'}}
          style={styles.searchIcon}
        />
        </View>
        
      </View>

      <View style={styles.filter}>
        <View style={styles.filters}>
        <Text style={styles.filterText1}>Genre</Text>
        <Text style={styles.filterText2}>All</Text>
        </View>
        <View style={styles.filters}>
        <Text style={styles.filterText1}>Status</Text>
        <Text style={styles.filterText2}>All</Text>
        </View>
        <View style={styles.filters}>
        <Text style={styles.filterText1}>Sort By</Text>
        <Text style={styles.filterText2}>Popularity</Text>
        </View>
      </View>

      {/* Grid of Manga Items */}
      <ScrollView style={styles.scrollableContent}>
      <View style={styles.gridContainer}>
        <MangaItem
          imageUri="https://i.pinimg.com/1200x/8f/ee/98/8fee98fb2296d70ddd247a3a0195d7a1.jpg"
          title="Naruto"
        /> 
        <MangaItem
          imageUri="https://static.wikia.nocookie.net/onepiece/images/c/c6/Volume_100.png"
          title="One Piece"
        />
        <MangaItem
          imageUri="https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6242758-63.jpg"
          title="Fairytail"
        />
        <MangaItem
          imageUri="https://m.media-amazon.com/images/I/41BTosIen7L.jpg"
          title="Eleceed"
        />
        <MangaItem
          imageUri="https://cdn.kobo.com/book-images/07d1ab28-6fb4-4bfd-b125-21354e434b17/1200/1200/False/spy-x-family-vol-1.jpg"
          title="Spy X Family"
        />
        <MangaItem
          imageUri="https://static.wikia.nocookie.net/kurokonobasuke/images/6/6a/Volume_24.png"
          title="Kuroko No Basuke"
        />
        <MangaItem
          imageUri="https://otakuteca.com/images/books/cover/6300f87380f30.jpg"
          title="Existence"
        />
        <MangaItem
          imageUri="https://cdn.kobo.com/book-images/2c51ebd3-5134-41fc-8a1d-1bc83610fd55/1200/1200/False/solo-leveling-vol-3-comic.jpg"
          title="Solo Leveling"
        />
        <MangaItem
          imageUri="https://cdn.kobo.com/book-images/71d8ed5c-1205-490f-b499-57bab7d5386f/1200/1200/False/kimi-ni-todoke-from-me-to-you-vol-7.jpg"
          title="Kimi Ni Todoke"
        />
      </View>
</ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Image
            source={{uri:'https://icons.veryicon.com/png/o/commerce-shopping/mobile-taobao-icon-library/discover-8.png'}} 
            style={styles.navIcon}
          />
          <Text style={styles.navText}>DISCOVER</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image
            source={{uri:'https://static.vecteezy.com/system/resources/previews/010/158/312/original/heart-icon-sign-symbol-design-free-png.png'}} 
            style={styles.navIcon}
          />
          <Text style={styles.navText}>FAVORITES</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FWSl9WnRqS9eENUubva3h1SqlNq8Y_W5t46Qq0e6ryCz4NNn'}}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>RECENT</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image
            source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXG0VP2d3G80G_3TNGjnCU6KvK4xe3Gl1zYaZOLu0JSLML3dpp'}}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>DOWNLOADS</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/6386/6386976.png'}}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>ACCOUNT</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

