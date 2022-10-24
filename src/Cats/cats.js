import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

function Cats() {
    const [text, setText] = useState('');

    return (
        <View style={{padding: 10}}>
            <Image source={require('../../assets/sad_cat.png')} style={{ width: 200, height: 200 }}></Image>
            <TextInput
                style={{height: 40}}
                placeholder="Type here"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word && '😺Meow ').join(' ')}
            </Text>
        </View>
    );
}

export default Cats