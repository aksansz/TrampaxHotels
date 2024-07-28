import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Modal, Button } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import hotelData from '../data/hotelData';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: viewportWidth } = Dimensions.get('window');

const renderCarouselItem = ({ item, onPress }) => (
    <TouchableOpacity onLongPress={() => onPress(item)}>
        <Image source={item} style={styles.image} />
    </TouchableOpacity>
);

const renderItem = ({ item, onPress }) => (
    <View style={styles.card}>
        <Carousel
            loop
            width={viewportWidth - 60}
            height={200}
            autoPlay={true}
            data={item.images}
            renderItem={({ item }) => renderCarouselItem({ item, onPress })}
        />
        <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{item.rating} ({item.reviews})</Text>
                </View>
            </View>
            <Text>{item.location}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>{item.price}</Text>
                <Text style={styles.newPrice}>{item.discountedPrice}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {item.exchange && (
                    <TouchableOpacity style={[styles.button, styles.exchangeButton]} onPress={() => alert('You can exchange it for your own property')}>
                        <Text style={styles.buttonText}>Exchange</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={[styles.button, styles.pointsButton]} onPress={() => alert('You can get this by spending points')}>
                    <Text style={styles.buttonText}>Points</Text>
                </TouchableOpacity>
                {item.service && (
                    <TouchableOpacity style={[styles.button, styles.serviceButton]} onPress={() => alert('You can get this by giving service')}>
                        <Text style={styles.buttonText}>Service</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    </View>
);

function HomeScreen({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logoutButton}>Logout</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    const handleImagePress = (image) => {
        setCurrentImage([{ url: '', props: { source: image } }]);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={hotelData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => renderItem({ item, onPress: handleImagePress })}
            />
            {currentImage && (
                <Modal visible={isModalVisible} transparent={true}>
                    <ImageViewer imageUrls={currentImage} onSwipeDown={() => setModalVisible(false)} enableSwipeDown />
                </Modal>
            )}
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
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    ratingText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#555',
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
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: '#999',
        marginRight: 8,
    },
    newPrice: {
        color: '#333',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    exchangeButton: {
        backgroundColor: '#4CAF50', // Green
    },
    pointsButton: {
        backgroundColor: '#2196F3', // Blue
    },
    serviceButton: {
        backgroundColor: '#FF8C00', // Amber
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
