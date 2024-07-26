import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import CustomButton from '../components/CustomButton.js';
import { authenticateUser } from '../utils/auth';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleLogin = () => {
        const user = authenticateUser(email, password);
        if(email === '' || password === ''){
            alert('Please enter both email and password')
        }
        else if (user) {
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/TrampaxLogo.png')} style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                    style={styles.eyeIconContainer}
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                >
                    <Image
                        source={
                            isPasswordVisible
                                ? require('../../assets/icons/eye.png')
                                : require('../../assets/icons/eye-off.png')
                        }
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity> 
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => alert('Forgotten Password pressed!')}>
                <Text style={styles.forgotPasswordText}>Forgotten Password?</Text>
            </TouchableOpacity>
            <CustomButton title="Login" onPress={handleLogin} />

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton} onPress={() => alert('Continue with Google pressed!')}>
                <View style={styles.googleButtonContent}>
                    <Image source={require('../../assets/icons/google.png')} style={styles.googleIcon} />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    logo: {
        width: 250,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 24,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 8,
        position: 'relative',
    },
    passwordInput: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 16,
    },
    eyeIcon: {
        width: 24,
        height: 24,
    },
    forgotPasswordContainer: {
        width: '88%',
        alignItems: 'flex-end',
    },
    forgotPasswordText: {
        color: '#007BFF',
        fontSize: 14,
        marginBottom: 8,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginVertical: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    orText: {
        marginHorizontal: 8,
        fontSize: 16,
        color: '#999',
    },
    googleButton: {
        width: '80%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    googleButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleIcon: {
        width: 18,
        height: 18,
        marginRight: 16,
    },
    googleButtonText: {
        color: '#333',
        fontSize: 18,
    },
});