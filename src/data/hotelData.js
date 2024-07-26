const hotelData = [
    {
        id: '1',
        title: 'Swiss Hotel',
        location: 'New York',
        price: '$300/daily',
        images: [
            require('../../assets/images/Hotel1.webp'),
            require('../../assets/images/Hotel1-room.jpg'),
            require('../../assets/images/Hotel1-pool.jpg'),
        ]
    },
    {
        id: '2',
        title: 'Modern Condo',
        location: 'San Francisco',
        price: '$200/daily',
        images: [
            require('../../assets/images/Hotel2.jpg'),
            require('../../assets/images/Hotel2-room.jpg'),
            require('../../assets/images/Hotel2-pool.webp'),
        ]
    },
    {
        id: '3',
        title: 'Cozy Studio',
        location: 'Chicago',
        price: '$100/daily',
        images: [
            require('../../assets/images/Hotel3.jpg'),
            require('../../assets/images/Hotel3-room.jpg'),
            require('../../assets/images/Hotel3-pool.webp'),
        ]
    },
];

export default hotelData;