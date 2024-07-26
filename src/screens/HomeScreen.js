import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import hotelData from '../data/hotelData';

const { width: viewportWidth } = Dimensions.get('window');

const renderCarouselItem = ({ item }) => (
    <Image source={item} style={styles.image} />
);

const renderItem = ({ item }) => (
    <View style={styles.card}>
        <Carousel
            loop
            width={viewportWidth - 60}
            height={200}
            autoPlay={true}
            data={item.images}
            renderItem={({ item }) => renderCarouselItem({ item })}
        />
        <View style={styles.infoContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>{item.location}</Text>
            <Text>{item.price}</Text>
        </View>
    </View>
);

function HomeScreen({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logoutButton}>Logout</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hotels</Text>
            <FlatList
                data={hotelData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: 16,
        marginVertical: 8,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
    },
    infoContainer: {
        marginTop: 16,
    },
    logoutButton: {
        marginRight: 16,
        paddingTop: 2,
        color: '#007BFF',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
